//CALCULADORA DE CAMBIO OPTIMO DE BILLETES Y MONEDAS (VERSION OPTIMIZADA - CONTADOR DE BILLETES)

var denominacionDeBilletes = [
{Denominacion:200,Cantidad:20},
{Denominacion:100,Cantidad:20},
{Denominacion:50,Cantidad:20},
{Denominacion:20,Cantidad:20},
{Denominacion:10,Cantidad:20},
{Denominacion:5,Cantidad:20},
]

var denominacionDeMonedas = [
  {Denominacion:2,Cantidad:20},
  {Denominacion:1,Cantidad:20},
  {Denominacion:0.50,Cantidad:20},
  {Denominacion:0.20,Cantidad:20},
  {Denominacion:0.10,Cantidad:20},
  {Denominacion:0.05,Cantidad:20},
  {Denominacion:0.02,Cantidad:20},
  {Denominacion:0.01,Cantidad:20},
  ]

var procesarDevolucion = (denominacionDeBilletes,denominacionDeMonedas) => {

// Convertimos el input a numero flotante
  var obtenerValorCompra = () => parseFloat(document.getElementById("valorCompra").value);
  var obtenerDineroPagado = () => parseFloat(document.getElementById("cantidadPagada").value);

  var valorADevolver = obtenerDineroPagado() - obtenerValorCompra();
  //console.log("Valor a devolver: " + valorADevolver + " Euros");

  var billetesaDevolver = {}; // Objeto para almacenar las cantidades de billetes devueltos
  
  // CICLO 1 (FOR) - Procesar devolución de billetes
  for (var i = 0; i < denominacionDeBilletes.length; i++) {
    var denominacionBillete = denominacionDeBilletes[i].Denominacion;
    //console.log(denominacionBillete)

    if (valorADevolver >= denominacionBillete) {
      // Calcular la cantidad de billetes a devolver. Math.floor redondea hacia abajo 
      //para obtener cantidad entera de billetes a devolver
      var cantidadDeBilletes = Math.floor(valorADevolver / denominacionBillete);
      //console.log(cantidadDeBilletes)

      // Se restará el numero de billetes empleados a la cantidad incial señalada en el objeto
      denominacionDeBilletes[i].Cantidad -= cantidadDeBilletes
      console.table(denominacionDeBilletes[i])
      

      // Actualizamos valorADevolver tras iteración
      valorADevolver = valorADevolver - (cantidadDeBilletes * denominacionBillete);
      //console.log(valorADevolver)

      // Almacenamos resultado en el objeto cantidadDeBilletes:
      // 1) La denominación: se agrega como KEY.
      // 2  La cantidad de billetes como VALUE.
      billetesaDevolver[denominacionBillete] = cantidadDeBilletes;
 
    }
  }

  // CICLO 2 (FOR IN) - Imprimir los billetes devueltos // Obtenemos las KEY (denominacion)
  var resultadoBilletes = "";
  for (var denominacionBillete in billetesaDevolver) {
    var cantidadBi = billetesaDevolver[denominacionBillete];
    resultadoBilletes += `${cantidadBi} billete(s) de ${denominacionBillete} € / `;
  }


  // CICLO 3 (FOR) - Procesar devolución de monedas
  var monedasaDevolver = {};

  for (var j = 0; j < denominacionDeMonedas.length; j++) {
    var denominacionMoneda = denominacionDeMonedas[j].Denominacion;
    //console.log(denominacionMoneda);
 
    
    if (valorADevolver >= denominacionMoneda) {
    // Calcular la cantidad de monedas a devolver. Math.floor redondea hacia abajo 
      //para obtener cantidad entera de monedas a devolver
      var cantidadDeMonedas = Math.floor(valorADevolver / denominacionMoneda);
      //console.log(cantidadDeMonedas)

      // Se restará el numero de monedas empleadas a la cantidad incial señalada en el objeto
      denominacionDeMonedas[j].Cantidad -= cantidadDeMonedas;
      console.table(denominacionDeMonedas[j])

      // Actualizamos valorADevolver tras iteración
      valorADevolver = valorADevolver - (cantidadDeMonedas * denominacionMoneda);
      //console.log(valorADevolver)
      
      //Almacenamos resultado en objeto
      // 1) La denominación: se agrega como KEY.
      // 2  La cantidad de billetes como VALUE.
      monedasaDevolver[denominacionMoneda] = cantidadDeMonedas;
     
    }
  }

  // CICLO 4 (FOR IN)  - Imprimir los billetes devueltos // Obtenemos las KEY (denominacion)
  var resultadoMonedas = "";
  for (var denominacionMoneda in monedasaDevolver) {
    var cantidadMo = monedasaDevolver[denominacionMoneda];
    resultadoMonedas += `${cantidadMo} moneda(s) de ${denominacionMoneda} € /`;
  }


//EVENTOS
  document.getElementById("boton").addEventListener("click", event => {
  event.preventDefault();
  procesarDevolucion(denominacionDeBilletes,denominacionDeMonedas)
  document.getElementById("resultadoPagado").innerText = resultadoBilletes + resultadoMonedas;
  })

}

procesarDevolucion(denominacionDeBilletes,denominacionDeMonedas);




