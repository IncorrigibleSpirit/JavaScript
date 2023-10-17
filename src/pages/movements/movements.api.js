import Axios from 'axios';

// 1. Apuntamos URL a donde están ubicados los movimientos
// 2. Esta función (getMovements) toma un parámetro id (identificador de una cuenta)
// 3. Se incluye un parámetro de consulta/recuperación de datos adicional "accountId", 
// el cual es una "key" del Id que se pasó por parametro. Se hace de esta manera,
// ya que al interior de "movimientos", "accountId" es el verdadero (id).

const urlMovements = `${process.env.BASE_API_URL}/movements`;

export const getMovements = id => Axios.get(urlMovements,{ params: { accountId: id }})
.then(({ data }) => data);

//---------------------------------------------------------//

//3 Nueva URL que apunta a recuperar lista de cuentas (account-list) 
//4 Extraemos el {id:id}
// 5 Extraemos el elementos [0] del array

const urlAccounts = `${process.env.BASE_API_URL}/account-list`;

export const getAccount = id => {
    return Axios.get(urlAccounts,{ params: { id: id } }).then(({ data }) => data[0]);
    }

/* OJO: si haces un return directamente de "data" verás que este te devuelve 
un array, que dentro tiene un objeto con los datos que necesitamos[{....}].Es decir, 
en vez de devolverte el objeto tal cual se solicita{}, te da un array porque esa 
es la manera en la que trabaja json-server en estos casos.

Sabiendo entonces que el metodo "getAccount" va a devolver un array[{...}] con un solo objeto
adentro, pues le decimos que nos entregue este único elemento, el cual está en la 
posición 0. Aplicamos return data[0]. Con esto nos aseguramos de obtener o recuperar el objeto
específico. Ya en el archivo principal nos encargaremos de filtrarlo o aplicarle métodos
(onSetValues)
*/

