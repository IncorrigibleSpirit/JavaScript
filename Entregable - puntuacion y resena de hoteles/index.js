// Ingreso de info al formulario 

var nameHotel = "Luna Azul";
var locationHotel = "Quito,Ecuador";
var imgHotel = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/0b/dc/cf/province-of-guanacaste.jpg?w=1200&h=-1&s=1";

document.getElementById("hotel-name").innerHTML= "Hotel" + " " + nameHotel;
document.getElementById("hotel-location").innerHTML= "País:" + " " + locationHotel;
document.getElementById("image").src= imgHotel;

// Puntuación:
var rating = prompt("Ingrese puntuación del hotel del 1 al 5");
document.getElementById("rating").innerHTML= rating;

// Reseña anónima
var userDecision = confirm("¿Desea que la reseña sea anónima?");
document.getElementById("resena").checked = userDecision; 



