export const validations = {
  name: {
    required: true,
    minLength: 3,
    maxLength: 25
  },
  surname: {
    required: true,
    minLength: 5,
    maxLength: 20
  },
  dni: {
    required: true,
    minLength: 8
  },
  birthDate: {
    required: true
  },
  address: {
    required: true,
    minLength: 8
  },
  email: {
    required: true,
    pattern: /[^\s@]+@[^\s@]+\.[^\s@]+/
  },
  medicalInsurancePremium: {
    required: true,
    minLength: 6
  },
  numberMember: {
    required: true,
    minLength: 10
  }
}
