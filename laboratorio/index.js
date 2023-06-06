//EXPRESIONES REGULARES (// ``??<> |||^^\$)

//Preguntas generales:
//Cuales son los usos comunes y cómo se trabajan estas expresiones regulares (¿verificar info en formularios?)


//VALIDAR UN IBAN

//CAS0 1
var pattern1 = /^[A-Z]{2}\d{22}$/
var value1 = ["ES6600190020961234567890"];
var result1 = pattern1.test(value1)
console.log(result1)


//CAS0 2
//Este ejercicio funciona bien, sin embargo: 
//¿Es valido ubicar "^ y $" al final de cada parámetro que se ofrece? ¿Cómo comprobar array en el sitio que nos recomendaron?
//¿Es obligatorio iterar SIEMPRE el array (loop for each o cualquiera) para acceder a sus valores?
var pattern2 = /^([A-Z]{2}\d{22})$|^[A-Z]{2}\d{2}(\s?\d{4}){4}\s?\d{4}$/;
var value1 = ["ES6600190020961234567890","ES66 0019 0020 9612 3456 7890"];

value1.forEach(arrayElement => {
console.log("Regexp matchs with " + arrayElement  + "?",pattern2.test(arrayElement))
})


//CAS0 3 - Extracción

//OPCION 1 (sin espacios)
var pattern3 = /^([A-Z]{2})\d{10}(\d{2})\d{10}$/; 
var value3 = ["ES6600190020961234567890"];
const result3 = pattern3.exec(value3)
console.log("El código de país es" + " " + result3[1])
console.log("El digito de control es" + " " + result3[2])

//OPCION 2 (con espacios)
var pattern4 = /^([A-Z]{2})\d{2}\s?(?:\d{4}\s?){2}(\d{2})\d{2}\s?\d{4}\s?\d{4}$/m;
var value4 = ["ES66 0019 0020 9612 3456 7800"];
var result4 = pattern4.exec(value4)
console.log("El código de país es" + " " + result4[1])
console.log("El digito de control es" + " " + result4[2])



// VALIDAR MATRÍCULA DE UN COCHE

//CASO 1
var pattern5 = /^\d{4}\s?-?[A-Z]{3}$/
var value5 = ["2021 GMD","2345-GMD","4532BDB","0320-AAA"];
value5.forEach(arrayElement => {
console.log("Regexp matchs with " + arrayElement + " ? =>",pattern5.test(arrayElement) )
})


//CASO 2 (extraer por un lado los números y por otro lado las letras)
var value5 = ["2021 GMD","2345-GMD","4532BDB","0320-AAA"];
value5.forEach(arrayElements => {
var numbers = arrayElements.match(/\d+/)[0];
var letters = arrayElements.match(/[A-Z]+/)[0];

console.log(`Códigos numéricos extraidos: ${numbers}`)
console.log((`Letras extraidas: ${letters}`))
})



// EXTRAER IMAGENES DE UN FICHERO HTML

// CASO 1 - Extaer de la etiqueta "img" el contenido de la "src" (una linea)
var value6 = '<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>'
var pattern6 = /^<img src="(.{1,}\.(jpg|png|gif))"\/>$/i;     
var result6 = pattern6.exec(value6)
console.log("Imagen extraida: " + result6[1]) 


// CASO 2 - Extraer de las etiquetas "img" el contenido de las "src" (varias lineas)
//Observación: Cómo extraer puntualmente la imagen desde su "https:...."?
//Qué tipo de archivo arroja esta extracción?(indica que es un "object")

var value7 = 
`
<html>
<body>
<img src="https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg"/>
<h1>ejemplo</h1>
<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>
</body>
</html>
`;

var pattern7 = /^<img src="(.{1,}\.(jpg|png|gif))"\/>$/gmi
var result7 = value7.match(pattern7);
console.log("imagen extraida #1:" + result7[0])
console.log("imagen extraida #2:" + result7[1])



//VALIDAR SINTAXIS DE UNA TARJETA CREDITO



//CASO 1  (validar los siguientes formatos)
var value8 = ["5299 6400 0000 0000","5299-6400-0000-0000","5299640000000000"];
var pattern8 = /^(50|51|52|53|54|55)\d{2}\s?-?(\d{4}\s?-?){2}\d{4}$/m;
value8.forEach(arrayElement => {
console.log("Regexp matchs with " + arrayElement + " ? =>",pattern8.test(arrayElement) )
})

//CASO 2 (extraer cada grupo de 4 digitos)
var value9 = ["5099 6400 1239 0030","5322-7802-2450-1200","5196400340406754"];
var pattern9 = /^((?:50|51|52|53|54|55)\d{2})\s?-?(\d{4})\s?-?(\d{4})\s?-?(\d{4})$/;

value9.forEach(arrayElement => {
var result9 = arrayElement.match(pattern9);
console.log(result9)

if (result9) {
var match = result9[0]; //Coincidencia completa
var group1 = result9[1]; //Primer grupo capturado
var group2 = result9[2]; //Segundo grupo capturado
var group3 = result9[3]; //Tercer grupo capturado
var group4 = result9[4]; //Cuarto grupo capturado

console.log("Match:", match);
console.log("Group 1:", group1);
console.log("Group 2:", group2);
console.log("Group 3:", group3);
console.log("Group 4:", group4);

} else {
console.log("No match found");
}

});


//Si quieres saber más validaciones de tarjetas de crédito y como obtener números para probar: 
//https://www.freeformatter.com/credit-card-number-generator-validator.html


//BUSCANDO EXPRESIONES REGULARES 
//Fuente: https://www.thepolyglotdeveloper.com/2015/05/use-regex-to-test-password-strength-in-javascript/
// Fuente: https://www.makeuseof.com/regular-expressions-validate-url/
// Fuente: https://www.geeksforgeeks.org/how-to-validate-hexadecimal-color-code-using-regular-expression/


//1. Validacion de contraseña (adecuada)
// Debe contener al menos una minuscula, al menos una mayuscula, al menos un numero,al menos un caracter especial, y al menos 8 caracteres.
var pattern10 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
var value10 = "Stadium@20"
var result10 = pattern10.test(value10)
console.log(result10)


//2. Validación de contraseña (moderada)
//Debe contener al menos una minuscula, al menos una mayuscula, al menos un numero y al menos 8 caracteres de longitud
var pattern11 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/
var value11 = "Stadium1"
var result11 = pattern11.test(value11)
console.log(result11)


//3 Validador de contraseña (básica)
// Opcion 1: Más de 6 caracteres, al menos una minúscula, al menos una mayúscula
// Opcion 2: Más de 6 caracteres, al menos una minúscula, al menos un caracter numerico
// Opcion 3: Más de 6 caracteres, al menos una minúscula, al menos un caracter numerico
var pattern12 = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/
var value12 = "Decolonizacion3"
var result12 = pattern12.test(value12)
console.log(result12)


//4 Validador de URL (genérico)
const pattern13 = /^(http(s):\/\/)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/;


//5 Validador de URL (validando tres tipos de URL)
// Observación: No reconoce el último valor del Array. Se presenta conflicto con "www", no se podría poner como opcional "?""
const pattern14 = /^(http(s)?:\/\/)?www\.[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}$/;
var value14 = ["https://www.lemoncode.net","www.lemoncode.net","lemoncode.net"];
value14.forEach(ArrayElement => {
console.log("Regexp matchs with " + ArrayElement  + "? =>",pattern14.test(ArrayElement))
})


//6 Validar que un color en Hexadecimal está bien formado
const pattern15 = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
var value15 = ["#77a345","#3361FF","#FF33BB"];
value15.forEach(ArrayElement => {
console.log("Regexp matchs with " + ArrayElement  + "? =>",pattern15.test(ArrayElement))

})


