import styles from './LoginScreen.module.css'
import { LoginForm } from '../Forms/LoginForm/LoginForm'

export const LoginScreen = () => {
  return (
    <section className={styles.formContainer}>
      <h2 className='mb-5'>Pantalla de Inicio de Sesión</h2>
      <LoginForm />
    </section>
  )
}
