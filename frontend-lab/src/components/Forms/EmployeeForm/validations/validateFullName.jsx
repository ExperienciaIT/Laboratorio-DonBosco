import { hasNumbers } from './hasNumbers'
import { toogleInputStyle } from '../service/toogleInputStyle'
import { Message } from '../components/Message'

export const validateFullName = (inputElement, nameOrSurname, fieldName = null) => {
  if (!isNaN(nameOrSurname) || hasNumbers(nameOrSurname)) {
    const warningMessage = `El campo ${fieldName} no debe contener números`
    toogleInputStyle(inputElement, true)
    return <Message message={warningMessage} error />
  } else if (nameOrSurname.length < 3 || nameOrSurname.length > 30) {
    const warningMessage = `El campo ${fieldName} tener entre 3 y 25 caracteres`
    toogleInputStyle(inputElement, true)
    return <Message message={warningMessage} error />
  } else {
    toogleInputStyle(inputElement, false)
  }
}
