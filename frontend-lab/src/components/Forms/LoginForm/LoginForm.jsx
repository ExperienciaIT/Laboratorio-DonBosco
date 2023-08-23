import { Input } from "../LoginForm/components";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { name_validation, password_validation } from "./utils/inputValidations";
import { GrMail } from "react-icons/gr";
import { BsFillCheckSquareFill } from "react-icons/bs";

/*
EL login clasico con usuario y contraseña. Validaciones y los campos requeridos.
*/

export const LoginForm = () => {
  const methods = useForm();
  const [success, setSuccess] = useState(false);

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
    setSuccess(true);
    methods.reset();
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
          <Input {...name_validation} />
          <Input {...password_validation} />
        </div>
        <div className="mt-5">
          {success && (
            <p className="d-flex align-items-center gap-1 mb-5 fw-semibold text-success">
              <BsFillCheckSquareFill /> El formulario se envió con éxito.
            </p>
          )}
        </div>
        <button
          onClick={onSubmit}
          className="d-flex align-items-center gap-1 p-2 fw-semibold text-light bg-primary rounded"
        >
          <GrMail />
          Submit Form
        </button>
      </form>
    </FormProvider>
  );
};
