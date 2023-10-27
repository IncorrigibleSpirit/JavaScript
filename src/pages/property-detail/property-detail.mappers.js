import { getRoomWord } from "../property-list/property-list.mappers"

const getBathRoomsWord = bathroom => (bathroom > 1 ? 'baños' : 'baño');

// ViewModel (modelado de datos)
export const propertyViewModel = (property,equipmentData)=> ({
mainImage:property.images[0],
title:property.title,
city:property.city,
rooms:`${property.rooms} ${getRoomWord(property.rooms)}`,
squareMeter:`${property.squareMeter} m2`,
bathrooms:`${property.bathrooms} ${getBathRoomsWord(property.bathrooms)}`,
price: `${property.price.toLocaleString("es-ES")} €`,
notes:`${property.notes.substring(0,2000)}`,
mainFeatures:property.mainFeatures,
equipments:switchToEquipmentNames(property.equipmentIds,equipmentData),
locationUrl:property.locationUrl,
images:property.images,
});

//Funcion buscar qué indices entre el array y el objeto coinciden.
//Si coinciden, cambiar de Id (número) a "nombre" del equipamiento
const switchToEquipmentNames = (equipmentArray, equipmentObject) => {
  return equipmentArray.map(equipmentArrayIdValue => {
    const findEquipment = equipmentObject.find(equipmentObjectIdValue => equipmentObjectIdValue.id === equipmentArrayIdValue);
    return findEquipment.name;
    }
  )
};
/* Al array inicialmente se le aplica ".map", a fin de poderse iterar y procesar sus índices,
Luego, al objeto se le aplica ".find", a fin de que encuentren coincidencias entre su Id 
y el id del array. Si se encuentra una coincidencia, se le pedirá a ese objeto que resulte,
su propiedad .name. Y esta es la que se retorna. (.name) se utiliza para acceder 
a la propiedad name de ese objeto específico.
*/ 



