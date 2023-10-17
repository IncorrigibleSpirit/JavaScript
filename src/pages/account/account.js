import { onUpdateField,onSubmitForm,onSetError,onSetFormErrors, onSetValues,
} from '../../common/helpers';
import { formValidation } from './account.validations';
import { history } from '../../core/router';
import { insertAccount, getAccount, updateAccount } from './account.api';
import { mapAccountVmToApi, mapAccountApiToVm } from './account.mappers';


//CAPTURAMOS EL ID DE LA URL, SI ES TRUE, OBTENEMOS CUENTA, CONVERTIMOS 
// A VM, Y FINALMENTE CONECTAMOS AL HTML (PARA QUE SE VEA EN PANTALLA)

let account = {
    id: '',
    type: '',
    alias: '',
    };

const params = history.getParams();
const isEditMode = Boolean(params.id);
    
    if (isEditMode) {
        getAccount(params.id).then(apiAccount => {
        account = mapAccountApiToVm(apiAccount);
        onSetValues(account);
        });
    }

// CAPTURA Y ACTUALIZACIÓN DE CAMPO 1
onUpdateField('type', event => {
    const value = event.target.value;
    account = { ...account, type: value };

    formValidation.validateField('type', account.type).then(result => {
    onSetError('type', result);
    });

});


// CAPTURA Y ACTUALIZACIÓN DE CAMPO 2
onUpdateField('alias', event => {
    const value = event.target.value;
    account = { ...account, alias: value };

    formValidation.validateField('alias', account.alias).then(result => {
    onSetError('alias', result);
    });

})

// CREAMOS FUNCION ONSAVE, CONVERTIMOS DATOS VM A API ("LOS DEVOLVEMOS"), Y SI
// TIENE ID, ACTUALIZA LA INFO, CREA UNA NUEVA CUENTA

const onSave = () => {
    const apiAccount = mapAccountVmToApi(account);
    return isEditMode ? updateAccount(apiAccount) :insertAccount(apiAccount);
    };
    

// PROCESAMIENTO DE BOTON
onSubmitForm('save-button', () => {
    //console.log({ account });
    formValidation.validateForm(account).then(result => {
    onSetFormErrors(result);

        if (result.succeeded) {
            onSave().then(() => {
            history.back();
            });
        };
    });
});
