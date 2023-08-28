import styles from './NavOptions.module.css'

export const NavOptions = ({ children }) => {
  return (
    <nav className={styles.optionsContainer}>
      {children}
    </nav>
  )
}
