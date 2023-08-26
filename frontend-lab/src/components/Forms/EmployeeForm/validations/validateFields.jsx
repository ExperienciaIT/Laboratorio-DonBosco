import { Message } from '../components/Message'
// Validaciones por campo
import { validateFullName } from './validateFullName'
import { validateDni } from './validateDni'
import { validateJobPositionAndWorkArea } from './validateJobAndArea'
import { validateEmail } from './validateEmail'
// Obtener fecha de creacion de usuario
import { getNewUserData } from '../service/getNewUserData'

export const validateFields = (event) => {
  const formData = new FormData(event.target) // Prototype Formulario con la informacion de los inputs
  const listOfErrors = []

  for (const [key, value] of formData.entries()) {
    const input = event.target.elements[key]
    if (key === 'nombre' || key === 'apellido') {
      listOfErrors.push(validateFullName(input, value, key))
    }
    if (key === 'dni') {
      listOfErrors.push(validateDni(input, value))
    }
    if (key === 'rol' || key === 'area') {
      listOfErrors.push(validateJobPositionAndWorkArea(input, value, key))
    }
    if (key === 'email') {
      listOfErrors.push(validateEmail(input, value))
    }
  }
  if (listOfErrors.every((element) => element === undefined)) {
    const successMessage = 'El usuario se ha creado con exito'
    const messageBox = <Message message={successMessage} error={false} />
    const userDataAutoGenerate = getNewUserData(formData)
    return { messageBox, userDataAutoGenerate, toValidate: false }
  }
  const errorMessage = 'Validar los campos'
  return { messageBox: listOfErrors, userDataAutoGenerate: errorMessage, toValidate: true }
}
