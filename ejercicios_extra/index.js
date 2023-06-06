//Ejericios Extra - expresiones regulares
// `?<>|^^\


// Ejericio #1 - Validación de teléfono
var pattern1 = /^\(?(\d{2,3})\)?([-\s]?(\d{2})){2}[-\s]?(\d{2})$/
var value1 = ["(952)-35-42-77","952354277"];

value1.forEach(arrayElement => {
  console.log("Regexp matches with " + arrayElement + "?", pattern1.test(arrayElement))
})

// Ejericio #2 - validación de teléfono que inicien por 9 y 6
var pattern2 = /^((9|6)\d{2,3})([-\s]?(\d{2})){2}[-\s]?(\d{2})$/
var value2 = ["52 35 42 77","952 35 42 77","352354277","652354277"];

value2.forEach(arrayElement => {
console.log("Regexp matchs with " + arrayElement  + " ? =>",pattern2.test(arrayElement))
})


// Ejercicio #3 - Mejora la expresión regular para que pueda aceptar el código del país 
// Observación: se ejecutó de forma abierta para ingresar cualquier indicativo, se mantiene que el inicio debe ser 9 0 6
var pattern3 =/^(\+\d{2,3})?[-\s]?((9|6)\d{2,3})?([-\s]?(\d{2})){2}[-\s]?(\d{2})$/
var value3 = ["+56 952 63 19 80","952 35 42 77","+34 652 35 42 77","+34 952 12 77 80"];

value3.forEach(arrayElement => {
console.log("Regexp matchs with " + arrayElement  + " ? =>",pattern3.test(arrayElement))
})


//Ejercicio #4 - Mejora la expresión regular al siguiente formato (+34) 952 63 19 80  
var pattern4 =/^(\(?\+\d{2,3}\)?)?[-\s]?((9|6)\d{2,3})?([-\s]?(\d{2})){2}[-\s]?(\d{2})$/
var value4 = ["(+56) 952 88 45 80","952 00 55 77","(+34) 612 39 02 77","(+66) 958 12 73 80"];

value4.forEach(arrayElement => {
console.log("Regexp matchs with " + arrayElement  + " ? =>",pattern4.test(arrayElement))
})


//Ejercicio #5 - Indica si es un NIE válido o no (letra inicial,7 numeros,letra de cierre)
var pattern5 =/^(X|Y|Z)(\d{7})(\w)$/
var value5 = ["X 1234567P","X1234567P","X 1234567 P"];

value5.forEach(arrayElement => {
console.log("Regexp matchs with " + arrayElement  + " ? =>",pattern5.test(arrayElement))
})

//Ejercicio #6 - Otra forma de NIE (separar los 7 dígitos y la letra por un guión. ejm. X1234567-P .
var pattern6 =/^(X|Y|Z)(\d{7})[-]?(\w)$/
var value6 = ["X 1234567P","X1234567-P","X1234567P"];

value6.forEach(arrayElement => {
console.log("Regexp matchs with " + arrayElement  + " ? =>",pattern6.test(arrayElement))
})


//Ejercicio #7 - Código postal. Debe tener 5 números e iniciar con códigos de la provincia (29) 
var pattern7 =/^29(\d{3})$/
var value7 = ["29015"];

value7.forEach(arrayElement => {
console.log("Regexp matchs with " + arrayElement  + " ? =>",pattern7.test(arrayElement))
})


//Ejercicio #8 - Valida ahora que además un CP sea de Málaga y de Madrid (29,28) 
var pattern8 =/^(29|28)(\d{3})$/
var value8 = ["29015","28024"];

value8.forEach(arrayElement => {
console.log("Regexp matchs with " + arrayElement  + " ? =>",pattern8.test(arrayElement))
})


//Ejercicio #9 - Valida ahora que además un CP sea de Málaga,Madrid y Barcelona (29,28,08) 
var pattern9 =/^(29|28|08)(\d{3})$/
var value9 = ["29015","28024","08024"];

value9.forEach(arrayElement => {
console.log("Regexp matchs with " + arrayElement  + " ? =>",pattern9.test(arrayElement))
})


//Ejercicio #10 - Valida un color RGB(128, 128, 0)
//3 números separados por comas y puede tener un espacio o no. Cada uno de esos números pueden ser de 1, 2 o 3 dígitos
var pattern10 = /^(RGB|rgb)\(\s?\d{1,3}\,\s?\d{1,3}\,\s?\d{1,3}\)$/
var value10 = ["RGB(128, 128, 0)","rgb(128, 128, 22)"];

value10.forEach(arrayElement => {
  console.log("Regexp matches with " + arrayElement + "? =>", pattern10.test(arrayElement))
})



