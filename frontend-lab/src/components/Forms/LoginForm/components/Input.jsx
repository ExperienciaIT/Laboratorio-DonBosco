/* eslint-disable react/prop-types */
import { findInputError, isFormInvalid } from '../utils'
import { useFormContext } from 'react-hook-form'
import { AnimatePresence, motion } from 'framer-motion'
import { MdError } from 'react-icons/md'

export const Input = ({ label, type, id, placeholder, validation, name }) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  const inputError = findInputError(errors, label)
  const isInvalid = isFormInvalid(inputError)

  const inputStyle = 'p-2 fw-medium rounded border'

  return (
    <div className='d-flex flex-column w-100 gap-1'>
      <div className='d-flex justify-content-left'>
        <label
          htmlFor={id}
          className='fw-semibold text-uppercase text-light mb-1'
        >
          {label}
        </label>
      </div>
      <input
        id={id}
        type={type}
        className={inputStyle}
        placeholder={placeholder}
        {...register(name, validation)}
      />
      <AnimatePresence mode='wait' initial={false}>
        {isInvalid && (
          <InputError
            message={inputError.error.message}
            key={inputError.error.message}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

const InputError = ({ message }) => {
  return (
    <motion.p
      className='d-flex align-items-center px-0 pt-2 fw-normal text-danger rounded'
      {...framer_error}
    >
      <MdError />
      {message}
    </motion.p>
  )
}

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 }
}
