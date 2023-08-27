import styles from '../ClientForm.module.css'

export const Field = ({ register, fieldName, validations, label, errors, placeholder, type }) => {
  const cssBorder = errors?.type !== undefined ? `${styles.inputInCaseOfError}` : ''

  return (
    <div className={styles.fieldContainer}>
      <label
        htmlFor={fieldName}
        className={styles.label}
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={`${cssBorder} ${styles.input}`}
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
