/*Preguntamos al usuario y guardamos resultados en variable. A través de .innerHTML 
ingresamos la respuesta del usuario*/

var nameHotel = prompt("introduce el nombre del hotel");
document.getElementById("hotel-name").innerHTML = "Hotel"+ " " + nameHotel;

var nameLocation = prompt("introduce la ubicación del hotel");
document.getElementById("hotel-location").innerHTML = nameLocation;

var phoneNumber = prompt("introduce el teléfono");
document.getElementById("hotel-number").innerHTML = phoneNumber;


/*En caso de tener un objeto

var hotel = {
    name: "",
    location: "", 
}

hotel.name = prompt("introduce el nombre del hotel");
document.getElementById("hotel-name").innerHTML = "Hotel"+ " " + hotel.name;

//Otra forma de acceder a las propiedades...
hotel["location"] = prompt("introduce la ubicación del hotel");
document.getElementById("hotel-location").innerHTML = hotel[location];




*/

