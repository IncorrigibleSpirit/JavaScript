import Axios from 'axios';

/*En principio, sería la URL y método a utilizar, al cierre del ejercicio se verá actualizado
const propertyListUrl = `${process.env.BASE_API_URL}/properties`;
export const getPropertyList = () => Axios.get(propertyListUrl).then(({ data })=> data);
*/

const propertyListUrl = `${process.env.BASE_API_URL}/properties?`;
export const getPropertyList = queryParams =>
Axios.get(`${propertyListUrl}${queryParams}`).then(({ data }) => data)

const saleTypeListUrl = `${process.env.BASE_API_URL}/saleTypes`;
export const getSaleTypeList = () =>
Axios.get(saleTypeListUrl).then(({ data }) => data);

const provinceListUrl = `${process.env.BASE_API_URL}/provinces`;
export const getProvinceList = () =>
Axios.get(provinceListUrl).then(({ data }) => data);
