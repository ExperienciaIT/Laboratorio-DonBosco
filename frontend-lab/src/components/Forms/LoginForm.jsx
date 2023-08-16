/*
EL login clasico con usuario y contraseña. Validaciones y los campos requeridos.
*/

export const LoginForm = () => {
  return (
    <form className="form my-5">
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Username
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>

      <button type="submit" className="btn btn-primary mt-2">
        Submit
      </button>
    </form>
  );
}
