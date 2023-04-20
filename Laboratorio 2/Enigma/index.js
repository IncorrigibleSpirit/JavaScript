var plainAlphabet = " abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = " qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

var userTexBoxA = () => document.getElementById("boxA").value;
var userTextBoxB = () => document.getElementById("boxB").value;


var searchIndex = (alphabet,target) =>{
    for (let i = 0; i < alphabet.length; i++) {
        if (alphabet[i] === target) return i; // 5.1 Retornamos indice. Ya podemos decir: Esa letra está en la posición "X, y o Z del array plano"
        }
    }

///5 Creacion de funcion transformadora (tocará crear la función "searchIndex")  
function transformLetter (letter,sourceString, destinyString) { //letra, string desde el que deseo escribrir, string hacia donde codifico
var letterIndex = searchIndex(sourceString,letter);//Llamamos funcion SearchIndex. Buscamos el indice de la letra en el alfabeto plano
return destinyString[letterIndex];//5.2 Con el índice claro, ya podemos llamar la letra en el alfabeto encriptado. Y esta finalmente es la que se retorna.
}

//1 Iterar el array para obtener el índice de cada letra (llega el mensaje)
var iterateAndTransformText = (text,originalAlphabet,destinyAlphabet)  => {
    var textLowerCase = text.toLowerCase();//2 Pasamos el texto ingresado a minúscula
    var result = ""; //5 Aquí se almacenará resultado de función de transformadora 
    for (var letter of textLowerCase) { //3 Iteramos cada una de las letras de la cadena de texto
        //4 Creamos funcion transformadora. Le pasamos letra y devuelve la letra encriptada/transformada
        //6 El resultado de esta función se almacena en var = result. Inicia en 0. Después acumula
        var LetsTransformLetter = transformLetter(letter,originalAlphabet,destinyAlphabet);
        // El orden en que se envíen los argumentos influirá en el funcionamiento del código 
        // No funciona a la vez encriptación y desencriptación.
        result = result + LetsTransformLetter;
    }
    return result
}
iterateAndTransformText(userTexBoxA());
iterateAndTransformText(userTextBoxB()); 


//LISTENERS

//Clave del ejercicio:Al cierre del ejercicio se presentaban problemas con el funcionamiento.
//Desde el listener se suministraorn a la funcion principal, no solo el texto por el usuario.
//También se pasaron el alfabeto original y alfabeto de destino.El orden cambia para cada boton.
//Desde aquí SEÑALAMAOS QUE LE PASAREMOS A LA FUNCION PRINCIPAL, y en qué orden será recibido.

var botonEncriptar = document.getElementById("encriptar");
botonEncriptar.addEventListener("click",(event) => {
event.preventDefault();
document.getElementById("boxB").innerText = iterateAndTransformText(userTexBoxA(),plainAlphabet,encryptedAlphabet)
})


var botonDesencriptar = document.getElementById("desencriptar");
botonDesencriptar.addEventListener("click",(event) => {
event.preventDefault();
document.getElementById("boxA").innerText = iterateAndTransformText(userTextBoxB(),encryptedAlphabet,plainAlphabet)
})
