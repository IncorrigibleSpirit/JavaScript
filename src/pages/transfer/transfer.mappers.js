
// Preguntamos si el Objeto {} recibido es un objeto (terciario).

export const viewModelToApi = transfers =>
  typeof transfers === 'object' && transfers !== null
    ? formInfoViewModel(transfers)
    : "Error: " + transfers + " is not an object"


//VIEW MODEL
// Ojo: prestar atención a cómo denominar las key especiales y sus values.
const formInfoViewModel = transfer => ({
    selectAccountId: transfer.selectAccountId, 
    name: transfer.name,
    iban: transfer.iban,
    amount: transfer.amount,
    concept: transfer.concept,
    date: transfer.date
});
