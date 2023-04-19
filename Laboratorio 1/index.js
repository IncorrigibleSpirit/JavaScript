const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;

const productList = [
{
description: "Goma de borrar",
price: 0.25,
tax: LOWER_TYPE,
stock: 2,
units: 0,
},
{
description: "Lápiz H2",
price: 0.4,
tax: LOWER_TYPE,
stock: 5,
units: 0,
},
{
description: "Cinta rotular",
price: 9.3,
tax: REGULAR_TYPE,
stock: 2,
units: 0,
},
{
description: "Papelera plástico",
price: 2.75,
tax: REGULAR_TYPE,
stock: 5,
units: 0,
},
{
description: "Escuadra",
price: 8.4,
tax: REGULAR_TYPE,
stock: 3,
units: 0,
},
{
description: "Pizarra blanca",
price: 5.95,
tax: REGULAR_TYPE,
stock: 2,
units: 0,
},
{
description: "Afilador",
price: 1.2,
tax: LOWER_TYPE,
stock: 10,
units: 0,
},
{
description: "Libro ABC",
price: 19,
tax: EXEMPT_TYPE,
stock: 2,
units: 0,
},
];

//1. ANCLAJE CONTENEDOR ESTATICO) Y CREACIÓN CONTENEDOR DINÁMICO

var divContainer = document.getElementById("divContainer");
var divproductList= document.createElement("div");


//2. DESHABILITAR - HABILITAR BOTON "CALCULAR"

var disabledButton = () => {
    for (const item of productList) {
      if (item.units > 0) {
        document.getElementById("calcular").disabled;
        return false
      }
    }
    return true
  };

document.getElementById("calcular").disabled = disabledButton();


//3. HTML DINÁMICO - Generación de plantilla según datos del objeto 

var createList = (object) => {

for (let index = 0; index < object.length; index++) {

    var numberingList = document.createElement("span");
    numberingList.textContent = index + 1 + ".";
    numberingList.id = "numberingList";
    
    var productDescription = document.createElement("span");
    productDescription.textContent = object[index].description;
    productDescription.id = "productDescription";

    var productPrice = document.createElement("span");
    productPrice.textContent = "---"+ " " + object[index].price +" " + "Euros";
    productPrice.id = "productPrice";
    
    var productUnits = document.createElement("input");
    productUnits.id = "UserInput";
    productUnits.type = "Number"
    productUnits.min = "0"
    productUnits.max = "30"
    productUnits.value = object[index].units;
    productUnits.addEventListener("change", event => {object[index].units = event.target.valueAsNumber;
    document.getElementById("calcular").disabled = disabledButton()});


divproductList.append(numberingList,productDescription,productPrice,productUnits);
divContainer.appendChild(divproductList);

}}

createList(productList)


// 4. FUNCIONES


// 4.1  COSTO DE PRODUCTOS (SUMA ACUMULADA)
var productCost = product => {
    var subtotal = 0;
    for (const items of product) {
        var productUnit = items.price * items.units 
        subtotal += productUnit;
    } 
    console.log(product)
    return subtotal
}


// 4.2 - IVA POR PRODUCTO (unidad) (costo producto unitario * IVA / 100)
var ivaProduct = product => {
    var totalIva = 0;
    for (const items of product)  {
        var priceProduct = items.price * items.units 
        var productTax = priceProduct * items.tax / 100;
        totalIva += productTax; 
    }
    console.log(totalIva)
    return totalIva
}


//5 EVENTOS
var valorTotal = document.getElementById("calcular");

var totalInvoice = (event) => {
event.preventDefault();
document.getElementById("valorSubtotal").innerText = productCost(productList);
document.getElementById("valorIva").innerText = ivaProduct(productList);
document.getElementById("valorTotal").innerText = productCost(productList) + ivaProduct(productList);
}

valorTotal.addEventListener("click",totalInvoice);
