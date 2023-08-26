import { useState } from 'react'
import styles from './EmployeeForm.module.css'
import { validateFields } from './validations/validateFields'
import { FormElement } from './components/FormElement'

export const EmployeeForm = () => {
  const [error, setError] = useState()
  const [validate, setValidate] = useState()
  // Al enviar el formulario valida cada uno de los campos
  const onSubmit = (event) => {
    event.preventDefault()
    const { messageBox, userDataAutoGenerate, toValidate } = validateFields(event)
    console.log(userDataAutoGenerate)
    setError(messageBox)
    setValidate(toValidate)
  }
  return (
    <div className={styles.employeeFormContainer}>
      <header className={styles.header}>
        <h2>Panel de Admin</h2>
        <h3>Creación de Usuarios/Empleados</h3>
      </header>
      <main className={styles.main}>
        <FormElement onSubmit={onSubmit} listOfError={error} toValidate={validate} />
      </main>
    </div>
  )
}
