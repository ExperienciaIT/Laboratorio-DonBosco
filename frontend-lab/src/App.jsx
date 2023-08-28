import { Routes, Route } from 'react-router-dom'
import { HeaderScreen } from './components/Header/HeaderScreen'
import { Home } from './components/Home/Home'
import { Account } from './components/Account/Account'
import { AboutScreen } from './components/About/AboutScreen'
import { Schedule } from './components/Schedule/Schedule'
import { ServiceScreen } from './components/LabServices/ServiceScreen'
import { ToAdress } from './components/ToAddress/ToAddress'
import { MedicalInsurancePremium } from './components/MedicalInsurancePremium/MedicalInsurancePremium'

function App () {
  return (
    <>
      <HeaderScreen />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/account' element={<Account />} />
          <Route path='/about' element={<AboutScreen />} />
          <Route path='/schedule' element={<Schedule />} />
          <Route path='/medical-tests' element={<ServiceScreen />} />
          <Route path='/to-address' element={<ToAdress />} />
          <Route path='/medicalInsurancePremium' element={<MedicalInsurancePremium />} />
        </Routes>
      </main>
    </>
  )
}

export default App
