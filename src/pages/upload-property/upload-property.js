
import { onUpdateField, onSubmitForm} from '../../common/helpers/element.helpers';
import { setCheckBoxList, setOptionList } from './upload-property.helpers'
import { getSaleTypeList , getProvinceList } from './upload-property.api';
import { formValidation } from './upload-property.validations'

//1. Creamos modelo de vista de página 
let newProperty = {
    title: " ",
    notes:" ",
    email: " ",
    phone:" ",
    price:" ",
    saleTypes:" ",
    address:" ",
    city:" ",
    province:" ",
    squareMeter:" ",
    rooms: "",
    bathrooms:" ",
    locationUrl:" ",
    newFeature:" ",
    equipments:" ",
};

//4) Iniciamos llamadas a servidor para recoger datos
Promise.all([
    getSaleTypeList(),
    getProvinceList()

    ]).then(([saleTypeList, provinceList]) => { 
        console.log(saleTypeList)
        console.log(provinceList)
        setCheckBoxList(saleTypeList,'saleTypes');
        setOptionList(provinceList,'province')
        }
    )



//2 // Recopilamos info ingresada a los campos (acudimos a métodos helpers / onupdateField)

//Datos generales 

onUpdateField('title',event => {
    const value = event.target.value;
    newProperty = {...newProperty, title:value}
})

onUpdateField('notes',event => {
    const value = event.target.value;
    newProperty = {...newProperty, notes:value}
})

onUpdateField('email',event => {
    const value = event.target.value;
    newProperty = {...newProperty, email:value}
})

onUpdateField('phone',event => {
    const value = event.target.value;
    newProperty = {...newProperty, phone:value}
})

onUpdateField('price',event => {
    const value = event.target.value;
    newProperty = {...newProperty, price:value}
})

/*
onUpdateField('saleTypes',event => {
    const value = event.target.value;
    newProperty = {...newProperty, saleTypes:value}
})
*/

// Datos vivienda

onUpdateField('address',event => {
    const value = event.target.value;
    newProperty = {...newProperty, address:value}
})

onUpdateField('city',event => {
    const value = event.target.value;
    newProperty = {...newProperty, city:value}
})

onUpdateField('province',event => {
    const value = event.target.value;
    newProperty = {...newProperty, province:value}
})

onUpdateField('squareMeter',event => {
    const value = event.target.value;
    newProperty = {...newProperty, squareMeter:value}
})

onUpdateField('rooms',event => {
    const value = event.target.value;
    newProperty = {...newProperty, rooms:value}
})

onUpdateField('bathrooms',event => {
    const value = event.target.value;
    newProperty = {...newProperty, bathrooms:value}
})


onUpdateField('locationUrl',event => {
    const value = event.target.value;
    newProperty = {...newProperty, locationUrl:value}
})

// Caracteristicas básicas 
onUpdateField('newFeature',event => {
    const value = event.target.value;
    newProperty = {...newProperty, newFeature:value}
})

// equipamiento
onUpdateField('equipments',event => {
    const value = event.target.value;
    newProperty = {...newProperty, equipments:value}
})



//3. Capturamos evento al momento de dar clic en el boton guardar
onSubmitForm('save-button',() => {
console.log({newProperty})  
})





