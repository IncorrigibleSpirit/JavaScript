export const movementsApiToVm = (movementList) =>
  Array.isArray(movementList) ? movementList.map((movement) => mapMovementsApiToVm(movement))
    : [];


// No siempre es necesario generar un VM (visual model)
/*
let dataModel = {
  fecha: 'string',
  "fecha valor": 'string',
  descripción: 'string',
  importe: 'string',
  "saldo disponible": 'string',
};
*/


//De esta manera estaríamos creando un objeto puntual con los datos recogidos
const mapMovementsApiToVm = (movement) => ({
  transaction: new Date(movement.transaction).toLocaleDateString(),
  realTransaction: new Date(movement.realTransaction).toLocaleDateString(),
  description: movement.description,
  amount: `${movement.amount} €`,
  balance: `${movement.balance} €`,
});





