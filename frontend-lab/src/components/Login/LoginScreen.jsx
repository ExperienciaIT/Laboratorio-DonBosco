import { LoginForm } from "../Forms/LoginForm";
import "./LoginScreen.css";

export const LoginScreen = () => {
  return (
    <>
      <div className="title my-5">
        <h1>Login</h1>
      </div>
      <LoginForm />
    </>
  );
};
