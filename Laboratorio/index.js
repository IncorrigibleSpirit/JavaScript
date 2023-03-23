var carrito = [
{
    id:198752,
    name:"Tinta DJ27 color",
    price: 52.95,
    count: 3,
    premium:true
},
{
    id:75621,
    name: "Impresora ticketera Pro-201",
    price: 32.75,
    count:2,
    premium:true
},
{
    id:54657,
    name:"Caja de rollos de papel para ticketera",
    price:5.95,
    count:2,
    premium: false
},
{
    id:3143,
    name:"Caja de folios DIN-A4 80 gr",
    price: 9.95,
    count:2,
    premium: false
},
]


//1 Mostrar el carrito de la compra
for (var i = 0; i< carrito.length; i++){
    console.log(carrito[i])
}


//2 Listar todos los productos.
// El For In recorre cada una de los key con sus respectivos values 

for (var i = 0; i< carrito.length; i++){
    imprimirLista(carrito[i])
}

function imprimirLista(carrito){
    console.log ("---------------");
    for (propiedad in carrito){
        console.log (propiedad.toUpperCase() + ":" + carrito[propiedad])
    }
}


//3. Eliminar el producto con id 54657 del carrito de la compra.

//OPCION 1
var nuevoCarrito = carrito.filter(item => item.id !== 54657)
console.log(nuevoCarrito);


// OPCION 2 - Función que elimine producto segun ID ingresado
// Se debe iterar el array primero para iniciar la secuencia if 
var eliminarProducto = (productID) => {
    for (var i = 0; i< carrito.length; i++){
        if (productID === carrito[i].id){
            return carrito.splice(i,1)
            }
    } 
}
console.log(eliminarProducto(54657))


//4. Calcular el total del carrrito de compra (el coste de una linea es precio*cantidad)

var total = 0
for (propiedad of carrito) {
    total += propiedad.price * propiedad.count;
    console.log(total)
}
console.log(total.toFixed(2));



//5. Filtrar por productos que sean "premium"
var carritoPremium = carrito.filter(item => item.premium === true)
console.log(carritoPremium)


// 6. Si "TODOS" los productos son premium mostrar un mensaje:"No debe pagar gastos de envío",
// sino: "Debe pagar gastos de envío" (CLAVE: con uno que no cumpla, sale por la rama Else)

//FORMA 1 (metodo EVERY: indica si todos los elementos de una lista cumplen una condicion)

var verificacion = carrito.every(function(valor){
    return valor.premium === true 
})
console.log (verificacion)

if (verificacion === true){
    console.log ("No debe pagar gastos de envío")
}else{
    console.log ("Debe pagar gastos de envío")
}

//FORMA 2 (Ciclo For) Antes de iniciar se debe ITERAR y procurar que todo esté en una funcion
var productosPremium = (array) => {
    for (let index = 0; index < array.length; index++) {
    if (array[index].premium !== true) {
        return ("Debe pagar gastos de envío")
    }   
    }
return ("No debe pagar gastos de envío");
}
console.log(productosPremium(carrito))


//PUNTO 7 - Aplicar un descuento del 5% si la compra es mayor de 100 euros

function descuento(precioTotal){
    if (precioTotal >= 100) {
    return precioTotal - (precioTotal * 0.05);
    }else{
    return precioTotal;

}}

var valorFinal = descuento(total)
console.log(valorFinal.toFixed(2))


//8 Mostrar el carrito en un listado de html básico.

const div1 = document.createElement("div")
const tittle = document.createElement("h2")
tittle.textContent = "Carrito de compras"
tittle.style = "font-family:arial,helvetica,san-serif"
div1.appendChild(tittle)
document.body.appendChild(div1)

const div2 = document.createElement("div")
div2.style = "font-family:arial,helvetica,san-serif"
const list = document.createElement("ul")
div2.appendChild(list)

const productos = [
    {
        id:198752,
        name:"Tinta DJ27 color",
        price: 52.95,
        count: 3,
        premium:true
    },
    {
        id:75621,
        name: "Impresora ticketera Pro-201",
        price: 32.75,
        count:2,
        premium:true
    },
    {
        id:54657,
        name:"Caja de rollos de papel para ticketera",
        price:5.95,
        count:2,
        premium: false
    },
    {
        id:3143,
        name:"Caja de folios DIN-A4 80 gr",
        price: 9.95,
        count:2,
        premium: false
    },
    ]

productos.forEach(item => {
const itemList = document.createElement("li")
itemList.textContent = "Producto:" + item.name + " / " + "Precio:" + item.price + " / " + "ID:" + item.id
list.appendChild(itemList)
document.body.appendChild(div2)
})




















