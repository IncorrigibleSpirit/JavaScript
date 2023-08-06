const reservas = [
{
tipoHabitacion: "standard",
pax: 1,
noches: 3
},
{
tipoHabitacion: "standard",
pax: 1,
noches: 4
},
{
tipoHabitacion: "suite",
pax: 2,
noches: 1
}
];

class administradorReservas {
    constructor(){
        this.reserva = [];
        this.subtotal = 0;
        this.total = 0;
        this.iva = 0.21
    }

        calculoHabitacion(tipoHabitacion){
            switch (tipoHabitacion){
                case "standard":
                    return 100;                
                case "suite":
                    return 150;
            }
        }

        cargosAdicionales(pax) {
            const cargoAdicional = 40;
            this.subtotal += pax > 1 ? (pax - 1) * cargoAdicional : 0;
        }

        calculoSubtotal () {
        // Calculamos el subtotal segun habitacion
            this.subtotal = this.reserva.reduce(
                (acc,{noches,tipoHabitacion}) => 
                acc + noches * this.calculoHabitacion(tipoHabitacion),0);           
        // Sobre este resultado calculamos el cargo adicional por persona.
        // Entramos a iterar solo la KEY "pax" dentro del objeto y aplicar funcion cargos adicionales
            this.reserva.forEach(({ pax }) => {
            this.cargosAdicionales(pax);
            });
        }
        
        calculoTotal(){  
            this.total = this.subtotal * (1 + this.iva);
        }
        
        get getTotal(){
            return this.total;
        }

        get getSubtotal(){   
            return this.subtotal;
        }

        set reservaGenerada(datosReserva) {
            this.reserva = datosReserva;
            this.calculoSubtotal();
            this.calculoTotal(); 
        }
}



// CASO 1 > CLIENTE PARTICULAR - CREACIÓN DE INSTANCIA 
const clienteParticular = new administradorReservas();
clienteParticular.reservaGenerada = reservas; //Pasamos la información de la reserva al Get
console.log("subtotal", clienteParticular.getSubtotal);
console.log("total", clienteParticular.getTotal.toFixed());


// CASO 2 > OPERADOR DE TOUR - HERENCIA
class tourOperator extends administradorReservas{
    constructor(){
        super();
        // podemos eliminar estos .this? son necesarios?
        this.reserva = [];
        this.subtotal = 0;
        this.total = 0;
        this.iva = 0.21
    }
    
    calculoHabitacion(tipoHabitacion){
    super.calculoHabitacion(tipoHabitacion)
        switch (tipoHabitacion){
            case "standard":
                return 100;
            
            case "suite":
                return 100;
        }
    }

    calculoTotal(){
    super.calculoTotal() 
        const discountforOperators = 0.15 
        //this.total = this.subtotal * (1 + this.iva); Subtotal + Iva(21%) = 1016.4
        //this.total = this.total - (this.total * discountforOperators(15%));
        this.total = this.subtotal * (1 + this.iva) * (1 - discountforOperators); //Forma simplificada
    }
}

// Instanciamos la clase tourOperator() 
const operatorTourValue = new tourOperator(); 
operatorTourValue.reservaGenerada = reservas; //Pasamos la información de la reserva al get
console.log("subtotal", operatorTourValue.getSubtotal);
console.log("total", operatorTourValue.getTotal.toFixed(2))


// CASO 3 - DESAFÍO: USO DE ATRIBUTOS Y MÉTODOS DE CLASE PADRE (SUPER)

class padre {
    constructor() {
        this.reserva = [];
        this.subtotal = 0;
        this.total = 0;
        this.iva = 0.21;
        this.habitacion = { "standard": 100, "suite": 150 };
    }

    calculoHabitacion(tipoHabitacion) {
        return tipoHabitacion === "standard" ? this.habitacion["standard"] : this.habitacion["suite"];
    }

    cargosAdicionales(pax) {
        const cargoAdicional = 40;
        this.subtotal += pax > 1 ? (pax - 1) * cargoAdicional : 0;
    }

    calculoSubtotal() {
        this.subtotal = this.reserva.reduce(
            (acc, { noches, tipoHabitacion }) =>
            acc + noches * this.calculoHabitacion(tipoHabitacion), 0);

        this.reserva.forEach(({ pax }) => {
            this.cargosAdicionales(pax);
        });
    }

    calculoTotal() {
        this.total = this.subtotal * (1 + this.iva); 
        }

    get getTotal() {
        return this.total;
    }

    get getSubtotal() {
        return this.subtotal;
    }

    set reservaGenerada(datosReserva) {
        this.reserva = datosReserva;
        this.calculoSubtotal();
        this.calculoTotal();
    }
}

//Se crea clase hija "particulares", herencia de la clase "padre"
//Se ingresa al constructor dos argumentos (iva, habitacion)
class particulares extends padre {
    constructor(iva, habitacion) {   
        super();
        this.iva = iva;
        this.habitacion = habitacion; 
    }
}

// Al intanciar "particulares" podemos ingresar nuevos parametros que alterarán valores del contructor
const reservasDeParticulares = new particulares(0.30, { "standard": 120, "suite": 230 });
reservasDeParticulares.reservaGenerada = reservas;
console.log("subtotal", reservasDeParticulares.getSubtotal);
console.log("total", reservasDeParticulares.getTotal.toFixed());

/*  
El pasar o no parámetros a la nueva clase instanciada resultará en la posibilidad o
imposilidad de alterar las operaciones y resultados de la clase. En el contructor señalaremos que 
parámetros serán recibidios al momento de instanciar.
*/


//Se crea clase hija "operadores", herencia de la clase "padre".
//Se ingresa al constructor dos argumentos (iva, habitacion).
class operadores extends padre {
    constructor(iva, habitacion) {   
        super();
        this.iva = iva;
        this.habitacion = habitacion;
    }
    
    calculoTotal(){
        super.calculoTotal()
        const discountforOperators = 0.15;
        this.total = this.subtotal * (1 + this.iva) * (1 - discountforOperators);
    }
}

const reservasDeOperadores = new operadores(0.21, { "standard": 100, "suite": 150 });
reservasDeOperadores.reservaGenerada = reservas;
console.log("subtotal", reservasDeOperadores.getSubtotal);
console.log("total", reservasDeOperadores.getTotal.toFixed(2));

/*
De no utilizarse la palabra "SUPER", el método "CalculoTotal" de la clase de "operadores" sobreescribiría 
el método "calculoTotal" de la clase "padre", porque su nombre coincide y es declarado en una clase hija.
*/



//CASO 4 > EJERCICIO ADICIONAL - INCLUIR DESAYUNO EN PARTICULAR Y OPERADORES

const reservasYdesayuno = [
    {
    tipoHabitacion: "standard",
    desayuno: false,
    pax: 1,
    noches: 3
    },
    {
    tipoHabitacion: "standard",
    desayuno: false,
    pax: 1,
    noches: 4
    },
    {
    tipoHabitacion: "suite",
    desayuno: true,
    pax: 2,
    noches: 1
    }
    ];


//Clase hija: "desayunoParticulares" / clase padre: "administrador reserva"  
class desayunoParticulares extends administradorReservas{
    constructor(){
        super();
}

cargosAdicionales(pax,desayuno,noches) {   
super.cargosAdicionales(pax,desayuno,noches)

/* OJO * OJO *OJO!!!
    const cargoAdicional = 40;
    this.subtotal += pax > 1 ? (pax - 1) * cargoAdicional : 0;
    
    No se puede expresar nuevamente esta operación, ya desde el padre viene incluida (duplicaría resultado)
    Solo debemos agregar la operación para incluir el desayuno.
*/

    const cargoAdicionalDesayuno = 15;
    this.subtotal += desayuno === true ? cargoAdicionalDesayuno * pax * noches : 0; 
    //Se agrega costo adicional de desayuno por persona
}

calculoSubtotal () {
super.calculoSubtotal();
    // Calculamos el subtotal segun la habitacion
        this.subtotal = this.reserva.reduce(
            (acc,{noches,tipoHabitacion}) => 
            acc + noches * this.calculoHabitacion(tipoHabitacion),0);
        
    // Sobre este resultado calculamos el cargo adicional por persona.
    // Se itera la KEY "pax", "desayuno" y "noches" dentro del objeto y aplicar funcion cargos adicionales
        this.reserva.forEach(({ pax,desayuno,noches }) => {
        this.cargosAdicionales(pax,desayuno,noches);
        });
    }
}

const reservaConDesayunoParticular = new desayunoParticulares();
reservaConDesayunoParticular.reservaGenerada = reservasYdesayuno;
console.log("subtotal", reservaConDesayunoParticular.getSubtotal);
console.log("total", reservaConDesayunoParticular.getTotal.toFixed());



//Clase hija: "desayunoOperadores" / clase padre: "tourOperator"  
class desayunoOperadores extends tourOperator{
    constructor(){
        super();
    }

    cargosAdicionales(pax,desayuno,noches) {   
        super.cargosAdicionales(pax,desayuno,noches)
        
            const cargoAdicionalDesayuno = 15;
            this.subtotal += desayuno === true ? cargoAdicionalDesayuno * pax * noches : 0; 
            //Se agrega costo adicional de desayuno por persona
        }
        
        calculoSubtotal () {
        super.calculoSubtotal();
            // Calculamos el subtotal segun la habitacion
                this.subtotal = this.reserva.reduce(
                    (acc,{noches,tipoHabitacion}) => 
                    acc + noches * this.calculoHabitacion(tipoHabitacion),0);
                
            // Sobre este resultado calculamos el cargo adicional por persona.
            // Se itera la KEY "pax", "desayuno" y noches dentro del objeto y aplicar funcion cargos adicionales
                this.reserva.forEach(({ pax,desayuno,noches }) => {
                this.cargosAdicionales(pax,desayuno,noches);
                });
            }
        }
        
        const reservaConDesayunoOperador = new desayunoOperadores();
        reservaConDesayunoOperador.reservaGenerada = reservasYdesayuno;
        console.log("subtotal", reservaConDesayunoOperador.getSubtotal);
        console.log("total", reservaConDesayunoOperador.getTotal.toFixed(2));
