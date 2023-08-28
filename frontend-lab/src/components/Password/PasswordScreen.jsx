import styles from './PasswordScreen.module.css'
import { PasswordForm } from '../Forms/PasswordForm/PasswordForm'

export const PasswordScreen = () => {
  return (
    <>
      <section className={styles.formContainer}>
        <h2 className='mb-5'>Pantalla de Cambio Contraseña</h2>
        <PasswordForm />
      </section>
    </>
  )
}
