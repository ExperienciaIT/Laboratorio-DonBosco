import styles from '../EmployeeForm.module.css'

export const FormElement = ({ onSubmit, listOfError, toValidate }) => {
  return (
    <form action='#' className={styles.form} onSubmit={onSubmit}>
      <div className={styles.fieldContainer}>
        <label htmlFor='nombre' className={styles.labelDescription}>Nombre</label>
        <input
          name='nombre'
          type='text'
          placeholder='Mariano, Estefania Laura'
          className={styles.input}
          required
        />
        {toValidate && listOfError[0]}
      </div>
      <div className={styles.fieldContainer}>
        <label htmlFor='apellido' className={styles.labelDescription}>Apellido</label>
        <input
          name='apellido'
          type='text'
          placeholder='Mendez, Gaspar Talavera'
          className={styles.input}
          required
        />
        {toValidate && listOfError[1]}
      </div>
      <div className={`${styles.fieldContainer} ${styles.dniFieldContainer}`}>
        <label htmlFor='dni' className={styles.labelDescription}>DNI</label>
        <input
          name='dni'
          type='number'
          placeholder='12341234'
          className={styles.input}
          required
        />
        {toValidate && listOfError[2]}
      </div>
      <div className={`${styles.fieldContainer} ${styles.emailFieldContainer}`}>
        <label htmlFor='email' className={styles.labelDescription}>Correo Electrónico</label>
        <input
          name='email'
          type='email'
          placeholder='ejemplo@gmail.com'
          className={styles.input}
          required
        />
        {toValidate && listOfError[3]}
      </div>
      <div className={styles.fieldContainer}>
        <label htmlFor='rol' className={styles.labelDescription}>Rol a Desempeñar</label>
        <input
          name='rol'
          type='text'
          placeholder='Secretaria'
          className={styles.input}
          required
        />
        {toValidate && listOfError[4]}
      </div>
      <div className={styles.fieldContainer}>
        <label htmlFor='area' className={styles.labelDescription}>Área de Trabajo</label>
        <input
          name='area'
          type='text'
          placeholder='Laboratorio'
          className={styles.input}
          required
        />
        {toValidate && listOfError[5]}
      </div>
      <button type='submit' className={styles.btnSubmit}>
        Crear Usuario
      </button>
      {toValidate === false && listOfError}
    </form>
  )
}
