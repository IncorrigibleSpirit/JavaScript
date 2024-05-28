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

/*COMENTARIO - ACLARACION
QUE SON LOS "PARAMS" (query parameters) o que puntualmente? los "parámetros de la URL" se refiere a las partes de la URL que vienen después del signo de interrogación (?)
 y que generalmente se usan para pasar información adicional. Estos parámetros están formateados como pares clave-valor y se conocen comúnmente como "query parameters" 
o "parámetros de consulta. Ejemplo: https://example.com/page?name=JohnDoe&id=123.  Los parámetros de la URL son name=JohnDoe y id=123. La funcion getParams() 
toma estos parámetros y los convierte en un objeto de JavaScript  {name: 'JohnDoe', id: '123'}*/

//0 Modelo de vista - en caso de crear cuenta
let account = {
  id: '',
  type: '',
  alias: '',
};

/*4 El siguiente procedimiento permite la captura del parametro de consulta (query parameter), si es "True", procedemos a tomar LA INFO DE LA CUENTA haciendo uso del metodo
 de la API "getAccount" (GET). De esta extraccion tendremos dos campos de datos (tipo de cuenta y alias), los cuales seran ajustados por el mapper. 
Es de señalar, que esta informacion se muestra en pantalla tan pronto el usuario hace clic en el numero de una de las cuentas listadas (ES91 2100 0418 4502 0005 1332) 
en la pagina account-list. Finalmente conectamos la informacion al HTML usando "onSetValues".*/

const params = history.getParams();
const isEditMode = Boolean(params.id);

if (isEditMode) {
  getAccount(params.id).then((apiAccount) => {
    account = mapAccountApiToVm(apiAccount);
    onSetValues(account);
  });
}

// 1 Captura y validacion de campo type
onUpdateField('type', (event) => {
  const value = event.target.value;
  account = { ...account, type: value };

  formValidation.validateField('type', account.type).then((result) => {
    onSetError('type', result);
  });
});

// 2 Captura y validacion de campo alias
onUpdateField('alias', (event) => {
  const value = event.target.value;
  account = { ...account, alias: value };

  formValidation.validateField('alias', account.alias).then((result) => {
    onSetError('alias', result);
  });
});


/* 5 Funcion Clave (onsave): Nos disponemos a guardar informacion que se ha diligenciado en el formulario ( Ya sea que se haya ingresado por el numero de IBAN, 
o se haya dado click en el boton "crear nueva cuenta"). Inicialmente la informacion se transformará con el mapper para que se ajuste a la data del servidor, 
luego se preguntará si es editmode. Si tiene parametro de consulta ID, se actualiza info. De lo contrario, se crea nueva cuenta.*/
const onSave = () => {
  const apiAccount = mapAccountVmToApi(account);
  return isEditMode ? updateAccount(apiAccount) : insertAccount(apiAccount);
};


// 3 captura de boton y validacion de formulario
onSubmitForm('save-button', () => {
  //console.log({ account });
  formValidation.validateForm(account).then((result) => {
    onSetFormErrors(result);

// 6 Si es existoso todo, procedemos a salvar y volver a la pagina account-list
    if (result.succeeded) {
      onSave().then(() => {
        history.back();
      });
    }
  });
});
