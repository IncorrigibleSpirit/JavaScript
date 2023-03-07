//FUNCIONES

var suma = (a,b) =>{
    return a+b;
} 

var resta = (a,b) =>{
    return a - b; 
} 

var multiplicacion = (a,b) =>{
    return a * b;
} 

var division = (a,b) =>{
    return a/b;
} 


// ANCLAR OPERADORES Y BOTONES AL HTML

var operadorA = () => document.getElementById("numeroA").value;
var operadorB = () => document.getElementById("numeroB").value;
var botonSuma = document.getElementById("add");
var botonResta = document.getElementById("sub");
var botonMultiplicacion = document.getElementById("mul");
var botonDivision = document.getElementById("div");



// ESTABLECER EVENTOS 

botonSuma.addEventListener("click", ()=> {
var resultadoSuma = (operadorA()) == "" || (operadorB()) == "" ? "Ingresa un número en el campo" : suma(Number(operadorA()),Number(operadorB()));
document.getElementById("resultado").innerText = resultadoSuma;
})

botonResta.addEventListener("click", ()=>{
var resuladoResta = (operadorA()) == "" || (operadorB()) == "" ? "ingresa un número en el campo" : resta(Number(operadorA()),Number(operadorB()));
document.getElementById("resultado").innerText = resuladoResta;
})

botonMultiplicacion.addEventListener("click", ()=> {
var resultadoMultiplicacion = (operadorA()) == "" || (operadorB()) == "" ? "ingresa un número en el campo" : multiplicacion(Number(operadorA()),Number(operadorB()));
document.getElementById("resultado").innerText = resultadoMultiplicacion;
})

botonDivision.addEventListener("click", ()=> {
var resultadoDivision = (operadorA()) == "" || (operadorB()) == "" ? "ingresa un número en el campo" : division(Number(operadorA()),Number(operadorB()));
document.getElementById("resultado").innerText = resultadoDivision;
})

/// OPCIONAL PARA REALIZAR VERIFICACION

/*
if (operandoA() =="" || operandoB()== ""){
    document.getElementById("resultado").innerText = "Ingresa un numero en el campo";
    } else {
    document.getElementById("resultado").innerText = suma(Number(operandoA()),Number(operandoB()))
}

*/

