// Ejercicio Extraclase - Transacciones entre cuentas

class cuenta {
    constructor(IdCuenta, nifBeneficiario,nombreBeneficiario,nombreCuenta,saldo,tipoCuenta){
        this.idCuenta = IdCuenta;
        this.nifBeneficiario = nifBeneficiario;
        this.nombreBeneficiario = nombreBeneficiario;
        this.nombreCuenta = nombreCuenta;
        this.saldo = saldo;
        this.tipoCuenta = tipoCuenta;
    }

    muestraEstado(){
        console.log (
            `Cuenta:${this.idCuenta}|`,
            `Nombre Beneficiario:${this.nombreBeneficiario}|`,
            `Nombre Cuenta:${this.nombreCuenta}|`,
            `Tipo Cuenta:${this.tipoCuenta}|`,
            `Saldo:${this.saldo}|`,     
        );
    }
}

class transacción {
    constructor(cuentaOrigen, cuentaDestino,cantidadATransferir){
        this.cuentaOrigen = cuentaOrigen;
        this.cuentaDestino = cuentaDestino
        this.cantidadATransferir = cantidadATransferir
        this.comision = this.cuentaOrigen.tipoCuenta === "particular" ? 1 : 0.5; // Calculo comision
    }

    realizatransaccion(){
        const calculoTransaccion = this.cantidadATransferir * (1 + this.comision/100) // valor transferir + comision
        this.cuentaOrigen.saldo -= calculoTransaccion; // Saldo cuenta origen actualizado
        this.cuentaDestino.saldo += this.cantidadATransferir; // Saldo cuenta destino actualizado
        
    }
}

class libroContable {
    constructor(){
        this.transacciones = [];
    }
    
    registroTransaccion(transaccionEjecutada){
    this.transacciones.push(transaccionEjecutada); // ingresamos transacción al array
    }

    listadoTransacciones(){  // Iteramos y desplegamos los contenidos de cada transacción
        for (const key of this.transacciones) {
        console.log(
        "Origen:",key.cuentaOrigen.idCuenta,
        "| Destino:",key.cuentaDestino.idCuenta,
        "| Cuantía:",key.cantidadATransferir,
        "|Comision:",key.comision)
        }
    }
}


const cuentaA = new cuenta(
    "ES6621000418401234567891 ",
    "12345678X",
    "Juan Perez",
    "Nomina",
    1400,
    "particular"
    );

const cuentaB = new cuenta(
    "ES1000492352082414205416",
    "A84939209",
    "Gestiones SL",
    "gastos",
    84400,
    "empresa"
    );


console.log("** ESTADO INICIAL ***");
    cuentaA.muestraEstado(); //Llamamos metodo
    console.log("--------------------------");
    cuentaB.muestraEstado(); // Llamamos metodo
    console.log("--------------------------");


const transaccion1 = new transacción(cuentaB, cuentaA, 1800); //Instanciamos clase e ingresamos parámetros
transaccion1.realizatransaccion(); // Llamamos al método de la clase. Realizamos transacciín y actualizamos saldos

const transaccion2 = new transacción(cuentaA, cuentaB, 400); //Instanciamos clase e ingresamos parámetros
transaccion2.realizatransaccion(); // Llamamos al método de la clase. Realizamos transacciín y actualizamos saldos


const libro = new libroContable(); // Instanciamos clase y registramos las transacciones
libro.registroTransaccion(transaccion1); //Ingresamos transaccion 1 al array
libro.registroTransaccion(transaccion2); // Ingresamos transacción 2 al array

console.log("** ESTADO FINAL ***");
cuentaA.muestraEstado();
console.log("--------------------------");
cuentaB.muestraEstado();
console.log("--------------------------");


console.log("** LISTADO DE TRANSACCIONES ***");
libro.listadoTransacciones(); // Llamamos metodo

