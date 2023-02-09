const product = {count:3, price:12.55, type:"ropa"};

const totalProduct = product.count >= 0 ? product.count * product.price: 0  ;
console.log (totalProduct.toFixed(3))

let iva

switch (product.type) {

 case "alimentacion":
 iva = totalProduct * 0.1;
 console.log(iva.toFixed(3));
 break;
 
 case "libro":
 iva = totalProduct * 0.04;
 console.log(iva.toFixed(3));
 break;
 
 default:
 iva = totalProduct * 0.21;
 console.log(iva.toFixed(3));
}

let totalPrice = totalProduct + iva;

 console.log(`valor total del producto (${product.count}) unidades:`, totalProduct.toFixed(3));
 console.log("Impuestos", iva.toFixed(3));
 console.log("Valor total a pagar: ", totalPrice.toFixed(3));