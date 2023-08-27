import { getUserDateCreation } from '../../service/getUserDataCreation'

export const getNewUserData = (formData) => {
  const { date, month, year, time } = getUserDateCreation()
  // El nombre de la persona que creo el nuevo usuario/empleado
  const creator = 'administrador'
  // Datos de logueo autogenerados
  const name = formData.get('nombre').toLowerCase()
  const surname = formData.get('apellido').toLowerCase()
  const userName = name.trim().replace(' ', '') + surname.trim().replace(' ', '')
  const userPassword = Math.floor(Math.random() * 10 ** 8 + Math.random() * 10 ** 4)
  // Mensaje final fecha de creación del usuario
  return {
    dateCreation: {
      date, month, year, time
    },
    userData: {
      creator,
      userName,
      userPassword
    }
  }
}
