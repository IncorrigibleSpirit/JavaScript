//Espacio de documentacion detallada y experimentación de la página


//Función que gestiona selección de checkboxes - Sale Types

const addElementSaleTypes = value => {newProperty = {...newProperty, saleTypes:[...newProperty.saleTypes,value]}};
const deleteElementSaleTypes = value => {newProperty = {...newProperty, saleTypes:[...newProperty.saleTypes.filter(item => item !== value)]}};


const setEventsSaleTypes = list => {                  
    list.forEach(element =>{
    // Obtenemos: {id: '1', name: 'Alquiler'} {id: '2', name: 'Comprar'}{id: '3', name: 'Compartir'} {id: '4', name: 'Vacacional'}
        const id = formatCheckboxId(element)
        // Convertimos datos al formato que tiene los checkBox en el HTML (Id de cada checkBox)
        // 1-Alquiler  2-Comprar   3-Compartir  4-Vacacional
        
        onUpdateField(id, (event) => {
        const value = event.target.value; 
        //obtenemos el valor ingresado en el element.onInput, es decir, "1", "2","3" o "4" segun el caso 

        const checkBoxUpdated = event.target.checked;
        //Cambiamos estructura para saber si el checkbox está chequeado o no (obtenemos TRUE o FALSE)
        
            if (checkBoxUpdated) {  // Si está chequeado...
                addElementSaleTypes(value) // añadimos valor
            } else {
                deleteElementSaleTypes(value) // eliminamos valor
            }
        });
    })
}


// Versión propia - "monolito"
//Características básicas (New Feature): Añadir / Eliminar 
//Se programó con listeners + helpers "onAddFeature()" y "onRemoveFeature()"


// Función - Agregar característica
const addFeature = (value) => {
    if (value !== '') {
        onAddFeature(value); // Helpers
        newProperty = { ...newProperty, newFeature: newProperty.newFeature.concat(value) };
    } else {
        alert("Ingresa una característica y presiona el botón Insertar")
    }
};

// Función - Remover característica
const removeFeature = (value) => {
    onRemoveFeature(value); // Helper
    newProperty = { ...newProperty, newFeature: newProperty.newFeature.filter(item => item !== value)};
};

//Capturamos Id de los botones (elementos HTML) y generamos sus respectivos listeners - funciones

const buttonInsert = document.getElementById('insert-feature-button');
    buttonInsert.addEventListener('click', function() { 
        const value = document.getElementById('newFeature').value;
            addFeature(value);

            formValidation.validateField('newFeature', newProperty.newFeature)
            .then(result => { onSetError('newFeature', result);
            });


const buttonDelete = document.getElementById(`delete-${value}-button`);
    buttonDelete.addEventListener('click', function() {
        removeFeature(value);

            formValidation.validateField('newFeature', newProperty.newFeature)
            .then(result => { onSetError('newFeature', result);
            });
        });
});

// Validamos el campo nuevamente "newFeature" (data consistency)
formValidation.validateField('newFeature', newProperty.newFeature)
.then(result => { onSetError('newFeature', result);
});