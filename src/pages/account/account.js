import {
  onUpdateField,
  onSubmitForm,
  onSetError,
  onSetFormErrors,
  onSetValues,
} from '../../common/helpers';
import { formValidation } from './account.validations';
import { history } from '../../core/router';
import { insertAccount, getAccount, updateAccount } from './account.api';
import { mapAccountVmToApi, mapAccountApiToVm } from './account.mappers';

//1 CAPTURAMOS EL ID DE LA URL, SI ES TRUE, OBTENEMOS CUENTA, CONVERTIMOS
// A VM, Y FINALMENTE CONECTAMOS AL HTML (PARA QUE SE VEA EN PANTALLA)

//Modelo de vista - en caso de crear cuenta
let account = {
  id: '',
  type: '',
  alias: '',
};

/* QUE SON LOS PARAMS, O QUE PUNTUALMENTE TOMA? los "parámetros de la URL" se refiere a las partes de la URL que vienen después del signo de interrogación (?) y que generalmente se usan para pasar información adicional a la página web. Estos parámetros están formateados como pares clave-valor y se conocen comúnmente como "query parameters" o "parámetros de consulta. Ejemplo: https://example.com/page?name=JohnDoe&id=123.  Los parámetros de la URL son name=JohnDoe y id=123. La funcion getParams() toma estos parámetros y los convierte en un objeto de JavaScript  {name: 'JohnDoe', id: '123'}*/

const params = history.getParams();
const isEditMode = Boolean(params.id);

if (isEditMode) {
  getAccount(params.id).then((apiAccount) => {
    account = mapAccountApiToVm(apiAccount);
    onSetValues(account);
  });
}

// CAPTURA Y ACTUALIZACIÓN DE CAMPO 1
onUpdateField('type', (event) => {
  const value = event.target.value;
  account = { ...account, type: value };

  formValidation.validateField('type', account.type).then((result) => {
    onSetError('type', result);
  });
});

// CAPTURA Y ACTUALIZACIÓN DE CAMPO 2
onUpdateField('alias', (event) => {
  const value = event.target.value;
  account = { ...account, alias: value };

  formValidation.validateField('alias', account.alias).then((result) => {
    onSetError('alias', result);
  });
});

/* FUNCION CLAVE: ONSAVE
CONVERTIMOS DATOS VM A API ("LOS DEVOLVEMOS"). SI
TIENE ID, ACTUALIZA LA INFO, DE LO CONTARIO, CREA UNA NUEVA CUENTA.*/

const onSave = () => {
  const apiAccount = mapAccountVmToApi(account);
  return isEditMode ? updateAccount(apiAccount) : insertAccount(apiAccount);
};

// PROCESAMIENTO DE BOTON
onSubmitForm('save-button', () => {
  //console.log({ account });
  formValidation.validateForm(account).then((result) => {
    onSetFormErrors(result);

    if (result.succeeded) {
      onSave().then(() => {
        history.back();
      });
    }
  });
});

