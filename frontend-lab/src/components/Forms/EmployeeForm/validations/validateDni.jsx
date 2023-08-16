import { toogleInputStyle } from '../service/toogleInputStyle'
import { Message } from '../components/Message'

export const validateDni = (inputElement, number) => {
  if (number.length !== 8) {
    const warningMessage = 'El campo DNI debe tener 8 caracteres'
    toogleInputStyle(inputElement, true)
    return <Message message={warningMessage} error />
  } else {
    toogleInputStyle(inputElement, false)
  }
}
