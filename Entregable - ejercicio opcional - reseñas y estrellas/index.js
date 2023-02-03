// Crear dos  o tres hoteles y permitir que el usuario realice una reseña

var hoteles = {

    Farallones:{
    name:"Farallones",
    location:"Buenos Aires",
    img:"https://d500.epimg.net/cincodias/imagenes/2019/09/23/companias/1569232392_954737_1569233531_noticia_normal_recorte1.jpg",
    },

    Valhala: {
        name:"Valhala",
        location:"Lima",
        img:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/19151093.jpg?k=16be4b1e8c1a736d6820637b3a262ed82da7d7164c1c990aecebeb638c47168a&o=&hp=1"
    }
}

var hotelSelected = prompt("indica el nombre del hotel: Farallones o Valhala");

document.getElementById("hotel-name").innerHTML= "Hotel" + " " + hoteles[hotelSelected].name;
document.getElementById("hotel-location").innerHTML= "Ciudad:" + " " + hoteles[hotelSelected].location;
document.getElementById("image").src= hoteles[hotelSelected].img;


//Puntuacion suministrada en estrellas 

var stars ={

    una:
    "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    dos:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    tres:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
    cuatro:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
    cinco:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
}

var score = prompt("¿Cuantas estrellas se merece el hotel? una, dos, tres, cuatro, cinco");
document.getElementById("rating").innerHTML= stars[score]; 

// // Reseña anónima
var userDecision = confirm("¿Desea que la reseña sea anónima?");
document.getElementById("resena").checked = userDecision; 



