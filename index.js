// Conceptos avanzados ES6

/* 1. Implementa una función llamada hasId que admita como parámetro un objeto 
y compruebe si dicho objeto tiene una propiedad llamada id (debe devolver booleano true / false ).*/
//hasOwnProperty
const user = {name: "Juan", id: 4850, city: "Seoul"};
const hasId = user => user.hasOwnProperty('id');
console.log(hasId(user));


/* 2. Implementa una función llamada head tal que, dado un array como entrada, 
devuelva el primer elemento. TIP: No utilices el corchete ([]) para acceder a la posición 0.*/
// Destructuring
const array = [33,"ok",2227,true,false,11, "hola"];
const head = ([first]) => first;
console.log(head(array));


/* 3. Implementa una función llamada tail tal que, dado un array como entrada, 
devuelva un nuevo array con los elementos menos el primero. TIP: No se debe modificar 
el array de entrada. Piensa en destructuring y rest.*/
const array2 = [33,"ok",2227,true,false,11, "hola"]
const tail = ([, ...rest]) => rest;
console.log(tail(array2))


/* 4. Implementa una función llamada swapFirstToLast tal que, dado un array como entrada, 
devuelva un nuevo array donde el primer elemento ha sido colocado en la última posición.
TIP: No se debe modificar el array de entrada. Piensa en destructuring y rest.*/
const array3 = [33, "ok", 2227, true, false, 11, "hola"];
const swapFirstToLast = ([first, ...rest]) => [...rest, first];
console.log(swapFirstToLast(array3));


/* 5.Implementa una función llamada excludeId tal que, dado un objeto como entrada, 
devuelva dicho objeto clonado excepto la propiedad id si la hubiera. No modifiques el 
objeto de entrada. Piensa en destructuring y rest.*/
const student = {name: "Miguel", id: "3425", course: "science", age: 35};
const excludeId = ({id, ...rest}) => rest;
console.log(excludeId(student));


/* 6. Implementa una función llamada wordsStartingWithA tal que, dado un array de palabras 
como entrada, devuelva otro array filtrado con aquellas palabras que empiecen por a.*/
//Filter
const vocabulary = ["book","robot","audiobook","camera","bag","airplane","arrow"];
const wordsStartingWithA = words => words.filter(words => words.startsWith('a'));
console.log(wordsStartingWithA(vocabulary))


/*7. Implementa una función llamada concat tal que admita múltiples argumentos de tipo string 
y devuelva otro string con la concatenación de todos, separados por | . */
//Join
const inputClient = ["word1","word2","word3","word4"]
const concat = array => array.join("|")
console.log(concat(inputClient))


/* 8. Implementa una función llamada multArray que admita un array de números ( arr ) 
y otro parámetro que sea un número ( x ) y devuelva un nuevo array donde cada elemento 
ha sido multiplicado por x */
// Map
const array4 = [8,3,5,7,9,7]
const multarray = (valueX,numbers) => numbers.map(numbers => numbers * valueX)
console.log(multarray(2,array4))


/* 9. Implementa una función llamada calcMult que admita múltiples números como argumento y devuelva como
resultado el producto de todos ellos. */
//Reduce
const array5 = [6,7,8,9];
const calcMult = (...numbers) => numbers.reduce((acc, numbers) => acc * numbers,1)
console.log(calcMult(...array5))
//Utilizamos spread para descomponer los elementos de array5 y pasarlos como argumentos separados


/* 10. Implementa una función swapFirstSecond tal que dado un array, devuelva un nuevo array 
donde el primer elemento ha sido intercambiado por el segundo.*/
//Destructuring
const array6 = [33, "ok", 2227, true, false, 11, "hola"];
const swapFirstSecond = ([first,second, ...rest]) => [second,first, ...rest,];
console.log(swapFirstSecond(array6));


/*11. Implementa una función firstEqual tal que admita multiples strings como argumento 
de entrada así como un carácter cualquiera, y devuelva un booleano indicando si todos 
los strings comienzan por dicho carácter o no. TIP: No utilices bucles. No accedas al primer carácter con corchetes ([]). */
//Every - startsWith
const vocabulary2 = ["book", "exam", "audiobook", "earth", "bag", "airplane", "earphones"];
const firstEqual = (letterX, ...strings) => strings.every(string => string.startsWith(letterX));
console.log(firstEqual("a", ...vocabulary2));


/*12. Implementa una función longest que admita múltiples arrays como entrada, 
y devuelva el array más largo. TIP: No utilices bucles. Hay diversas formas de hacerlo.*/

//FORMA 1 - Obtiene el numero de elementos del array mas largo
//Map + Sort
const long1 = [1, 2, 3];
const long2 = [4, 5, 6, 7];
const long3 = [8, 9, 10, 11, 12];
const long4 = [13, 14, 15, 16, 17, 18];

const longest = (...arrays) => {
const lengths = arrays.map(array => array.length);
return lengths.sort((a, b) => b - a)[0];
};
console.log(longest(long1, long2, long3, long4));

// FORMA 2 - Reduce
//Parametros de Reduce: valor.reduce(parametro1:valor acumulado, parametro2:valor actual, parametro3:indice, parametro4:original)
// Se compara la longitud del currentArray con la longitud del longestArray. Si el currentArray es más largo, se convierte en el nuevo longestArray

const longest1 = (...arrays) => arrays.reduce((longestArray, currentArray) => 
currentArray.length > longestArray.length ? currentArray:longestArray)

console.log(longest1(long1,long2, long3, long4));


/*12. Implementa una función llamada searchInStringV1 tal que dado un string como parámetro
y también un carácter, devuelva cuantas veces aparece dicho carácter en el string. 
TIP: Convierte el string a un array mediante Array.from() .*/

const searchInStringV1 = (character, string) => {
const stringToArray = Array.from(string);
    return stringToArray.reduce((acc, element) => { 
    if (element === character)
    acc++;
    return acc;
    }, 0);
};
console.log(searchInStringV1("a", "Parangaricutirimícuaro"));


/* 13. Implementa el mismo ejercicio de antes, llamando a la función searchInStringV2, encontrando otra 
alternativa sin usar reduce.No utilices bucles. TIP: Convierte el string a un array mediante Array.from()*/
//Filter - Lenght
const searchInStringV2 = (character, string) => {
const lowerCaseString = string.toLowerCase();
const stringToArray = Array.from(lowerCaseString).filter(letter => letter === character);
return stringToArray.length;
}
console.log(searchInStringV2("e", "Esternocleidomastoideo"));


/*14 Implementa una función llamada sortCharacters tal que dado un string, lo devuelva con sus letras ordenadas
alfabéticamente. No utilices bucles. No modifiques el string original de entrada.
Convierte el string a un array mediante Array.from()*/

const sortCharacters = (string) => {
const lowerCaseString = string.toLowerCase();
return stringToArray = Array.from(lowerCaseString).sort();
}
console.log(sortCharacters("Esternocleidomastoideo"))


/*15 Implementa una función llamada shout tal que, dadas múltiples palabras como entrada, 
devuelva todas las palabras concatenadas en un texto donde aparezcan en mayúsculas y con exclamaciones.
TIP: No utilices bucles.*/

const shout = (...words) => words
.map(word => word.toUpperCase()+ "!")
.join(" "+"=>"+" ")
console.log(shout("duerme", "sientate","descansa","silencio"))


/*//16
A. Obtén una nueva lista donde aparezca el IVA (21%) de cada producto.
B. Ordena la lista de más a menos unidades.
C. Obtén el subtotal gastado en droguería.
D. Obtén la lista por consola en formato "Producto -> Precio Total €" y ordenada por categoría.
TIP: No utilices bucles*/

const shoppingCart = [
    { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
    { category: "Carne y Pescado", product: "Pechuga pollo", price: 3.75, units: 2 },
    { category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
    { category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
    { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
    { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
    { category: "Carne y Pescado", product: "Secreto ibérico", price: 5.75, units: 2 },
    ];

//A Iva por producto
const IvaProducto = shoppingCart.map(object => (object.price * 0.21).toFixed(2));
console.log(IvaProducto);

//B Mas a menos unidades
const mayorAmenorUnidades = shoppingCart.sort((a,b) => b.units - a.units);
console.log(mayorAmenorUnidades);

//C Subtotal gastado en Drogueria
const subTotalDrogueria = shoppingCart.filter(item => item.category === "Droguería")
.reduce((acc,subTotalDrogueria) => acc + (subTotalDrogueria.price * subTotalDrogueria.units),0)
console.log(subTotalDrogueria);

//D Lista por consola
// localeCompare() es una función que se utiliza para comparar cadenas de caracteres según el orden de las letras en un idioma específico.
const placeList = (object) => object
.sort((a,b) => a.category.localeCompare(b.category))
.map(object => object.product + " " +"=>"+ " " + (object.price * object.units)+"€")

console.log(placeList(shoppingCart))








