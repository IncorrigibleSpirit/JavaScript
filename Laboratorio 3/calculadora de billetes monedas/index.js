//CALCULADORA DE CAMBIO OPTIMO DE BILLETES Y MONEDAS (VERSION BASICA)


var denominacionDeBilletes = [200, 100, 50, 20, 10, 5];
var denominacionDeMonedas = [2,1,0.50,0.20,0.10,0.005,0.02,0.01];


var procesarDevolucion = (denominacionDeBilletes,denominacionDeMonedas) => {

// Convertimos el input a numero flotante
  var obtenerValorCompra = () => parseFloat(document.getElementById("valorCompra").value);
  var obtenerDineroPagado = () => parseFloat(document.getElementById("cantidadPagada").value);

  var valorADevolver = obtenerDineroPagado() - obtenerValorCompra();
//console.log("Valor a devolver: " + valorADevolver + " Euros");

  var billetesaDevolver = {}; // Objeto para almacenar las cantidades de billetes devueltos
  
  // CICLO 1 (FOR) - Procesar devolución de billetes
  for (var i = 0; i < denominacionDeBilletes.length; i++) {
    var denominacionBillete = denominacionDeBilletes[i];

    if (valorADevolver >= denominacionBillete) {
      // Calcular la cantidad de billetes a devolver. Math.floor redondea hacia abajo 
      //para obtener cantidad entera de billetes a devolver
      var cantidadDeBilletes = Math.floor(valorADevolver / denominacionBillete);
      //console.log(cantidadDeBilletes)
      
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
    var denominacionMoneda = denominacionDeMonedas[j];

    if (valorADevolver >= denominacionMoneda) {
      var cantidadDeMonedas = Math.floor(valorADevolver / denominacionMoneda);
      //console.log(cantidadDeMonedas)
      //console.log(valorADevolver)
      //console.log(denominacionMoneda)
      
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
  
  procesarDevolucion(denominacionDeBilletes,denominacionDeMonedas)
  document.getElementById("resultadoPagado").innerText = resultadoBilletes + resultadoMonedas;
  })

}

procesarDevolucion(denominacionDeBilletes,denominacionDeMonedas);





