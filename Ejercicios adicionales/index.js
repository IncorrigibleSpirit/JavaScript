//Mostrar los datos de 0 al valor final del array con los bucles dados en clase.
var js1 = [25, 2.05, 1000, 63, 4.01, -9]

//CICLO FOR
for (let index = 0; index < js1.length; index++) {
 console.log (js1[index])
}

// CICLO FOR IN
for (const key in js1) {
console.log("Índice " + key + ":" + "" +js1[key])
        
    }

// CICLO FOR OF
for (const iterator of js1) {
    console.log(iterator)


// CICLO WHILE 
var i = 0;
}
while (i < js1.length){
    console.log(js1[i]);
    i++;
}


// CICLO DO WHILE
var i = 0;

do {
    console.log(js1[i]);
    i++;
} while (i < js1.length);


// 2º Dado el siguiente array de números, mostrar aquellos que sean mayores a 0
var js2 = [14, 2, 2.02, 63, 0, -9];

var mayores0 = js2.filter(valores => valores>0)
console.log(mayores0)


// 3º Separa ahora en un array los números mayores o iguales a 0, y en otro los que sean 
//menores que 0, y mostrar los arrays con los resultados.

var mayoresIgual0 = js2.filter(valores => valores >= 0);
console.log(mayoresIgual0)

var menores0 = js2.filter(valores => valores < 0);
console.log(menores0)


//4 borra del array ORIGINAL, los que sean menores a 0 y muestra el array resutante. Usa splice.
var sinNegativos = js2.splice(5,1)
console.log(sinNegativos)
console.log(js2)

// 5º Dado el siguiente array de objetos muestra en sentido inverso (del valor final al valor inicial).
var js3 = [ { id: 1, name: "Jhon", }, { id: 2, name: "Doe", }, { id: 3, name: "Clara", }, { id:
    4, name: "Elisa", }, { id: 4, name: "Pedro", }, ]

for (var i = js3.length -1; i >= 0 ; i--){
  console.log(js3[i]);
    
}

for (const objetos of js3.reverse()) {
    console.log(objetos)
}


//6º Dado el siguiente array de objetos, mostrar solo aquellos que tengan una edad mayor o igual a 18.
var js4 = [ { id: 1, name: "Jhon", age: 25, }, { id: 2, name: "Doe", age: 8, }, { id: 3, name:
    "Clara", age: 15, }, { id: 4, name: "Elisa", age: 30, }, { id: 4, name: "Pedro", age:
    18, }, ]

var personasMayores = js4.filter(valores => valores.age >= 18);
console.log(personasMayores)


//7  Dado el array de objetos del ejercicio anterior, insertar en un array aquellos 
//que tengan una edad mayor o igual a 18 y los menores a 18 en otro array y mostrar resultados.

var grupoMayores = [];
var grupoMenores =[];

js4.forEach((value)=>{
if (value.age >= 18) {
    grupoMayores.push(value) 
}else{
    grupoMenores.push(value) 
}
})

console.log(grupoMayores);
console.log(grupoMenores)


/* 8º Dado un array de hoteles, incrementa en 10 euros su precio aquellos que tengan 
menos de 10 habitaciones disponibles. Muestra tanto aquellos que cumplan dicha condición 
como los que no*/

var hoteles = [
    {
    hoteId: 1,
    hotelName: "Jhon",
    availableRooms: 25,
    price: 10.20,
    },
    {
    hoteId: 2,
    hotelName: "Doe",
    availableRooms: 8,
    price: 4.25,
    },
    {
    hoteId: 3,
    hotelName: "Clara",
    availableRooms: 15,
    price: 14.30,
    },
    {
    hoteId: 4,
    hotelName: "Elisa",
    availableRooms: 30,
    price: 10,
    },
    {
    hoteId: 4,
    hotelName: "Pedro",
    availableRooms: 10,
    price: 8.10,
    },
    ]


var hotelConIncremento = []
var hotelSinIncremento =[]

function incremento (array){
    array.forEach((value)=>{
        if (value.availableRooms <= 10) {
            hotelConIncremento.push(value);
            value.price = value.price + 10
        }else{
            hotelSinIncremento.push(value)
    }
    })   
}

incremento(hoteles)

console.log(hotelConIncremento);
console.log(hotelSinIncremento)


/*9º Dado un array de hoteles, incrementa en 10 euros su precio aquellos que tengan menos 
de 10 habitaciones disponibles. Muestra solo aquellos que cumplan la condición 
en un array nuevo*/

var arrayHoteles = [
    {
    hoteId: 1,
    hotelName: "Hotel 1",
    availableRooms: 25,
    price: 10.20,
    },
    {
    hoteId: 2,
    hotelName: "Hotel 2",
    availableRooms: 8,
    price: 4.25,
    },
    {
    hoteId: 3,
    hotelName: "Hotel 3",
    availableRooms: 15,
    price: 14.30,
    },
    {
    hoteId: 4,
    hotelName: "Hotel 4",
    availableRooms: 30,
    price: 10,
    },
    {
    hoteId: 5,
    hotelName: "Hotel 5",
    availableRooms: 10,
    price: 8.10,
    },
    ]

    var incremento = []
    
    function incremento2 (array){
        array.forEach((value)=>{
            if (value.availableRooms <= 10) {
                incremento.push(value);
                value.price = value.price + 10
        }
        })   
    }

incremento2(arrayHoteles)

console.log(incremento)


/*
10º Dado el siguiente array de hotels y el html con un input de texto y un botón. 
Que muestre el siguiente mensaje si existe el hotel: El hotel Hotel 1 existe. 
Y mostrar el mensaje: El hotel Hotel 1 no existe en caso contrario. 
Pista: Usa un evento de javascript de los visto por ahora en el curso.
*/

var hotelList = [ { hoteId: 1, hotelName: "Hotel 1", availableRooms: 25, price: 10.20, }, { hoteId:
2, hotelName: "Hotel 2", availableRooms: 8, price: 4.25, }, { hoteId: 3, hotelName:
"Hotel 3", availableRooms: 15, price: 14.30, }, { hoteId: 4, hotelName: "Hotel 4",
availableRooms: 30, price: 10, }, { hoteId: 5, hotelName: "Hotel 5", availableRooms: 10,
price: 8.10, }, ]


var userInput = ( ) => document.getElementById("textBox").value;
var boton = document.getElementById("myButton");

boton.addEventListener("click",(event) => {
event.preventDefault()

for (const hotel of hotelList) {
    if ((userInput()) === hotel.hotelName) {
    return alert("El hotel existe")
    }
}
return alert("El hotel no existe")
});

