import { NavLink } from 'react-router-dom'

export const HeaderScreen = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg bg-body-tertiary' data-bs-theme='dark'>
        <div className='container-fluid'>
          <NavLink to='/' className='navbar-brand'>
            Don Bosco
          </NavLink>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <NavLink
                  to='/'
                  className='nav-link active'
                  aria-current='page'
                />
              </li>
              <li className='nav-item'>
                <NavLink to='/about' className='nav-link'>
                  Nosotros
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/services' className='nav-link'>
                  Servicios
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/clients' className='nav-link'>
                  Clientes
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/employees' className='nav-link'>
                  Empleados
                </NavLink>
              </li>
              {/* Rutas para visibilizar los formularios, todavia no hay rutas protegidas !! */}
              <li className="nav-item">
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/password" className="nav-link">
                  Password
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
