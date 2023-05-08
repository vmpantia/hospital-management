import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Components
import Layout from './pages/Layout';
import Patient from './pages/Patient';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Patient/>}/>
          <Route path="patient" element={<Patient/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
