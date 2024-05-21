//CALCULADORA DE CAMBIO OPTIMO DE BILLETES Y MONEDAS (VERSION OPTIMIZADA - CONTADOR DE BILLETES)

var denominacionDeBilletes = [
    {denominacion:200,cantidad:20},
    {denominacion:100,cantidad:20},
    {denominacion:50,cantidad:20},
    {denominacion:20,cantidad:20},
    {denominacion:10,cantidad:20},
    {denominacion:5,cantidad:20},
    ]

var denominacionDeMonedas = [
  {denominacion:2,cantidad:20},
  {denominacion:1,cantidad:20},
  {denominacion:0.50,cantidad:20},
  {denominacion:0.20,cantidad:20},
  {denominacion:0.10,cantidad:20},
  {denominacion:0.05,cantidad:20},
  {denominacion:0.02,cantidad:20},
  {denominacion:0.01,cantidad:20},
    ]

// Creamos una variable global, la cual estará actualiada al momento de procesar la devolucion de monedas
var valorADevolverActualizado;

// Convertimos el input a numero flotante
var obtenerValorCompra = () => parseFloat(document.getElementById("valorCompra").value);
var obtenerDineroPagado = () => parseFloat(document.getElementById("cantidadPagada").value);

//FUNCION 1
var procesarDevolucionBilletes = (array) => {
    var valorADevolver = obtenerDineroPagado() - obtenerValorCompra();
    var billetesaDevolver = {}; // Objeto para almacenar las cantidades de billetes devueltos
    
    // CICLO 1 (FOR) - Procesar devolución de billetes
    for (var i = 0; i < array.length; i++) {
      var denominacionBillete = array[i].denominacion;
      //console.log(denominacionBillete)
  
      if (valorADevolver >= denominacionBillete) {
        // Calcular la cantidad de billetes a devolver. Math.floor redondea hacia abajo 
        //para obtener cantidad entera de billetes a devolver
        var cantidadDeBilletes = Math.floor(valorADevolver / denominacionBillete);
        //console.log(cantidadDeBilletes)

        //CANTIDAD DE BILLETES QUE SE RESTARÁN AL OBJETO - Se envía tabla por consola
        denominacionDeBilletes[i].cantidad -= cantidadDeBilletes;
        console.table(denominacionDeBilletes[i]);

        // Actualizamos valorADevolver tras iteración. Pasamos valor a Variable Global "ValorADevolverActualizado"
        valorADevolver = valorADevolver - (cantidadDeBilletes * denominacionBillete);
        valorADevolverActualizado = valorADevolver
        //console.log(valorADevolver)

    // Almacena(mos resultado en el objeto billetesaDevolver:
    // 1) La denominación: se agrega como KEY.
    // 2  La cantidad de billetes como VALUE.
        billetesaDevolver[denominacionBillete] = cantidadDeBilletes;
        //console.log(cantidadDeBilletes)
      }
    }
    return billetesaDevolver
}

//FUNCION 2
var imprimirBilletesDevueltos = (object) =>{
// CICLO 2 (FOR IN) - Imprimir los billetes devueltos // Obtenemos las KEY (denominacion)

var resultadoBilletes = "";
for (var denominacionBillete in object) {
  var cantidadBilletes = object[denominacionBillete];
  resultadoBilletes += `${cantidadBilletes} billete(s) de ${denominacionBillete} € / `;
  
}
//console.log(resultadoBilletes)
return resultadoBilletes
}

//FUNCION 3
var procesarDevolucionMonedas = (array) => {  
  var monedasaDevolver = {};

  // CICLO 3 (FOR) - Procesar devolución de monedas
  for (var j = 0; j < array.length; j++) {
    var denominacionMoneda = denominacionDeMonedas[j].denominacion;
    //console.log(denominacionMoneda);

    if (valorADevolverActualizado >= denominacionMoneda) {
    // Calcular la cantidad de monedas a devolver. Math.floor redondea hacia abajo 
    //para obtener cantidad entera de monedas a devolver
      var cantidadDeMonedas = Math.floor(valorADevolverActualizado / denominacionMoneda);
      //console.log(cantidadDeMonedas)

    // CANTIDAD DE MONEDAS QUE SE RESTARÁN AL OBJETO - Se envía tabla por consola
      denominacionDeMonedas[j].cantidad -= cantidadDeMonedas;
      console.table(denominacionDeMonedas[j])

    // Actualizamos valorADevolver tras iteración
      valorADevolverActualizado = valorADevolverActualizado - (cantidadDeMonedas * denominacionMoneda);
      //console.log(valorADevolverActualizado)
      
      //Almacenamos resultado en objeto
      // 1) La denominación: se agrega como KEY.
      // 2  La cantidad de billetes como VALUE.
      monedasaDevolver[denominacionMoneda] = cantidadDeMonedas;
      //console.log(cantidadDeMonedas)
    }
  }
  return monedasaDevolver
}

// FUNCION 4
var imprimirMonedasDevueltas = (object) =>{
// CICLO 4 (FOR IN)  - Imprimir los billetes devueltos // Obtenemos las KEY (denominacion)
  var resultadoMonedas = "";
  for (var denominacionMoneda in object) {
    var cantidadMonedas = object[denominacionMoneda];
    resultadoMonedas += `${cantidadMonedas} moneda(s) de ${denominacionMoneda} € /`;
  }
  //console.log(resultadoMonedas)
  return resultadoMonedas
}


//ANCLAJE Y EVENTOS
document.getElementById("boton").addEventListener("click", event => {
event.preventDefault();
var billetesaDevolver = procesarDevolucionBilletes(denominacionDeBilletes);
var imprimirBilletes = imprimirBilletesDevueltos(billetesaDevolver);
var monedasaDevolver = procesarDevolucionMonedas(denominacionDeMonedas);
var imprimirMonedas = imprimirMonedasDevueltas(monedasaDevolver)

document.getElementById("resultadoPagado").innerText = imprimirBilletes + imprimirMonedas;
})
