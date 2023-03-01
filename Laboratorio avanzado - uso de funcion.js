var product = {count:3, price:12.55, type:"alimentacion"};

function getVat(product) {
var vat;

if (product.type === "alimentacion"){
    return vat = product.price * 0.1; 

} else if (product.type === "libro") {
    return vat = product.price * 0.04;

} else{   (product.type === "ropa")
    return vat = product.price * 0.21;   
}
}

function getTotalVat(product) {
    return product.count > 0 ? product.count * getVat(product) : 0;
}


var totalDelIva = getTotalVat(product)
console.log(totalDelIva.toFixed(2))











