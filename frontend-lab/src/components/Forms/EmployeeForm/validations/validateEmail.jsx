import { toogleInputStyle } from '../service/toogleInputStyle'
import { Message } from '../components/Message'

export const validateEmail = (inputElement, email) => {
  if (!email.includes('.')) {
    const warningMessage = 'El email no tiene el formato correcto'
    toogleInputStyle(inputElement, true)
    return (<Message message={warningMessage} error />)
  } else {
    toogleInputStyle(inputElement, false)
  }
}
