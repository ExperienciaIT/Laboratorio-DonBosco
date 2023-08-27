import { useForm } from 'react-hook-form'
import { Field } from '../components/Field'
import { validations } from '../validations/validations'
import { getUserDateCreation } from '../service/getUserDataCreation'
import { newUserData } from '../service/newUserData'
// Estilos generales del formulario
import styles from '../styles/Form.module.css'

export const EmployeeForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const onSubmit = data => {
    const creator = 'administrador'
    const userDateCreation = getUserDateCreation()
    const userLoginData = newUserData(data.name, data.surname)
    console.log({ userDateCreation, creator, userLoginData })
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <Field
        register={register}
        errors={errors.name}
        fieldName='name'
        label='Nombre completo'
        placeholder='Mariano, Alexis Lautaro'
        type='text'
        validations={validations.name}
      />
      <Field
        register={register}
        errors={errors.surname}
        fieldName='surname'
        label='Apellido/s'
        placeholder='Ocampos, Sanchez del Pinar'
        type='text'
        validations={validations.surname}
      />
      <Field
        register={register}
        errors={errors.dni}
        fieldName='dni'
        label='DNI'
        placeholder='88444222'
        type='number'
        validations={validations.dni}
      />
      <Field
        register={register}
        errors={errors.email}
        fieldName='email'
        label='Correo electrónico'
        placeholder='ejemplo@gmail.com'
        type='email'
        validations={validations.email}
      />
      <Field
        register={register}
        errors={errors.workArea}
        fieldName='workArea'
        label='Area de Trabajo'
        placeholder='Laboratorio'
        type='text'
        validations={validations.workArea}
      />
      <Field
        register={register}
        errors={errors.role}
        fieldName='role'
        label='Rol del Empleado'
        placeholder='Laboratorista'
        type='text'
        validations={validations.role}
      />
      <input type='submit' className={styles.btnSubmit} />
    </form>
  )
}
