
export const name_validation = {
    name: 'name',
    label: 'name',
    type: 'text',
    id: 'name',
    placeholder: 'write your name ...',
    validation: {
        required: {
            value: true,
            message: 'required',
        },
        minLength: {
            value: 10,
            message: '10 characters min',
        },
        maxLength: {
            value: 15,
            message: '15 characters max',
        },
    },
}


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
