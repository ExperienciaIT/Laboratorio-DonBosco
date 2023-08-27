// Todas las validaciones de los campos de registro
export const validations = {
  // Nombre completo
  name: {
    required: {
      value: true,
      message: 'Campo requerido'
    },
    minLength: {
      value: 3,
      message: 'Minimo debe tener 3 caracteres'
    },
    maxLength: {
      value: 25,
      message: 'Máximo debe tener 25 caracteres'
    },
    validate: value => { return isNaN(value) || 'No debe ser un número' }
  },
  // Apellido/s
  surname: {
    required: {
      value: true,
      message: 'Campo requerido'
    },
    minLength: {
      value: 5,
      message: 'Minimo debe tener 5 caracteres'
    },
    maxLength: {
      value: 20,
      message: 'Máximo debe tener 20 caracteres'
    },
    validate: value => { return isNaN(value) || 'No debe ser un número' }
  },
  // Documento Nacional de Identidad (DNI)
  dni: {
    required: {
      value: true,
      message: 'Campo requerido'
    },
    validate: value => { return value.length === 8 || 'DNI debe tener 8 números' }
  },
  // Fecha de nacimiento
  birthDate: {
    required: {
      value: true,
      message: 'Campo requerido'
    },
    validate: value => {
      const currentYear = new Date().getFullYear()
      const userYearBirthDate = new Date(value).getFullYear()
      if (currentYear - userYearBirthDate > 100) return 'El paciente tiene mas de 100 años?'
      else if (userYearBirthDate >= currentYear) return 'Fecha no valida'
    }
  },
  // Direccion actual de residencia
  address: {
    required: {
      value: true,
      message: 'Campo requerido'
    },
    minLength: {
      value: 8,
      message: 'La dirección debe contenedor 8 caracteres mínimo'
    },
    validate: value => { return isNaN(value) || 'No debe ser un número' }
  },
  // Correo electronico
  email: {
    required: {
      value: true,
      message: 'Campo requerido'
    },
    pattern: {
      value: /[^\s@]+@[^\s@]+\.[^\s@]+/,
      message: 'Formato incorrecto'
    }
  },
  // Prestador del servicio medico del paciente
  medicalInsurancePremium: {
    required: {
      value: true,
      message: 'Campo requerido'
    },
    minLength: {
      value: 6,
      message: 'Debe contener 6 caracteres minimo'
    },
    validate: value => { return isNaN(value) || 'No debe ser un número' }
  },
  // Numero de afiliado
  numberMember: {
    required: {
      value: true,
      message: 'Campo requerido'
    },
    minLength: {
      value: 10,
      message: 'Debe contener mínimo 10 numeros'
    }
  },
  // Area de trabajo del nuevo empleado
  workArea: {
    required: {
      value: true,
      message: 'Campo requerido'
    },
    minLength: {
      value: 5,
      message: 'Debe contenedor mínimo 5 caracteres'
    },
    validate: value => { return isNaN(value) || 'No debe ser un número' }
  },
  // Rol del nuevo empleado
  role: {
    required: {
      value: true,
      message: 'Campo requerido'
    },
    minLength: {
      value: 5,
      message: 'Debe contenedor mínimo 5 caracteres'
    },
    validate: value => { return isNaN(value) || 'No debe ser un número' }
  }
}
