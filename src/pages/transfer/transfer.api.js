import Axios from 'axios';


// URL y llamada para obtener cuentas

const urlFetchAccount = `${process.env.BASE_API_URL}/account`;

 export const getAccount = () =>
 Axios.get(`${urlFetchAccount}`).then(({ data }) => data);



// Url y llamada para insertar transferencias

const urlInsertTransfer = `${process.env.BASE_API_URL}/transfer`;

export const insertTransfer = newTransfer =>
 Axios.post(`${urlInsertTransfer}`, newTransfer).then(({ data }) => data);