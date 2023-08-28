export const password_validation1 = {
    name: 'password1',
    label: 'password1',
    type: 'password',
    id: 'password1',
    placeholder: 'Ingrese la contraseña ...',
    validation: {
        required: {
            value: true,
            message: 'la contraseña es requerida',
        },
        validateAsNumber: {
            value: true,
            message: 'solo numeros',
        },
        pattern: {
            value: /^[0-9]+[\w._%+-]+[^A-Za-z]+[0-9]$/,
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
export const password_validation2 = {
    name: 'password2',
    label: 'password2',
    type: 'password',
    id: 'password2',
    placeholder: 'Ingrese la contraseña ...',
    validation: {
        required: {
            value: true,
            message: 'la contraseña es requerida',
        },
        pattern: {
            value: /^[0-9]+[\w._%+-]+[^A-Za-z]+[0-9]$/,
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
