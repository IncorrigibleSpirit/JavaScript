import { Validators, createFormValidation } from "@lemoncode/fonk";
import { rangeNumber } from '@lemoncode/fonk-range-number-validator';
import { isUrl } from "@lemoncode/fonk-is-url-validator";
import { arrayRequired } from "@lemoncode/fonk-array-required-validator";

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
            customArgs: { length: 1000 }, 
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
        customArgs: { pattern: /^\(\+\d{1,3}\)\s?\d{7,12}$/ },
        message: 'Número inválido. Inicialmente, ingrese entre paréntesis el código de su país. Formato: (+123) ##########',
        },
    ],

    price:[
        {
        validator: Validators.required,
        message: 'Campo requerido',
        },

        {
        validator: rangeNumber.validator,
        message: 'Ingrese un valor entre 300 y 15.000.000 sin puntos,comas o símbolos',
            customArgs: {
                    min: {
                    value: 300,
                    inclusive: true,
                },
                    max: {
                    value: 15000000,
                    inclusive: true,
                },
            }

        }
    ],

    saleTypes:[
        {
            validator: arrayRequired.validator,
                message: 'Campo requerido',     
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

    
    province:[
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
            message: 'Ingrese un valor numérico entre 3 y 1.200',
                customArgs: {
                        min: {
                        value: 3,
                        inclusive: true,
                    },
                        max: {
                        value: 1200,
                        inclusive: true,
                    },
                }
         }
    ],

    rooms:[
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

    newFeature:[
        {
            validator: arrayRequired.validator,
                message: 'Campo requerido',
        }
    ],

    }
}

export const formValidation = createFormValidation(validationSchema)
