import Axios from 'axios';

// llamada para recuperar las propiedades
const propertyDetailUrl = `${process.env.BASE_API_URL}/properties`;
export const getPropertyDetail = id =>
Axios.get(`${propertyDetailUrl}/${id}`).then(({ data }) => data)


// llamada para recuperar la informacion de equipamientos - Es un Arrya de objetos [{},{},{}]
const propertyEquipmentsUrl = `${process.env.BASE_API_URL}/equipments`;
export const getEquipmentDetail = () =>
Axios.get(propertyEquipmentsUrl).then(({ data }) => data)


// Llamada para subir a servidor formulario que diligencia el usuario
const contactInfoUrl = `${process.env.BASE_API_URL}/contact`;
export const getContactInfo = (form) => {
return Axios.post(contactInfoUrl,form)
    .then(({ data }) => data)
    .catch(error => {
    // manejar el error
    console.error('Ha ocurrido un error:', error); 
    })
}