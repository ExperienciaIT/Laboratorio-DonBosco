export const getUserDateCreation = () => {
  const creationDate = new Date()
  const date = creationDate.getDate()
  const month = creationDate.getMonth() + 1
  const year = creationDate.getFullYear()
  // Tiempo
  const hours = creationDate.getHours() < 10 ? '0' + creationDate.getHours() : creationDate.getHours()
  const minutes = creationDate.getMinutes() < 10 ? '0' + creationDate.getMinutes() : creationDate.getMinutes()
  const time = `${hours}:${minutes}`
  // Mensaje final fecha de creación del usuario
  return { date, month, year, time }
}
