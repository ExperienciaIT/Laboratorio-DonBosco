export const newUserData = (name, surname) => {
  const processedName = name.trim().toLowerCase()
  const processedSurname = surname.trim().toLowerCase()
  const password = Math.floor(Math.random() * 10 ** 8)
  const newUsername = processedName + processedSurname + Math.floor(Math.random() * 10 ** 2)
  return { newUsername, password }
}
