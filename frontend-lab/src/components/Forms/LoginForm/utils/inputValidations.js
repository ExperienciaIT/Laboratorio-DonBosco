
export const name_validation = {
    name: 'name',
    label: 'name',
    type: 'text',
    id: 'name',
    placeholder: 'Ingrese su nombre ...',
    validation: {
        required: {
            value: true,
            message: 'el nombre es requerido',
        },
        pattern: {
            value: /^[^0-9][A-Za-z]+[^0-9][\w._%+-][^0-9]$/,
            message: 'solo caracteres',

        },
        minLength: {
            value: 10,
            message: 'minimo 10 caracteres',
        },
        maxLength: {
            value: 15,
            message: 'maximo 20 caracteres',
        },
    },
}

export const password_validation = {
    name: 'password',
    label: 'password',
    type: 'password',
    id: 'password',
    placeholder: 'Ingrese la contraseña ...',
    validation: {
        required: {
            value: true,
            message: 'la contraseña es requerida',
        },
        pattern: {
            value: /^[0-9][\w._%+-]+[^A-Za-z]+[0-9]$/,
            message: 'solo numeros',
        },
        minLength: {
            value: 8,
            message: 'minimo 8 digitos',
        },
        maxLength: {
            value: 10,
            message: 'maximo 10 digitos',
        },
    },
}