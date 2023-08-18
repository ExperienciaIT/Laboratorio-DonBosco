import { useState } from 'react'
import styles from './EmployeeForm.module.css'
import { validateFields } from './validations/validateFields'
import { FormElement } from './components/FormElement'

export const EmployeeForm = () => {
  const [error, setError] = useState()
  // Al enviar el formulario valida cada uno de los campos
  const onSubmit = (event) => {
    event.preventDefault()
    const { messageBox, userDataAutoGenerate } = validateFields(event)
    console.log(userDataAutoGenerate)
    setError(messageBox)
  }
  return (
    <div className={styles.employeeFormContainer}>
      <header className={styles.header}>
        <h2>Panel de Admin</h2>
        <h3>Creación de Usuarios/Empleados</h3>
      </header>
      <main className={styles.main}>
        <FormElement onSubmit={onSubmit} />
        <section className={styles.messagesContainer}>
          {error}
        </section>
      </main>
    </div>
  )
}
