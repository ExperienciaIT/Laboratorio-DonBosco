// Estilos generales del formulario
import styles from '../styles/Form.module.css'

export const Field = ({ register, fieldName, validations, label, errors, placeholder, type }) => {
  return (
    <div className={styles.fieldContainer}>
      <label
        htmlFor={fieldName}
        className={styles.labelDescription}
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={styles.input}
        {...register(fieldName, validations)}
      />
      <p
        className={styles.userMessage}
      >
        {errors?.message}
      </p>
    </div>
  )
}
