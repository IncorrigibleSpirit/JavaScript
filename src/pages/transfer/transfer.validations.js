import { Validators, createFormValidation } from '@lemoncode/fonk';
import { iban } from '@lemoncode/fonk-iban-validator';
import { rangeNumber } from '@lemoncode/fonk-range-number-validator';



// Se instala e importa librería de terceros para validad Iban y amount

/* Declaramos cuál será nuestro esquema de validación. En "Field" se mencionará 
qué campos serán validados y qué tipos de validación se realizara.
*/

const validationSchema = {
    field: {
      
        iban: [
        {
        validator: Validators.required,
        message: 'Campo requerido',
        },
        
        {
        validator: iban.validator,
        message: 'El campo debebe tener un formáto válido de IBAN',
        },
        ],
        
        name: [
        {
        validator: Validators.required,
        message: 'Campo requerido',
        },
        {
        validator: Validators.minLength,
        customArgs: { length: 10 }, 
        message: 'Debe ingresar {{length}} caracteres como mínimo',
        },
        ],

        amount:[
            {
            validator: Validators.required,
            message: 'Campo requerido',
            },

            {
            validator: rangeNumber.validator,
            message: 'Solo puedes transferir entre 10 € y 500 € ',
                customArgs: {
                        min: {
                        value: 10,
                        inclusive: true,
                    },
                        max: {
                        value: 500,
                        inclusive: true,
                    },
                }
                
            }
        ],
        
        concept:[
            {
            validator: Validators.required,
            message: 'Campo requerido',
            },
            {
            validator: Validators.minLength,
            customArgs: { length: 5 }, 
            message: 'Debe ingresar {{length}} caracteres como mínimo',
            },
        ],

        day:[ 
            {
            validator: Validators.required,
            message: 'Campo requerido',
            },

            {
            validator: rangeNumber.validator,
            message: 'Ingrese un número válido para señalar el día',
                customArgs: {
                        min: {
                        value: 1,
                        inclusive: true,
                    },
                        max: {
                        value: 31,
                        inclusive: true,
                    },
                }
                
            }    
        ],

        month:[ 
            {
            validator: Validators.required,
            message: 'Campo requerido',
            },

            {
            validator: rangeNumber.validator,
            message: 'Ingrese un número válido para señalar el mes',
                customArgs: {
                        min: {
                        value: 1,
                        inclusive: true,
                    },
                        max: {
                        value: 12,
                        inclusive: true,
                    },
                }
                
            }    
        ],

        year:[ 
            {
            validator: Validators.required,
            message: 'Campo requerido',
            },

            {
            validator: rangeNumber.validator,
            message: 'Solo está permitido programar transferencias durante el 2023',
                customArgs: {
                        min: {
                        value: 2023,
                        inclusive: true,
                    },
                        max: {
                        value: 2023,
                        inclusive: true,
                    },
                }
                
            }    
        ],

        email: [
            {
            validator: Validators.required,
            message: 'Campo requerido',
            },
            {
            validator: Validators.email,
            message: 'Email no válido',
            },
        ],
    },
  }

  export const formValidation = createFormValidation(validationSchema);
