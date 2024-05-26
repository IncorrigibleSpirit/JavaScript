/* 1 ADMINISTRADOR DE RESERVAS

- La lógica de cargosAdicionales se ha corregido para asegurar que el cargo adicional solo se aplica si el pax es mayor a 1.

- El método calculoSubtotal ahora calcula tanto el costo de la habitación como los cargos adicionales por persona.
*/

const reservas = [
  {
    tipoHabitacion: "standard",
    pax: 1,
    noches: 3,
  },
  {
    tipoHabitacion: "standard",
    pax: 1,
    noches: 4,
  },
  {
    tipoHabitacion: "suite",
    pax: 2,
    noches: 1,
  },
];

class AdministradorReservas {
  constructor() {
    this.reserva = [];
    this.subtotal = 0;
    this.total = 0;
    this.iva = 0.21;
  }

  calculoHabitacion(tipoHabitacion) {
    switch (tipoHabitacion) {
      case "standard":
        return 100;
      case "suite":
        return 150;
      default:
        return 0;
    }
  }

  cargosAdicionales(pax) {
    const cargoAdicional = 40;
    return pax > 1 ? (pax - 1) * cargoAdicional : 0;
  }

  calculoSubtotal() {
    this.subtotal = this.reserva.reduce(
      (acc, { noches, tipoHabitacion, pax }) =>
        acc +
        noches * this.calculoHabitacion(tipoHabitacion) +
        this.cargosAdicionales(pax),
      0
    );
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

// CASO 1 > CLIENTE PARTICULAR - CREACIÓN DE INSTANCIA
const clienteParticular = new AdministradorReservas();
clienteParticular.reservaGenerada = reservas; //Pasamos la información de la reserva
console.log("subtotal", clienteParticular.getSubtotal);
console.log("total", clienteParticular.getTotal.toFixed());

/*
2. TOUR OPERATOR

Se ha simplificado el cálculo de la habitación y el total, asegurando que el descuento del operador se aplica correctamente.

*/

class TourOperator extends AdministradorReservas {
  constructor() {
    super();
  }

  calculoHabitacion(tipoHabitacion) {
    switch (tipoHabitacion) {
      case "standard":
        return 100;
      case "suite":
        return 100;
      default:
        return 0;
    }
  }

  calculoTotal() {
    const discountforOperators = 0.15;
    this.total = this.subtotal * (1 + this.iva) * (1 - discountforOperators);
  }
}

// Instanciamos la clase TourOperator
const operadorTour = new TourOperator();
operadorTour.reservaGenerada = reservas; //Pasamos la información de la reserva al set
console.log("subtotal", operadorTour.getSubtotal);
console.log("total", operadorTour.getTotal.toFixed(2));

/*
3. DESAYUNO PARTICULARES
Se ha ajustado la lógica de cargosAdicionales para incluir el costo adicional del desayuno.
*/
const reservasYdesayuno = [
  {
    tipoHabitacion: "standard",
    desayuno: false,
    pax: 1,
    noches: 3,
  },
  {
    tipoHabitacion: "standard",
    desayuno: false,
    pax: 1,
    noches: 4,
  },
  {
    tipoHabitacion: "suite",
    desayuno: true,
    pax: 2,
    noches: 1,
  },
];

class DesayunoParticulares extends AdministradorReservas {
  constructor() {
    super();
  }

  cargosAdicionales(pax, desayuno, noches) {
    const cargoAdicional = 40;
    const cargoAdicionalDesayuno = 15;
    return (
      (pax > 1 ? (pax - 1) * cargoAdicional : 0) +
      (desayuno ? cargoAdicionalDesayuno * pax * noches : 0)
    );
  }

  calculoSubtotal() {
    this.subtotal = this.reserva.reduce(
      (acc, { noches, tipoHabitacion, pax, desayuno }) =>
        acc +
        noches * this.calculoHabitacion(tipoHabitacion) +
        this.cargosAdicionales(pax, desayuno, noches),
      0
    );
  }
}

const reservaConDesayunoParticular = new DesayunoParticulares();
reservaConDesayunoParticular.reservaGenerada = reservasYdesayuno;
console.log("subtotal", reservaConDesayunoParticular.getSubtotal);
console.log("total", reservaConDesayunoParticular.getTotal.toFixed());
