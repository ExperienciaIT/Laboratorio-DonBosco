import { Routes, Route } from 'react-router-dom'
import { HeaderScreen } from './components/Header/HeaderScreen'
import { Home } from './components/Home/Home'
import { EmployeeForm } from './components/Forms/EmployeeForm/EmployeeForm'
import { AboutScreen } from './components/About/AboutScreen'
import { ClientScreen } from './components/LabClients/ClientScreen'
import { ServiceScreen } from './components/LabServices/ServiceScreen'
import { EmployeeScreen } from './components/LabEmployees/EmployeeScreen'

function App () {
  return (
    <>
      <HeaderScreen />
      <main className='page'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin' element={<EmployeeForm />} />
          <Route path='/about' element={<AboutScreen />} />
          <Route path='/services' element={<ServiceScreen />} />
          <Route path='/clients' element={<ClientScreen />} />
          <Route path='/employees' element={<EmployeeScreen />} />
        </Routes>
      </main>
    </>
  )
}

export default App
