// ANCLAJE OPERADORES Y BOTONES AL HTML
const display = document.getElementById("display");
const resultado = document.getElementById("resultado");
const botonesOperacion = document.querySelectorAll(".operacion");
const botonIgual = document.getElementById("equal");

// Variables de estado para almacenar el resultado parcial y la operación anterior
let resultadoParcial = null;
let operacionAnterior = null;

// FUNCION1
//Obtener nuevo operando del campo de entrada
const obtenerNuevoOperando = () => parseFloat(display.value);

// FUNCION 2
// Obtener resultadoParcial con el nuevo operando y el uso del operador matematico ingresado por usuario
const realizarOperacion = (nuevoOperando) => {
  // Si todavia no hay "resultadoParcial" (es la primera vez en ejecutarse), resultadoParcial = nuevoOperando
  if (resultadoParcial === null) {
    resultadoParcial = nuevoOperando;
    return;
  }

  // Uso de operadores matematicos ingresados por el usuario
  //Switch no se activará la primera vez, porque no se tiene como tal una operacion previa, y "operacionAnterior" es iniciado como Null.

  switch (operacionAnterior) {
    case "add":
      resultadoParcial += nuevoOperando;
      break;
    case "sub":
      resultadoParcial -= nuevoOperando;
      break;
    case "mul":
      resultadoParcial *= nuevoOperando;
      break;
    case "div":
      // Verificar si el nuevo operando es cero para evitar la división por cero
      if (nuevoOperando === 0) {
        resultado.innerText = "Error: División por cero";
        return;
      }
      resultadoParcial /= nuevoOperando;
      break;
  }
};

// FUNCION 3
//Mostrar el resultado parcial
const mostrarResultado = () => {
  resultado.innerText = resultadoParcial;
};

//FUNCION 4
//limpiar el campo de entrada
const limpiarDisplay = () => {
  display.value = "";
};

// FUNCION PRINCIPAL
// Manejar la selección de un operador (+, -, x o /) por parte del usuario
// Tan pronto se hace clic en uno de estos simbolos se ejecutara la siguiente secuencia...

const manejarOperacion = (operacion) => {
  const nuevoOperando = obtenerNuevoOperando();

  // Verificar si el nuevo operando es un número válido
  if (isNaN(nuevoOperando)) {
    resultado.innerText = "Ingresa un número válido";
    return;
  }

  // Realiza la operación con el nuevo operando
  realizarOperacion(nuevoOperando);

  // Muestra el resultado parcial
  mostrarResultado();

  // Se actualiza "operacionAnterior" con el "operador" ingresado por el usuario
  operacionAnterior = operacion;

  // Limpia el campo de entrada
  limpiarDisplay();
};

// FUNCION PRINCIPAL
// Calcular el resultado final cuando se presiona el botón de igual

const calcularResultadoFinal = () => {
  const nuevoOperando = obtenerNuevoOperando();
  // Verificar si el nuevo operando es un número válido
  if (isNaN(nuevoOperando)) {
    resultado.innerText = "Ingresa un número válido";
    return;
  }
  // Realiza la operación final con el nuevo operando
  realizarOperacion(nuevoOperando);

  // Muestra el resultado final
  mostrarResultado();

  // Resetea operacionAnterior porque el cálculo ha finalizado
  operacionAnterior = null;

  // Limpia el campo de entrada
  limpiarDisplay();
};

//EVENTOS
// Asigna el evento de clic al botón de culquier operador
botonesOperacion.forEach((boton) => {
  boton.addEventListener("click", () => manejarOperacion(boton.id));
});

// Asigna el evento de clic al botón de igual
botonIgual.addEventListener("click", calcularResultadoFinal);



