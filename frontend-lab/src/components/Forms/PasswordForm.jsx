/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import "./styles/PasswordForm.css";
/*
El empleado recibirá a su correo electrónico registrado, un mensaje automático 
para habilitar su ingreso, pidiendo asignar una clave.
Formulario de carga de contraseña:
La clave debe ser ( >= 8 &&  !== DNI ) y numérica.                                                     

CONTRASEÑA
REPETIR CONTRASEÑA

*/

const DNI = 12345678;

export const PasswordForm = () => {
  const initialValues = { password1: "", password2: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors, formValues, isSubmit]);

  const validate = (values) => {
    const errors = {};
    if (!values.password1) {
      errors.password1 = "Password is required";
    }
    if (!values.password2) {
      errors.password2 = "Repeat password is required";
    }
    if (formValues.password1 == DNI) {
      alert("La clave no puede ser el DNI");
    }
    return errors;
  };

  return (
    <>
      <div className="title my-5">
        <h1>Password</h1>
      </div>

      <form className="form my-5" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password1"
            value={formValues.password1}
            onChange={handleChange}
            autoComplete="off"
            name="password1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword2" className="form-label">
            Repetir Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password2"
            value={formValues.password2}
            onChange={handleChange}
            name="password2"
          />
        </div>

        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>
      <pre>{JSON.stringify(formValues)}</pre>
    </>
  );
};
