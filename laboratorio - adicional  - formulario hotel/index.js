//ROOM COST 
//type.addEventListener("click",roomFee)

function roomFee(){
    var type = document.getElementById("typeRoom");
    var selectedRoom = type.options[type.selectedIndex].value;
    var priceRoom;

    switch (selectedRoom) {
    case "junior":
        priceRoom = 120;
        break;
    case "suite":
        priceRoom = 150;
        break;
    default: "standar"
        priceRoom = 100;
    }
return priceRoom
}
console.log(roomFee())


// SPA FARE 
//spaSelection.addEventListener("click", roomSpaFare);

function roomSpaFare(){
var spaSelection = document.getElementById("spa");
var fare = spaSelection.checked === true ? roomFee() + 20 : roomFee();
return fare
}
console.log(roomSpaFare())


//NUMBER OF GUESTS
//guests.addEventListener("click", numberGuests);

function numberGuests(){
var guests = document.getElementById("guests");
var guestsNumber = guests.options[guests.selectedIndex].value;
var priceGuest;

    switch (guestsNumber) {
        case "individual":
            priceGuest = roomSpaFare() - (roomSpaFare() * 0.25);
            break;
        case "triple": 
            priceGuest = roomSpaFare() + (roomSpaFare() * 0.25);
            break;
        default: "double"
            priceGuest = roomSpaFare() 
        }
        return priceGuest
}
console.log(numberGuests())


//NIGHTS BOOKING
//booking.addEventListener("change",nightsBooking);

function nightsBooking(){
var booking = document.getElementById("nights").value;
var fare = numberGuests() * booking;
return fare
}
console.log(nightsBooking())


//PARKING FEE
//nightsParking.addEventListener("click",parkingFee)

function parkingFee(){
var nightsParking = document.getElementById("parkingLot").value;
var nightRate = 10;
var parkingTotal = nightsParking * nightRate;
return parkingTotal
}
console.log(parkingFee())

//TOTAL BOOKING - "CALCULAR VALOR DE RESERVA"
var form = document.getElementById("form");
form.addEventListener("submit", totalBooking);

function totalBooking(event){
event.preventDefault()
var total = (nightsBooking()) + (parkingFee());
document.getElementById("priceNumber").innerText= "Valor total de la reserva: " + " " + total + "€";
}
