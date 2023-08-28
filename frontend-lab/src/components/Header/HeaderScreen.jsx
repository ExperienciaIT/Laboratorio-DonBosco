import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Logo } from '../Logo/Logo'
import { NavOptions } from '../NavOptions/NavOptions'
import styles from './HeaderScreen.module.css'

export const HeaderScreen = () => {
  const [labOptions, setLabOptions] = useState(false)
  const [premiumOptions, setPremiumOptions] = useState(false)
  return (
    <header className={styles.header}>
      <NavLink to='/' className={styles.logoContainer}>
        <Logo />
        <h1>Laboratorios Don Bosco</h1>
      </NavLink>
      <nav className={styles.navigation}>
        <ul className={styles.listOfLinks}>
          <li>
            <NavLink to='/account' className={styles.navLink}>Mi Cuenta</NavLink>
          </li>
          <li
            onMouseEnter={() => { setLabOptions(true) }}
            onMouseLeave={() => { setLabOptions(false) }}
            className={styles.navLink}
          >
            Laboratorio
            {labOptions &&
              <NavOptions>
                <NavLink to='/about' className={styles.navLink}>Nosotros</NavLink>
                <NavLink to='/schedule' className={styles.navLink}>Horarios</NavLink>
                <NavLink to='/medical-tests' className={styles.navLink}>Estudios</NavLink>
                <NavLink to='/to-address' className={styles.navLink}>A domicilio</NavLink>
              </NavOptions>}
          </li>
          <li
            onMouseEnter={() => { setPremiumOptions(true) }}
            onMouseLeave={() => { setPremiumOptions(false) }}
            className={styles.navLink}
          >
            Obras Sociales y Prepagas
            {premiumOptions &&
              <NavOptions>
                <NavLink className={styles.navLink}>Galeno</NavLink>
                <NavLink className={styles.navLink}>Medife</NavLink>
                <NavLink className={styles.navLink}>Medicus</NavLink>
                <NavLink className={styles.navLink}>Medimas</NavLink>
                <NavLink className={styles.navLink}>OSECAC</NavLink>
                <NavLink className={styles.navLink}>Swiss Medical</NavLink>
                <NavLink className={styles.navLink}>PAMI</NavLink>
              </NavOptions>}
          </li>
        </ul>
      </nav>
    </header>
  )
}
