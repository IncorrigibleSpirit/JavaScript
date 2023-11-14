
import { onUpdateField, onSubmitForm, onSetError, onSetFormErrors, onAddFile} from '../../common/helpers/element.helpers';
import { setCheckboxList, setOptionList, onAddFeature, onRemoveFeature, formatCheckboxId, onAddImage } from './upload-property.helpers'
import { getSaleTypeList , getProvinceList, getEquipmentDetail, insertNewProperty } from './upload-property.api';
import { formValidation } from './upload-property.validations'
import { history } from '../../core/router';


//1. Creamos modelo de vista de página 
let newProperty = {
    title:"",
    notes:"",
    email:"",
    phone:"",
    price:"",
    saleTypeIds:[],
    address:"",
    city:"",
    province:"",
    squareMeter:"",
    rooms:"",
    bathrooms:"",
    locationUrl:"",
    mainFeatures:[],
    equipmentIds:[],
    images:[]
};


//4 Llamadas a servidor - cargamos las promesas importada desde el .api.js
Promise.all([
    getSaleTypeList(),
    getProvinceList(),
    getEquipmentDetail()

    ]).then(([saleTypeList, provinceList,equipmentDataList]) => { 

        setCheckboxList(saleTypeList,'saleTypes');
        setOptionList(provinceList,'province');
        setEventsSaleTypes(saleTypeList); //6.1 Se pasa data a funcion para gestionar checkbox dinámico - SaleTypes
        setCheckboxList(equipmentDataList, 'equipments')
        setEventsEquipments(equipmentDataList) //7.1 Se pasa data a funcion para gestionar checkbox dinámico - equipments
        }
    )


//2 Recogemos data de campos (métodos helpers y otros para casos "puntuales")


//Datos generales 

onUpdateField('title',event => {
    const value = event.target.value;
    newProperty = {...newProperty, title:value}

    formValidation.validateField('title',newProperty.title)
    .then(result => {onSetError('title',result)
    })
})

onUpdateField('notes',event => {
    const value = event.target.value;
    newProperty = {...newProperty, notes:value}

    formValidation.validateField('notes',newProperty.notes)
    .then(result => {onSetError('notes', result)
    })
})

onUpdateField('email',event => {
    const value = event.target.value;
    newProperty = {...newProperty, email:value}

    formValidation.validateField('email', newProperty.email)
    .then(result => {onSetError('email', result)
    })
})

onUpdateField('phone',event => {
    const value = event.target.value;
    newProperty = {...newProperty, phone:value}

    formValidation.validateField('phone', newProperty.phone)
    .then(result => {onSetError('phone', result)
    })
})

onUpdateField('price',event => {
    const value = Number(event.target.value); // Covertimos a dato numerico
    newProperty = {...newProperty, price:value}

    formValidation.validateField('price',newProperty.price)
    .then(result => {onSetError('price', result)
    })
})


//6 "Sale types": Se crea función que gestiona selección / deseleccion de checkboxes -> Ver detalles sandbox.js 

const addElementSaleTypes = value => {newProperty = {...newProperty, saleTypeIds:[...newProperty.saleTypeIds,value]}};
const deleteElementSaleTypes = value => {newProperty = {...newProperty, saleTypeIds:[...newProperty.saleTypeIds.filter(item => item !== value)]}};

const setEventsSaleTypes = list => {                  
    list.forEach(element =>{
        const id = formatCheckboxId(element)

        onUpdateField(id,(event) => {
        const value = event.target.value; // Obtenemos (1 ó 2 ó 3 ó 4)
        const checkBoxUpdated = event.target.checked; // () obtenemos TRUE/FALSE
            if (checkBoxUpdated) {
                addElementSaleTypes(value)
            } else {
                deleteElementSaleTypes(value)
            }

            formValidation.validateField('saleTypes', newProperty.saleTypeIds)
            .then(result => {onSetError('saleTypes', result)
        
            })

        });
    })
}


// Datos vivienda

onUpdateField('address',event => {
    const value = event.target.value;
    newProperty = {...newProperty, address:value}

    formValidation.validateField('address', newProperty.address)
    .then(result => {onSetError('address', result)
    })
})

onUpdateField('city',event => {
    const value = event.target.value;
    newProperty = {...newProperty, city:value}

    formValidation.validateField('city', newProperty.city)
    .then(result => {onSetError('city', result)
    })
})

onUpdateField('province', event => {
    const value = event.target.value;
    newProperty = {...newProperty, province:value}

    formValidation.validateField('province', newProperty.province)
    .then(result => {onSetError('province', result)
    })
})

onUpdateField('squareMeter',event => {
    const value = Number(event.target.value);  // Covertimos a dato numerico
    newProperty = {...newProperty, squareMeter:value}

    formValidation.validateField('squareMeter', newProperty.squareMeter)
    .then(result => {onSetError('squareMeter', result)
    })
})

onUpdateField('rooms',event => {
    const value = Number(event.target.value); // Covertimos a dato numerico
    newProperty = {...newProperty, rooms:value}

    formValidation.validateField('rooms', newProperty.rooms)
    .then(result => {onSetError('rooms', result)
    })
})

onUpdateField('bathrooms',event => {
    const value = Number(event.target.value); // Covertimos a dato numerico
    newProperty = {...newProperty, bathrooms:value}

    formValidation.validateField('bathrooms', newProperty.bathrooms)
    .then(result => {onSetError('bathrooms', result)
    })
})

onUpdateField('locationUrl',event => {
    const value = event.target.value;
    newProperty = {...newProperty, locationUrl:value}

    formValidation.validateField('locationUrl', newProperty.locationUrl)
    .then(result => {onSetError('locationUrl', result)
    })
})


// 5 Características básicas / New Feature: Añadir / Eliminar 
// Se capturan los botones (Insert-Delete) y se asignan eventos/funciones + 2 validaciones 

const buttonInsert = document.getElementById('insert-feature-button');
    buttonInsert.addEventListener('click', function() { 
        const value = document.getElementById('newFeature').value;
            if (value !== '') {
                onAddFeature(value);
                newProperty = { ...newProperty, mainFeatures: newProperty.mainFeatures.concat(value) };
            } else {
                alert("Ingresa una característica y presiona el botón Insertar")
            }
            
const buttonDelete = document.getElementById(`delete-${value}-button`);
    buttonDelete.addEventListener('click', function() {
        onRemoveFeature(value);
        newProperty = { ...newProperty, mainFeatures: newProperty.mainFeatures.filter(item => item !== value)};

            formValidation.validateField('newFeature', newProperty.mainFeatures)
            .then(result => { onSetError('newFeature', result);
            });
        });
});


//7 Equipamientos(Checkboxes): Se crea función que gestiona selección / deseleccion de checkboxes -> Ver detalles archivo sandbox.js 

const addElementequipments = value => {newProperty = {...newProperty, equipmentIds:[...newProperty.equipmentIds,value]}};
const deleteElementequipments = value => {newProperty = {...newProperty, equipmentIds:[...newProperty.equipmentIds.filter(item => item !== value)]}};

const setEventsEquipments = list => {                  
    list.forEach(element =>{
        const id = formatCheckboxId(element)
        
        onUpdateField(id, (event) => {
        const value = event.target.value; // Obtenemos (1 ó 2 ó 3 ó 4 ó 5 ó 6)
        const checkBoxUpdated = event.target.checked; // () obtenemos TRUE/FALSE
            if (checkBoxUpdated) {
                addElementequipments(value)
            } else {
                deleteElementequipments(value)
            }
        });
    })
}

// 8 Imagenes
    onAddFile('add-image', (value) => {
        onAddImage(value)
        newProperty = { ...newProperty, images: newProperty.images.concat(value) };
    })   

// 4. Gestión de navegacion tras diligenciarse el formulario y dar click en "guardar".
// Creamos funcion onNavigate(). Esta será utilizada al final en el submitForm().

const onNavigate = form => {
    
    if (form) {
        history.back();
    };
};

onSubmitForm('save-button', () => {
    formValidation.validateForm(newProperty).then(result => {
        onSetFormErrors(result);
        console.log(result)
        console.log(newProperty);

        if(result.succeeded){
            insertNewProperty(newProperty).then(dataNewProperty => { 
                onNavigate(dataNewProperty);
                console.log({dataNewProperty});
            });
        }
    });
});

