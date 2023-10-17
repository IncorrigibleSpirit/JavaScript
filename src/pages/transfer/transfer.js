import { history } from '../../core/router';
import { setAccountOptions } from './transfer.helpers'
import { insertTransfer, getAccount } from './transfer.api';
import { onUpdateField,onSubmitForm,onSetError,onSetFormErrors } from '../../common/helpers';
import { formValidation } from './transfer.validations';
import { viewModelToApi } from './transfer.mappers';


// 1. Obtenemos el ID de la URL (params.id)
// 2. Ingresamos los valores al select haciendo uso del metodo setAccountOptions()

const params = history.getParams();
const isTransferMode = Boolean(params.id);

if (isTransferMode) {
    console.log(params.id)
    getAccount(params.id).then(apiAccount => {
    console.log(apiAccount)

    setAccountOptions (apiAccount, params.id);
})
}

//3. Establecemos modelo de vista de página

let domesticTransfers = {
    selectAccountId: " ",
    iban:" ",
    name: " ",
    amount:" ",
    concept:" ",
    notes:" ",
    day:" ",
    month:" ",
    year:" ",
    email:" ",
    date: "",
};

//4. Recoleccion de datos ingresados por el usuario(OnupdateField) 
//4.1 Aplica validación de campos (formValidation.validateField)
//4.2 onSetError: programa y ajusta la respuesta ante un error (pinta el mensaje ante un error)

onUpdateField('select-account', event => {
    const value = event.target.value;
    domesticTransfers = { ...domesticTransfers,'selectAccountId': value };

    formValidation.validateField('select-account', domesticTransfers.selectAccountId).then(result => {
    onSetError('select-account', result);
    });
})

onUpdateField('iban', event => {
    const value = event.target.value;
    domesticTransfers = { ...domesticTransfers, iban: value };

    formValidation.validateField('iban', domesticTransfers.iban).then(result => {
    onSetError('iban', result);
    });
})

onUpdateField('name', event => {
    const value = event.target.value;
    domesticTransfers = { ...domesticTransfers, name: value };

    formValidation.validateField('name', domesticTransfers.name).then(result => {
    onSetError('name', result);
    });
})

onUpdateField('amount', event => {
    const value = event.target.value;
    domesticTransfers = { ...domesticTransfers, amount: value };

formValidation.validateField('amount', domesticTransfers.amount).then(result => {
    onSetError('amount', result);
    });
})

onUpdateField('concept', event => {
    const value = event.target.value;
    domesticTransfers = { ...domesticTransfers, concept: value };
    
    formValidation.validateField('concept', domesticTransfers.concept).then(result => {
    onSetError('concept', result);
    });
})

//Campo opcional - No necesita validación
onUpdateField('notes', event => {
    const value = event.target.value;
    domesticTransfers = { ...domesticTransfers, notes: value };
    });

onUpdateField('day', event => {
    const value = event.target.value;  
    domesticTransfers = { ...domesticTransfers, day: value, date: `${domesticTransfers.year}-${domesticTransfers.month}-${value}`};

    formValidation.validateField('day', domesticTransfers.day).then(result => {
        onSetError('date', result);
        });
})

onUpdateField('month', event => {
    const value = event.target.value;
    domesticTransfers = { ...domesticTransfers, month: value, date:`${domesticTransfers.year}-${value}-${domesticTransfers.day}`};
    
    formValidation.validateField('month', domesticTransfers.month).then(result => {
        onSetError('date', result);
        });
})   

onUpdateField('year', event => {
    const value = event.target.value;
    domesticTransfers = { ...domesticTransfers, year: value, date:`${value}-${domesticTransfers.month}-${domesticTransfers.day}`};
    
    formValidation.validateField('year', domesticTransfers.year).then(result => {
        onSetError('date', result);
        });
}) 

onUpdateField('email', event => {
    const value = event.target.value;
    domesticTransfers = { ...domesticTransfers, email: value };

    formValidation.validateField('email', domesticTransfers.email).then(result => {
    onSetError('email', result);
        });
    })

// Lo que sucede en términos de navegacion tras dar clic en el botón "realizar Transferencia"

const onNavigate = deposit => {
    if (deposit) {
        //history.back();
        document.getElementById("transfer-button").disabled = true
        alert('La transferencia se realizó exitosamente');
        } else {
        alert('Diligencie los campos solicitados');
        }
    };


//5. Lo que programa tras dar clic en el botón "realizar trasferencia"
//5.1 Al dar clic en el boton, incialmente validaremos el formualrio completo (formValidation.validateForm)
//5.2 onSetFormErrors: Pinta resultados en caso de que haya un erro en alguno de los campos del formulario
//5.3 Si todo corre bien, mapeamos la info recogida del formulario "domesticTransfer" al modelo de vista ("viewModelToApi")
//5.4 Insertamos datos al servidor ya mapeados (insertTransfer)
onSubmitForm('transfer-button', () => {
        formValidation.validateForm(domesticTransfers).then(result => {
            onSetFormErrors(result);

                if (result.succeeded) {
                    const infoInVisualMode = viewModelToApi(domesticTransfers)
                    console.log(infoInVisualMode)
                    insertTransfer(infoInVisualMode).then(newTransfer => {
                    onNavigate(newTransfer);                
                    });
                }   
        });
    });