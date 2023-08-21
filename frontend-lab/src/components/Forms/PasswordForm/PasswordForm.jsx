import { Input } from "../PasswordForm/components";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { password_validation } from "./utils/inputValidations";
import { GrMail } from "react-icons/gr";
import { BsFillCheckSquareFill } from "react-icons/bs";
/*
El empleado recibirá a su correo electrónico registrado, un mensaje automático 
para habilitar su ingreso, pidiendo asignar una clave.
Formulario de carga de contraseña:
La clave debe ser ( >= 8 &&  !== DNI ) y numérica.                                                     

CONTRASEÑA
REPETIR CONTRASEÑA
*/

export const PasswordForm = () => {
  const methods = useForm();
  const [success, setSuccess] = useState(false);

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
    methods.reset();
    setSuccess(true);
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        noValidate
        className="container d-flex flex-column justify-content-center align-items-center p-5 rounded"
      >
        <div className="d-grid gap-4 w-50">
          <Input {...password_validation} />
          <Input {...password_validation} />
        </div>
        <div className="mt-5">
          {success && (
            <p className="d-flex align-items-center gap-1 mb-5 fw-semibold text-success">
              <BsFillCheckSquareFill /> Form has been submitted successfully
            </p>
          )}
          <button
            onClick={onSubmit}
            className="d-flex align-items-center gap-1 p-2 fw-semibold text-light bg-primary rounded"
          >
            <GrMail />
            Submit Form
          </button>
        </div>
      </form>
    </FormProvider>
  );
};
