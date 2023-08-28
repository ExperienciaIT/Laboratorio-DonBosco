import { Input } from '../PasswordForm/components'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import {
  password_validation1,
  password_validation2
} from './utils/inputValidations'
import { GrMail } from 'react-icons/gr'
import { BsFillCheckSquareFill } from 'react-icons/bs'

/*
El empleado recibirá a su correo electrónico registrado, un mensaje automático
para habilitar su ingreso, pidiendo asignar una clave.
Formulario de carga de contraseña:
La clave debe ser ( >= 8 &&  !== DNI ) y numérica.

CONTRASEÑA
REPETIR CONTRASEÑA
*/

export const PasswordForm = () => {
  const methods = useForm()
  const [success, setSuccess] = useState(false)
  const [unsuccess, setUnSuccess] = useState(false)

  const onSubmit = methods.handleSubmit((data) => {
    if (parseInt(data.password1) === parseInt(data.password2)) {
      console.log(data)
      methods.reset()
      setSuccess(true)
      setUnSuccess(false)
    } else {
      setSuccess(false)
      setUnSuccess(true)
      console.log('Las contraseñas no coinciden')
      methods.reset()
    }
  })

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={(e) => {
          e.preventDefault()
        }}
        noValidate
        className='container d-flex flex-column justify-content-center align-items-center p-5 rounded'
      >
        <div className='d-grid gap-4 w-50'>
          <Input {...password_validation1} />
          <Input {...password_validation2} />
        </div>
        <div className='mt-5'>
          {success && (
            <p className='d-flex align-items-center gap-1 mb-5 fw-semibold text-success'>
              <BsFillCheckSquareFill /> El formulario se envió con éxito.
            </p>
          )}
          {unsuccess && (
            <p className='d-flex align-items-center gap-1 mb-5 fw-semibold text-danger'>
              <BsFillCheckSquareFill /> Las contraseñas no coinciden, intente
              nuevamente.
            </p>
          )}
        </div>
        <button
          onClick={onSubmit}
          className='d-flex align-items-center gap-1 p-2 fw-semibold text-light bg-primary rounded'
        >
          <GrMail />
          Enviar
        </button>
      </form>
    </FormProvider>
  )
}
