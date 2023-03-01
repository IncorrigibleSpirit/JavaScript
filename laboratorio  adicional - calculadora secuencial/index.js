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
    return a/b
} 


// ANCLAJE OPERADORES Y BOTONES AL HTML

var valores = () => document.getElementById("display").value;
var botonSuma = document.getElementById("add");
var botonResta = document.getElementById("sub");
var botonMultiplicacion = document.getElementById("mul");
var botonDivision = document.getElementById("div");



botonSuma.addEventListener("click",()=> {
var inputValue = Number(valores());
var acumulado = Number(document.getElementById("resultado").innerText);
var resultado = inputValue + acumulado;
document.getElementById("resultado").innerText= resultado;
})

/*
botonResta.addEventListener("click",()=> {
var inputValue = Number(valores());
var acumulado = Number(document.getElementById("resultado").innerText);
var resultado = inputValue - acumulado;
document.getElementById("resultado").innerText= resultado;
})


botonMultiplicacion.addEventListener("click",()=> {
    var inputValue = Number(valores());
    var acumulado = Number(document.getElementById("resultado").innerText);
    var resultado = inputValue * acumulado;
    document.getElementById("resultado").innerText= resultado;
    })


botonDivision.addEventListener("click",()=> {
    var inputValue = Number(valores());
    var acumulado = Number(document.getElementById("resultado").innerText);
    var resultado = inputValue / acumulado;
    document.getElementById("resultado").innerText= resultado;
    })

*/


