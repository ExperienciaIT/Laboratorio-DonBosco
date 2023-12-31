import { useForm } from 'react-hook-form'
import { Field } from '../components/Field'
import { validations } from '../validations/validations'
import { getUserDateCreation } from '../service/getUserDataCreation'
// Estilos generales del formulario
import styles from '../styles/Form.module.css'

export const ClientForm = () => {
  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm()
  const onSubmit = data => {
    const userDateCreation = getUserDateCreation()
    const { year } = userDateCreation
    const creator = 'secretaria'
    const userYearBirthDate = new Date(watch('birthDate')).getFullYear()
    const patientAge = year - userYearBirthDate

    const userData = { userDateCreation, creator, patientAge }
    console.log(userData, data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <Field
        register={register}
        fieldName='name'
        type='text'
        validations={validations.name}
        errors={errors.name}
        placeholder='Mariano, Alexis Lautaro'
        label='Nombre Completo'
      />
      <Field
        register={register}
        fieldName='surname'
        type='text'
        validations={validations.surname}
        errors={errors.surname}
        placeholder='Ocampos, Sanchez del Pinar'
        label='Apellido/s'
      />
      <Field
        register={register}
        fieldName='dni'
        type='number'
        validations={validations.dni}
        errors={errors.dni}
        placeholder='88444222'
        label='DNI'
      />
      <Field
        register={register}
        fieldName='birthDate'
        type='date'
        validations={validations.birthDate}
        errors={errors.birthDate}
        label='Fecha de Nacimiento'
      />
      <Field
        register={register}
        fieldName='address'
        type='text'
        validations={validations.address}
        errors={errors.address}
        placeholder='Lacaze 865, Lomas de Zamora, Provincia de Buenos Aires'
        label='Dirección'
      />
      <Field
        register={register}
        fieldName='email'
        type='email'
        validations={validations.email}
        errors={errors.email}
        placeholder='ejemplo@gmail.com'
        label='Correo electrónico'
      />
      <Field
        register={register}
        fieldName='medicalInsurancePremium'
        type='text'
        validations={validations.medicalInsurancePremium}
        errors={errors.medicalInsurancePremium}
        placeholder='Obra social, prepaga, particular'
        label='Prestador de Servicio Médico'
      />
      <Field
        register={register}
        fieldName='numberMember'
        type='number'
        validations={validations.numberMember}
        errors={errors.numberMember}
        placeholder='123456789012/00'
        label='Número de Afiliado'
      />
      <input type='submit' className={styles.btnSubmit} />
    </form>
  )
}
