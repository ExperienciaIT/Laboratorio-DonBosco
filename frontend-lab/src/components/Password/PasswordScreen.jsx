import styles from "./PasswordScreen.module.css";
import { PasswordForm } from "../Forms/PasswordForm/PasswordForm";

export const PasswordScreen = () => {
  return (
    <>
      <div className={styles.title}>
        <h1 className="mb-5">Change Password</h1>
      </div>
      <PasswordForm />
    </>
  );
};
