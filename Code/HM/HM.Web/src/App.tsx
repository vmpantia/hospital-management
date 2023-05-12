import { BrowserRouter, Route, Routes } from "react-router-dom";

//Components
import Layout from "./pages/Layout";
import Patient from "./pages/Patient";
import Doctor from "./pages/Doctor";
import Nurse from "./pages/Nurse";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Patient />}/>
          <Route path="patient" element={<Patient />}/>
          <Route path="doctor" element={<Doctor />}/>
          <Route path="nurse" element={<Nurse />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
