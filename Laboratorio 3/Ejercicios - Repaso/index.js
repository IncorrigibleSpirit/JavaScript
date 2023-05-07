//Ejercicios Esenciales de Repaso

//FUNCIONES BÁSICAS

//1 Implementa una función que muestre por consola “Hola Mundo”.
function greet(){
console.log("Hola Mundo")
} 
greet()

//2 Implementa una función que admita como parámetro un nombre y salude por consola a dicha persona.
var greetsomeone = name => console.log("¡Hola," + name + "!");
greetsomeone("Carlos");

//3 Implementa una función que dado un string como parámetro devuelva el string en mayúsculas.

function uppercase(text){
    var userInput = text.toUpperCase()
    console.log(userInput)
}
uppercase("texto de prueba")


//4 Implementa una función que dado un string como parámetro devuelva el string en minúsculas.

var lowerCase = (userString) => {
    var userInput2 = userString.toLowerCase()
    console.log(userInput2)
}
lowerCase("TEXTO EN MAYUSCULA PASADO A MINUSCULA")

//5 Implementa una función que admita 2 números como parámetro y devuelva la suma de ambos.
function suma (a,b) {
var resault = a + b;
console.log(resault);
}
suma(4,8)

//6 Implementa una función que admita 3 argumentos de tipo string y devuelva otro string con la concatenación de los 3.
function CreateText (text1,text2,text3){
    var greetingMessage = text1+ " "+ text2+ " "+text3
    console.log(greetingMessage)
} 
CreateText("Cordial saludo,", "Andrés.", "Un gusto saludarlo")


//7 Implementa una función que admita como parámetro un objeto y añada a dicho objeto una propiedad llamada ‘id’ inicializada a null.

var user = {
    name:"Michael",
    Nacionality: "Hungarian",
    age:38,
}

var addID = (Object) => {
    Object.id = null
    return Object
    }

console.log(addID(user))


//FUNCIONES CON IF/ELSE, SWITCHES Y COMPROBACIONES 

//8 Implementa una función que admita un parámetro, de cualquier tipo, y que compruebe si el parámetro es undefined o null

var variableA;
var isValidInput = userInput => userInput;
console.log(isValidInput(variableA))

// 9 Implementa una función que admita un número como parámetro y devuelva si el número es positivo o negativo.
var PositiveOrNegativeNumber = number => number >= 0 ? console.log("it´s a positive number") : console.log("it´s a negative number");
(PositiveOrNegativeNumber(4))

// 10 Implementa una función que admita un número como parámetro y diga, por consola, si es mayor que 100, menor que 100 o exactamente 100.
var checkNumber = (number) => {

    if (number > 100){
        console.log("numero mayor a 100");
    } else if (number < 100){
        console.log("numero menor a 100")
    }else{
        console.log (("numero igual a 100"))
    }
}
checkNumber(101)

//11 Implementa una función que admita como parámetro un objeto y devuelva si dicho objeto tiene una propiedad ‘name’ o no.

var user2 = {
    name:"Michael",
    nacionality: "Hungarian",
    age:38,
}

var searchingKey = (object) => {
return object.hasOwnProperty("name");
}
console.log(searchingKey(user2));

// 12 Implementa una función que admita 2 números como argumento y compruebe si el primero es divisible por el segundo.

var division = (dividendo, divisor) => {
var validacion = dividendo % divisor === 0 ? 0 : 1;
return validacion
}

// 0-Par / divisible
// 1 impar / no divisible 

console.log(division(46,8))


// 13 Implementa una función que admita un string y un número como parámetro, y comprobar que tienen ese número de caracteres.
var CheckNumberOfCharacters = (text,number) => {  
    var stringWithoutSpaces = (text.replace(/\s+/g, '')); // removemos espacio vacio del texto
    if (stringWithoutSpaces.length === number){ // comparamos
        return true
    }
    return false
    }
console.log(CheckNumberOfCharacters("colores de la vida",15))

// 14Implementa una función que admita un día de la semana en formato número (del 1 al 7) y devuelva que día de la semana es (en texto).

var ScheduleTranslate = (number) => {
    var day = 0;

    switch (number){
        case 1:
            console.log("monday")
        break
        case 2:
            console.log("martes")
        break
        case 3:
            console.log("miércoles")
        break
        case 4:
            console.log("jueves")
        break
        case 5:
            console.log("viernes")
        break
        case 6:
            console.log("sábado")
        break
        case 7:
            console.log("domingo")
        break
        default:
            console.log(`día erróneo: ${number})`)
    }
}
ScheduleTranslate(1);

// 15 Implementa un función que dado un número (del 1 al 12), diga a qué mes corresponde en texto.

var monthSearcher = (monthNumber) => {
var monthNames = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
var userInput = parseInt(monthNumber); //Convertimos a numero
    if (userInput > 0 && userInput <= 12){ // Comprobacion del numero
        console.log (monthNames[userInput - 1]) // -1 para ajustar tema de indices
    }else{
        console.log("Error. Ingrese nuevamente un número del 1 al 12")
    }
}
monthSearcher(4)

//16 Implementa una función que admita 2 arrays como argumento, y devuelva el array más largo.

var frutas = ["bananas", "manzanas", "narajnas", "sandias", "papaya"] 
var vegetales = ["tomate","zanahoria","lechuga","cebolla"]

var checklength  = (array1,array2) =>{
    if (array1.length > array2.length){
        return array1
    }
    else if (array1.length === array2.length){
        return "Array con igual número de elementos"
    }
    else{
        return array2
    }
}
console.log(checklength(frutas,vegetales))

//17 Implementa una función que admita 2 arrays como argumento, y devuelva si el primer elemento de ambos arrays es igual o no.

var checkValues = (array1,array2) => array1[0] === array2[0] ? true : false;
console.log(checkValues(frutas,vegetales))


// FUNCIONES CON ARRAYS
//18 Implementa una función que admita un array de números, y devuelva el segundo elemento, y en caso de no existir, devuelva ‘undefined’

var searchNumber = (ArrayOfNumbers) => {
var result = ArrayOfNumbers.length > 1 ? ArrayOfNumbers[1] : undefined;
return result}

var pairNumbers = [2,4,6,8,10]
var oddNumbers =[1]

console.log(searchNumber(oddNumbers))


//19 Implementa una función que admita un string como parámetro y devuelva la última letra.

var searchingLetter = (string) => {
        for (let index = 0; index < string.length; index++)
        var lastLetter = string[string.length - 1];
        return lastLetter
    }
console.log(searchingLetter("abcdefgh"))

//20 Implementa una función que dado un array, intercambie el primer elemento por el último. Muestra por consola el resultado.

var switchValues = (array) => {
[array[0],array[array.length-1]] = [array[array.length-1],array[0]]
//Se aplica la técnica "destructuring assignment". Permite asignar valores a variables al mismo tiempo
console.log(array)
} 
switchValues(["a","b","c","d","e"])


// FUNCIONES CON BUCLES
//21 Implementa una función que admita 2 parámetros, un número y un texto, y que muestre por consola dicho texto tantas veces como indique el número.

var repeatText = (string,number) => {
    for (let index = 0; index < number; index++) {
        console.log(string)
    }
}
repeatText("arbol",6)


//22 Implementa una función que admita como parámetro un objeto cualquiera y devuelva el número de propiedades que tiene el objeto.

var  booking1 = {id: 1,price:23.50,customer:"Juan", nacionality:"american", age:35}

var numberOfKeys = (object) => {
    var key = Object.keys(object); // El método "Object.keys" retorna un array con las propiedades del objeto
    var number = key.length;
    console.log(number)
    }

    numberOfKeys(booking1)

//23 Implementa una función que admita como parámetro un objeto y muestre por consola los valores de sus propiedades.

var objectValues = (object) => {
    for (const values in object) {
    console.log(object[values]);  
    }    
}
objectValues(booking1);

//24 Implementa una función que admita un array de números y otro parámetro que sea un número y sume cada elemento del array multiplicado por dicho número. Devuelve el resultado.

var pairElements = [2,4,6,8,10]

var acumulatedResult = (array,number) => {
    total = 0;
    for (let index = 0; index < array.length; index++) {
    var multiplyValues = array[index] * number;
    total += multiplyValues;
    console.log(total)
    }
    return total
}
console.log(acumulatedResult(pairElements,2))


//25 Implementa una función que dado un string como parámetro y también un carácter, devuelva cuantas veces aparece dicho carácter en el string.

var searchWord = (string,word) => {
    var stringToArray = Array.from(string)
    var total = 0;
    console.log(stringToArray)
    for (let index = 0; index < stringToArray.length; index++) {
        if (stringToArray[index] === word){
        total ++ ;
        }
    }
    return total
}
console.log(searchWord ("casi que no resuelvo este ejercicio. El return deben estar por fuera del FOR","r"))


//26 Implementa una función que dado un array de cualquier tipo, lo recorra del primer al último elemento, mostrando cada elemento por consola.

var simpleArray = (array) => {
    for (let index = 0; index < array.length; index++) {
    console.log(array[index])
    }
}
simpleArray(pairElements)

//27Implementa una función que dado un array de cualquier tipo, lo recorra desde el último elemento al primero, y lo muestre por consola.

var oddElements = [1,3,5,7,9]

var inverseArray = (array) => {
    for (let index = array.length -1; index >= 0; index--) {
    console.log(array[index])
    }
}
inverseArray(oddElements)

//28 Implementa una función que dado un array de números, y otro parámetro que sea un número, diga cuantos elementos son menores a dicho número, y cuántos no.
var arrayNumber = [10,2,8,30,45,3,-3,25,11,2,45,60]

var  greaterLessNumber = (array, number) => {

    var greater = array.filter(values => values >= number)
    var totalGreater = greater.length
    
    var less = array.filter(values => values < number)
    var totalLess = less.length
    
    return  `El array contiene ${totalGreater} números mayores y ${totalLess} números menores a la cifra ingresada` 
}

console.log(greaterLessNumber(arrayNumber,30))


//OTRA OPCION DE RESOLVERLO

var numStats =(arr,num) => {
    var result = [0,0,0] // SE DESARROLLA UNA ESPECIE DE CONTADOR: menor,igual,mayor [0,1,2]
for (var item of arr) {
    if (item === num) result[1]++; // si es igual incrementamos posicion 1
    else if (item < num) result[0]; // si es menor incrementamos posicion 0
    else result[2]++; // si es mayo o por defecto, incrementamos posición 2
}
return result
}
console.log(numStats(arrayNumber,30))

//29 Implementa una función que admita 2 arrays como argumento, y diga si un elemento del primero, se encuentra en el segundo.

var colorsA = ["white","black","red","brown",];
var colorsB = ["blue","pink","brown","yellow","white"]

var searchValue = (arrayA, arrayB) => {
    var valueAcumulator= "";
    for (let i = 0; i < arrayA.length; i++) {
        if (arrayB.includes(arrayA[i])){  // Se usa método includes para saber si el valor está en el array
            valueAcumulator += arrayA[i] + "," + ""; // suma acumulada de valores encontrados
        }
}
    if (valueAcumulator){  // Si el acomulador es TRUE y se han acomulado valores...
        return `se han encontrado los siguientes valores: ${valueAcumulator}`;
    } else {
        return "No se ha encontrado ningún valor o coincidencia";
    }
}

console.log((searchValue(colorsA,colorsB)))


//OTRA FORMA DE RESOLVERLO

var anyIncommon = (arr1,arr2) =>{

    for (var a of arr1) {
        for (var b of arr2) {
            if (a === b) return true;
        }
    }
    return false;
}
console.log(anyIncommon(colorsA,colorsB))


//30 Implementa una función que admita 2 arrays como argumento, y intercambia los elementos del primero en el segundo y viceversa. Muestra los arrays transformados por consola.

var swap = (arrayX,arrayY) => {
    var temp = arrayX;
    arrayX = arrayY;
    arrayY = temp
    console.log(arrayX)
    console.log(arrayY)
}
swap(vegetales,frutas)


//OTRA FORMA DE RESOLVERLO: Este incluye verificación de que ambos arrays tengan el mismo # de elementos

var swapArrays = (arr1,arr2) => {
    var i = 0;
    while (i < arr1.length && i < arr2.length) { // mientras que i sea menor que la extensión de arr1 y arr2 ...(si uno no tiene la extensión similar se detiene)
        var tmp = arr1[i]; // aplicamos swap
        arr1[i] = arr2[i];
        arr2[i] = tmp
        i++;
    }
    console.log(arr1,arr2)
}
swapArrays(vegetales,frutas)

//31 Implementa una función que admita un array como argumento, y construya un objeto en el que almacene cada uno de los elementos del array en propiedades indexadas, del tipo ‘prop1’, ‘prop2’, ‘prop3’, etc.

var customer1 = ["name","age","address","phone number","membership" ]

var turnIntoObject = (array) => {
var customerInfo = {};
for (let index = 0; index < array.length; index++) {
var propName = "propiedad:" + index; // creamos un nombre de propiedad
    console.log(propName)
    customerInfo[propName] = array[index] 
    // Añado la KEY/PROPIEDAD "propname" al objeto "customerInfo", luego en esta almacenaremos el valor/elemento "i" del array que este iterando
    }
    return customerInfo
}
console.log(turnIntoObject(customer1))


//32 Implementa una función que admita un array y un número, y empieza a recorrer dicho array por el número dado. Muestra por consola cada elemento por el que iteres.

var numbersList= [1,2,3,4,5,6,7,8,9,10];

var iterateArrayFrom = (arr,startIndex) => {
    if (startIndex < arr.length && startIndex >= 0){ // se plantea expresion lógica para asegurarnos de su funcionamiento
        for (var i = startIndex; i < arr.length; i++)
            console.log(arr[i]);
        }
    }
iterateArrayFrom(numbersList,1)
 
 
// OTRA FORMA (sin expresion logica al principio )

var iterator = (array, number) => {
    for (let index = number; index < array.length; index++) {
    console.log(array[index])
    }
}
iterator(numbersList,1)



//33 Implementa una función que dado un array de strings y otro parámetro como string diga si existe en el array.

var inputMessage = "hola saludos desde la luna y sus alrededores"

var searchletter = (string1,string2) => {
return string1.includes(string2)
}
console.log(searchletter(inputMessage,"l"))


//34 Implementa un array que contenga nombres de frutas en Español y otro array con las mismas frutas en el mismo orden pero en ingles. Implementa una función de traducción, que dada una fruta en español, diga la traducción en Inglés, y otra función equivalente que haga la traducción inversa. 

var spanish = ["manzana","uva","naranja","sandia"];
var english = ["apple","grape","orange","watermelon"];

var translator = (word,sourceAlphabet,destinyAlphabet) =>{

//1 Buscamos indice de la letra en el alfabeto de entrada
var letterIndex = sourceAlphabet.indexOf(word);
console.log(letterIndex)

//2 Reemplazamos indice en alfabeto de destino
var translate = destinyAlphabet[letterIndex]
return translate
}

console.log(translator("grape",english,spanish))


//OTRA FORMA  ---> Forma abreviada 
var translateFruitToEs = fruit => spanish[english.indexOf(fruit)];
var translateFruitToEn = fruit => english[spanish.indexOf(fruit)];

console.log(translateFruitToEn("naranja"))
console.log(translateFruitToEs("watermelon"))


//35 Implementa una función que admita un texto por parámetro y lo devuelva por consola al revés.

var upsideDownText = (string) => {

//1 Separamos la cadena. utilizamos método split
var splitString = string.split("")
console.log(splitString)

//2 Invertir el texto
var reverseString = splitString.reverse()
console.log(reverseString)

//3 Usar metodo join para unir cadena nuevamente
var joinString = reverseString.join("");
return joinString
}
console.log(upsideDownText("el coronel no tiene quien le escriba"))


//OTRA FORMA

var showReverse = text => {
    var result = "";
    for (var i = text.length - 1; i >= 0; i--){
        result += text[i];
    }
    console.log(result);
};
showReverse("ejemplo de texto al reves")


//36 Implementa una función que admita un texto por parámetro y lo devuelva en formato ‘EsTe Es Mi TeXtO’.

var funCapitals = text => {

    var result = "";
    for (var i = 0; i < text.length; i++){
        result += i % 2 === 0? text[i].toUpperCase(): text[i]; // indice es numero par? sí, se pasa a mayuscula, de lo contrario se deja normal
    }
    return result
}

console.log(funCapitals("El amor en los tiempos del colera"))

//37 Implementa una función que admita como parámetro un array de arrays. La función debe recorrer todos los elementos de cada subarray y mostrarlos por consola

var matriz = [[100,200,300],[400,500,600],[700,800]]

var iterator = (array) => {
    for (let row = 0; row < array.length; row++) {

        for (let column = 0; column < array[row].length; column++) {
            
            console.log(`value [${row}][${column}] = ${matriz[row][column]}`)
        }    
    }
}
iterator(matriz)