
export const password_validation = {
    name: 'password',
    label: 'password',
    type: 'password',
    id: 'password',
    placeholder: 'type 8 digits password ...',
    validation: {
        required: {
            value: true,
            message: 'required',
        },
        pattern: {
            //only numbers and 8 digits maximun
            value: /[0-9]/i,          
            message: 'only numbers',
        },   
        minLength: {
            value: 8,
            message: 'min 8 digitos',
        },
        maxLength: {
            value: 10,
            message: 'max 10 digitos',
        },
    },
}

export const num_validation = {
    name: 'num',
    label: 'number',
    type: 'number',
    id: 'num',
    placeholder: 'write a random number',
    validation: {
        required: {
            value: true,
            message: 'required',
        },
    },
}