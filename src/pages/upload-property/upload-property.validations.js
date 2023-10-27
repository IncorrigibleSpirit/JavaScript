import { Validators, createFormValidation } from "@lemoncode/fonk";
import { rangeNumber } from '@lemoncode/fonk-range-number-validator';
import { isUrl } from "@lemoncode/fonk-is-url-validator";
//import { arrayRequired } from '@lemoncode/fonk-array-required-validator';
//import { isNumber } from '@lemoncode/fonk-is-number-validator';

const validationSchema = {
    field: {

    title:[
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

    notes:[
        {
            validator: Validators.required,
            message: 'Campo requerido',
        },
        
        {
            validator: Validators.maxLength,
            customArgs: { length: 200 }, 
            message: 'La descripcion debe tener {{length}} caracteres como mínimo',
        },    
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

    phone: [
        {
        validator: Validators.required,
        message: 'Campo requerido',
        },

        {
        validator: Validators.pattern,
        customArgs: { pattern: /^\(\+\d{1,3}\)\s?\d{8,10}$/ },
        message: 'Ingrese un número válido. Inicie con parétesis, el símbolo "+" y el código del país. Formato: (+123) ##########',
        },
    ],

    price:[
        {
        validator: Validators.required,
        message: 'Campo requerido',
        },

        {
        validator: rangeNumber.validator,
        message: 'Ingrese un valor entre 300 € y 500.000 € ',
            customArgs: {
                    min: {
                    value: 300,
                    inclusive: true,
                },
                    max: {
                    value: 500.000,
                    inclusive: true,
                },
            }

        }
    ],

    address:[
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

    city:[
        {
            validator: Validators.required,
            message: 'Campo requerido',
        }    
    ],

    squareMeter:[
         {
            validator: Validators.required,
            message: 'Campo requerido',
         },

         {
            validator: rangeNumber.validator,
            message: 'Ingrese un valor entre 3 m2 y 1.200 m2 ',
                customArgs: {
                        min: {
                        value: 3,
                        inclusive: true,
                    },
                        max: {
                        value: 1.200,
                        inclusive: true,
                    },
                }
         }
    ],
        
    bathrooms:[
        {
           validator: Validators.required,
           message: 'Campo requerido',
        },

        {
           validator: rangeNumber.validator,
           message: 'Ingrese un valor entre 1 y 5',
               customArgs: {
                       min: {
                       value: 1,
                       inclusive: true,
                   },
                       max: {
                       value: 5,
                       inclusive: true,
                   },
               }
        }
   ],

   locationUrl:[
        {
        validator: Validators.required,
        message: 'Campo requerido',
        },

        {
        validator: isUrl.validator,
        message: 'La Url ingresada es errónea. Intente nuevamente',
        }
    ],
    }
}

export const formValidation = createFormValidation(validationSchema)
