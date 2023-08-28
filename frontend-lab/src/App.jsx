import { Routes, Route } from 'react-router-dom'
import { HeaderScreen } from './components/Header/HeaderScreen'
import { Home } from './components/Home/Home'
// Panel Mi Cuenta
import { Account } from './components/Account/Account'
// Panel Laboratorio
import { AboutScreen } from './components/About/AboutScreen'
import { Schedule } from './components/Schedule/Schedule'
import { ServiceScreen } from './components/LabServices/ServiceScreen'
import { ToHomeAdress } from './components/ToHomeAddress/ToHomeAddress'
// Panel Formularios
import { EmployeeScreen } from './components/LabEmployees/EmployeeScreen'
import { ClientScreen } from './components/LabClients/ClientScreen'
import { LoginScreen } from './components/Login/LoginScreen'
import { PasswordScreen } from './components/Password/PasswordScreen'

function App () {
  return (
    <>
      <HeaderScreen />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* Panel Mi Cuenta */}
          <Route path='/account' element={<Account />} />
          {/* Panel Laboratorio */}
          <Route path='/about' element={<AboutScreen />} />
          <Route path='/schedule' element={<Schedule />} />
          <Route path='/medical-tests' element={<ServiceScreen />} />
          <Route path='/to-address' element={<ToHomeAdress />} />
          {/* Panel Formularios */}
          <Route path='/employeeForm' element={<EmployeeScreen />} />
          <Route path='/clientForm' element={<ClientScreen />} />
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/password' element={<PasswordScreen />} />
        </Routes>
      </main>
    </>
  )
}

export default App
