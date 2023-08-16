import styles from '../EmployeeForm.module.css'

export const FormElement = ({ onSubmit }) => {
  return (
    <form action='#' className={styles.form} onSubmit={onSubmit}>
      <label htmlFor='nombre' className={styles.label}>
        <h4 className={styles.data}>Nombre</h4>
        <input
          name='nombre'
          type='text'
          placeholder='Mariano, Estefania Laura'
          className={styles.input}
          required
        />
      </label>
      <label htmlFor='apellido' className={styles.label}>
        <h4 className={styles.data}>Apellido</h4>
        <input
          name='apellido'
          type='text'
          placeholder='Mendez, Gaspar Talavera'
          className={styles.input}
          required
        />
      </label>
      <label htmlFor='dni' className={styles.label}>
        <h4 className={styles.data}>DNI</h4>
        <input
          name='dni'
          type='number'
          placeholder='12341234'
          className={styles.input}
          required
        />
      </label>
      <label htmlFor='rol' className={styles.label}>
        <h4 className={styles.data}>Rol a Desempeñar</h4>
        <input
          name='rol'
          type='text'
          placeholder='Secretaria'
          className={styles.input}
          required
        />
      </label>
      <label htmlFor='area' className={styles.label}>
        <h4 className={styles.data}>Area de Trabajo</h4>
        <input
          name='area'
          type='text'
          placeholder='Laboratorio'
          className={styles.input}
          required
        />
      </label>
      <label htmlFor='email' className={styles.label}>
        <h4 className={styles.data}>Correo Electronico</h4>
        <input
          name='email'
          type='email'
          placeholder='ejemplo@gmail.com'
          className={styles.input}
          required
        />
      </label>
      <button type='submit' className={styles.btnSubmit}>
        Crear Usuario
      </button>
    </form>
  )
}
