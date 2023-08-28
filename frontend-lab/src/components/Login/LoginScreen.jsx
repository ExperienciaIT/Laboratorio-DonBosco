import styles from "./LoginScreen.module.css";
import { LoginForm } from "../Forms/LoginForm/LoginForm";

export const LoginScreen = () => {
  return (
    <>
      <div className={styles.title}>
        <h1 className="mb-5">Login</h1>
      </div>
      <LoginForm />
    </>
  );
};
