import { Routes, Route } from "react-router-dom";
import { HeaderScreen } from "./components/Header/HeaderScreen";
import { Home } from "./components/Home/Home";
import { AboutScreen } from "./components/About/AboutScreen";
import { ClientScreen } from "./components/LabClients/ClientScreen";
import { ServiceScreen } from "./components/LabServices/ServiceScreen";
import { EmployeeScreen } from "./components/LabEmployees/EmployeeScreen";

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
        </Routes>
      </main>
    </>
  );
}

export default App;
