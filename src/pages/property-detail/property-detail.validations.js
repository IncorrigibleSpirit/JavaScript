import { Validators, createFormValidation } from "@lemoncode/fonk";

// Esquema de validacion

const validationSchema = {
    field: {
        email:[
            {
            validator:Validators.required,
            message:'Campo requerido',
            },

            {
            validator:Validators.email,
            message:'email no valido',       
            },
        ],
        message:[
            {
            validator:Validators.required,
            message:'Campo requerido',
            }
        ],
    }
}

export const formValidation = createFormValidation(validationSchema)