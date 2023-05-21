//AGENDA

var WORK_HOURS = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
];

var myTeam = [
    {
      name: "María",
      availability: new Array(8).fill(true)
    },
    {
      name: "Pedro",
      availability: new Array(8).fill(true)
    },
    {
      name: "Esther",
      availability: new Array(8).fill(true)
    },
    {
      name: "Marcos",
      availability: new Array(8).fill(true)
    },
];
  

// Funcion para obtener números aleatorios
var getRandom = (a, b) => (Math.random() < 0.5 ? a : b);

// Funcion para encontrar "hueco" en el horario de los trabajadores
var findingHoleAvailable = (availabilityPerTeacher) => {
  console.log("array" +" "+ availabilityPerTeacher)
  for (var i = 0; i < 7; i++) {
    var contador = 0;
   for (let j = 0; j < availabilityPerTeacher.length; j++) {
      if (availabilityPerTeacher[j] === i){
        contador ++;
      }
    }
    if (contador === 4) {
      return("Se ha encontrado un hueco libre" + WORK_HOURS[i]);
    }
  }
  return("No hemos encontrado un hueco libre en ningún trabajador");
};


var issuingRandomSchedule = (object,schedule) => {

  // CICLO FOR 1 - Obtenemos nombre de profesores
var availabilityPerTeacher = [];
for (var i = 0; i < object.length; i++) {
    console.log("Nombre del trabajador: " + object[i].name);

// CICLO FOR 2 - ANIDADO -generamos disponibilidad aleatoria.
    for (let j = 0; j < schedule.length; j++) {
    var availability = getRandom("si", "no");  // obtenemos disponibilidad aleatoria
    object[i].availability[j] = availability;  // Se asignan aleatorios a las 8 horas de cada trabajador

// Guardamos información sobre horarios disponibles marcados con "SI" en array availabilityPerTeacher
    if (object[i].availability[j] === "si"){
    availabilityPerTeacher.push(j);
  }

// Emitimos por consola resultado = iteramos malla de horarios : disponibilidad aleatoria
    console.log(schedule[j] + " " + object[i].availability[j]);

  }
}

// Llamamos función FindingHoleAvailable para saber si existe un hueco en los 4 trabajadores
console.log(object);
console.log(findingHoleAvailable(availabilityPerTeacher))
}

issuingRandomSchedule(myTeam, WORK_HOURS);
