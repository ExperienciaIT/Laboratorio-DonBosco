const getUserDateCreation = ()=>{
  const creationDate = new Date()
  const date = creationDate.getDate()
  const month = creationDate.getMonth() + 1
  const year = creationDate.getFullYear()
  // Tiempo
  const hours = creationDate.getHours() < 10 ? '0' + creationDate.getHours() : creationDate.getHours()
  const minutes = creationDate.getMinutes() < 10 ? '0' + creationDate.getMinutes() : creationDate.getMinutes()
  const time = `${hours}:${minutes}`

  return {date, month, year, time}
}

export const getNewUserData = (formData) => {
  const { date, month, year, time } = getUserDateCreation()
  // El nombre de la persona que creo el nuevo usuario/empleado
  const creator = 'administrador'
  // Datos de logueo autogenerados
  const name = formData.get('nombre').toLowerCase()
  const surname = formData.get('apellido').toLowerCase()
  const userName = name.trim().replace(' ', '') + surname.trim().replace(' ', '')
  const userPassword = Math.floor(Math.random() * 10**8 + Math.random() * 10**4)
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
