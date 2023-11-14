import { getPropertyDetail , getEquipmentDetail , getContactInfo } from './property-detail.api';
import { history } from '../../core/router';
import { setPropertyValues } from './property-detail.helpers';
import { propertyViewModel } from './property-detail.mappers.js';
import { onUpdateField, onSubmitForm, onSetError, onSetFormErrors } from '../../common/helpers/element.helpers';
import { formValidation } from './property-detail.validations';


//Obtenemos Id de URL
const params = history.getParams();
console.log(params.id)

// Usamos el método promiseAll para resolver las dos llamadas
Promise.all([getPropertyDetail(params.id), getEquipmentDetail()])
.then(([apiAccount, equipmentDataList]) => {
// Espacio de trabajo con ambos resultados
  console.log(apiAccount);
  //console.log(equipmentDataList);
//Pasamos información recuperada al mapper (modelación)
  const viewModelProperty  = propertyViewModel(apiAccount,equipmentDataList)
  console.log(viewModelProperty);
//Pintamos informacion en pantalla
  setPropertyValues(viewModelProperty)
})
.catch(error => {
  // En caso de Errores - si alguna de las promesas es rechazada 
  console.error('Ha ocurrido un error:', error);
});

// Generamos Modelo de vista Formulario
let form = {
    email: '',
    message:'',
}

// Recopilamos info ingresada a los campos (acudimos a métodos helpers / onupdateField)
onUpdateField('email',event => {
    const value = event.target.value;
    form = {...form, email:value}

// Validamos campos formValidation() y pintamos error onSetError()
    formValidation.validateField('email',form.email)
    .then(result => {onSetError('email',result)
    })
})

onUpdateField('message',event => {
    const value = event.target.value;
    form = {...form, message:value}

    formValidation.validateField('message',form.message)
    .then(result => {onSetError('message',result)
    })
})


// Controlamos navegacion tras diligenciar el formulario y dar click en enviar
// Creamos funcion onNavigate(). Esta será utilizada al final en submitForm()

const onNavigate = form => {
    if (form) {
        //history.back();
        document.getElementById("contact-button").disabled = true
        alert('Mensaje enviado exitosamente. Pronto un asesor se comunicará contigo');
        } else {
        alert('Diligencie los campos solicitados');
        }
    };


// Capturamos Id de boton y asignamos función tan pronto es presionado (onsubmitForm())
// Creamos promesa en api.js para subir datos a servidor. La Importamos (getContactInfo()

onSubmitForm('contact-button',() => {
    //console.log({form}) inicialmente por consola para revisar captura adecuada de datos 
    
    // Validamos todo el formulario
    formValidation.validateForm(form).then(result => {
    onSetFormErrors(result);

        if (result.succeeded){
        getContactInfo(form).then(contactInfo => {
        onNavigate(contactInfo)
        console.log({contactInfo})
        }
        )}
    })
})
