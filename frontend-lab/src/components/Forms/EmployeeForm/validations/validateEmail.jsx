import { toogleInputStyle } from '../service/toogleInputStyle'
import { Message } from '../components/Message'

export const validateEmail = (inputElement, email) => {
  if (!email.includes('.')) {
    const warningMessage = 'Formato de correo incorrecto'
    toogleInputStyle(inputElement, true)
    return (<Message message={warningMessage} error />)
  } else {
    toogleInputStyle(inputElement, false)
  }
}
