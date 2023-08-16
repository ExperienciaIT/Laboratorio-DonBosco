import { Routes, Route } from "react-router-dom";
import { HeaderScreen } from "./components/Header/HeaderScreen";
import { Home } from "./components/Home/Home";
import { AboutScreen } from "./components/About/AboutScreen";
import { ClientScreen } from "./components/LabClients/ClientScreen";
import { ServiceScreen } from "./components/LabServices/ServiceScreen";
import { EmployeeScreen } from "./components/LabEmployees/EmployeeScreen";
/* imports temporales */
import { LoginScreen } from "./components/Login/LoginScreen";
import { PasswordForm } from "./components/Forms/PasswordForm";

function App() {
  return (
    <>
      <HeaderScreen />
      <main className="page">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<AboutScreen />}></Route>
          <Route path="/services" element={<ServiceScreen />}></Route>
          <Route path="/clients" element={<ClientScreen />}></Route>
          <Route path="/employees" element={<EmployeeScreen />}></Route>
          {/* Rutas para visibilizar los formularios, todavia no hay rutas protegidas !! */}
          <Route path="/login" element={<LoginScreen />}></Route>
          <Route path="/password" element={<PasswordForm />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
