//Funcion inicial para la búsqueda de ids y cambio a nombre de equipamiento
const switchToEquipmentNames = (equipmentIds, equipmentDetail) => {
    return equipmentIds.map(equipmentNumber =>
    equipmentDetail.find(equipmentText => equipmentText.id === equipmentNumber).name
    )
  };


// Realizar dos llamadas - Uso de promise.all
  Promise.all([getPropertyDetail(params.id), getEquipmentDetail()])
  .then(([apiAccount, equipmentDataList]) => {
    console.log(apiAccount);
    console.log(equipmentDataList);
    // Espacio de trabajo con ambos resultados
  })
  .catch(error => {
    // En caso de Errores - si alguna de las promesas es rechazada 
    console.error('Ha ocurrido un error:', error);
  });



//Página principal - version inicial

//Obtenemos Id de URL
const params = history.getParams();
console.log(params.id)

// Recuperamos propiedades desde el servidor
getPropertyDetail(params.id).then(apiAccount => {
console.log(apiAccount);

// Recuperamos datos maestros "equipments" (id/ name)
getEquipmentDetail().then(equipmentDataList => {
console.log(equipmentDataList)
})


//Pasamos información recuperada al mapper (modelación)
const viewModelProperty = mapPropertyApiToViewModel(apiAccount);
console.log(viewModelProperty);
//Pintamos informacion en pantalla
setPropertyValues(viewModelProperty)
})