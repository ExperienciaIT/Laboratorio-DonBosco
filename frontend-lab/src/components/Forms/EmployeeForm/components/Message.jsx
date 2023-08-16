import styles from '../EmployeeForm.module.css'

export const Message = ({ message, error }) => {
  // En caso de error resaltar el marco de color rojo. Sino de color verde
  const cssStyles = error
    ? `${styles.inputInCaseOfError} ${styles.message}`
    : `${styles.inputInCaseOfSuccess} ${styles.message}`
    // Renderizado del mensaje final al usuario
  return <p className={cssStyles}>{message}</p>
}
