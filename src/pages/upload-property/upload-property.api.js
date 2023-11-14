import Axios from 'axios';

// Obtener tipo de propiedad
const saleTypeListUrl = `${process.env.BASE_API_URL}/saleTypes`;
export const getSaleTypeList = () =>
Axios.get(saleTypeListUrl).then(({ data }) => data);

// Obtener provincias
const provinceListUrl = `${process.env.BASE_API_URL}/provinces`;
export const getProvinceList = () =>
Axios.get(provinceListUrl).then(({ data }) => data);


// Obtener tipo de equipamientos
const propertyEquipmentsUrl = `${process.env.BASE_API_URL}/equipments`;
export const getEquipmentDetail = () =>
Axios.get(propertyEquipmentsUrl).then(({ data }) => data)

// Ingresar nueva propiedad
const insertNewPropertyData = `${process.env.BASE_API_URL}/properties`;
export const insertNewProperty = (newProperty) =>
Axios.post(`${insertNewPropertyData}`, newProperty).then(({ data }) => data)

