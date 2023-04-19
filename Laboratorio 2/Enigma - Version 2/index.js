var plainAlphabet = " abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = " qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

var userTextBoxA = () => document.getElementById("boxA").value;
var userTextBoxB = () => document.getElementById("boxB").value;

function transformLetter(letter, sourceString, destinyString) {
  var letterIndex = sourceString.indexOf(letter);
  return destinyString[letterIndex];
}

function iterateAndTransformText(text) {
  var textLowerCase = text.toLowerCase();
  var result = "";
  for (var letter of textLowerCase) {
  // El orden en que se envíen los argumentos influirá en el funcionamiento del código 
  // No funciona a la vez encriptación y desencriptación.
    var transformedLetter = transformLetter(letter,plainAlphabet,encryptedAlphabet);
    result = result + transformedLetter;
  }
  return result;
}

var botonEncriptar = document.getElementById("encriptar");
botonEncriptar.addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("boxB").value = iterateAndTransformText(userTextBoxA());
});

var botonDesencriptar = document.getElementById("desencriptar");
botonDesencriptar.addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("boxA").value = iterateAndTransformText(userTextBoxB());
});
