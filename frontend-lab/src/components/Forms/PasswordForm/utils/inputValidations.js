export const password_validation1 = {
    name: 'password1',
    label: 'password1',
    type: 'password1',
    id: 'password1',
    placeholder: 'type 8 digits password ...',
    validation: {
        required: {
            value: true,
            message: 'password 1 required',
        },
        pattern: {
            value: /^[0-9][\w._%+-]+[^A-Za-z]+[0-9]$/,
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
export const password_validation2 = {
    name: 'password2',
    label: 'password2',
    type: 'password2',
    id: 'password2',
    placeholder: 'type 8 digits password ...',
    validation: {
        required: {
            value: true,
            message: 'password 2 required',
        },
        pattern: {
            value: /^[0-9][\w._%+-]+[^A-Za-z]+[0-9]$/,
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
