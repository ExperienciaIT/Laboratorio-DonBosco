import { toogleInputStyle } from '../service/toogleInputStyle'
import { Message } from '../components/Message'

export const validateJobPositionAndWorkArea = (inputElement, textValue, fieldName) => {
  if (!isNaN(textValue)) {
    const warningMessage = 'No debe ser un número'
    toogleInputStyle(inputElement, true)
    return <Message message={warningMessage} error />
  } else if (textValue.length < 5 || textValue > 20) {
    const warningMessage = 'Debe tener entre 5 y 20 caracteres'
    console.log(warningMessage)
    toogleInputStyle(inputElement, true)
    return <Message message={warningMessage} error />
  } else {
    toogleInputStyle(inputElement, false)
  }
}