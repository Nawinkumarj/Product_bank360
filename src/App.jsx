import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Navbar from './components/Navbar';
import Industries from './Pages/Industries';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import ServiceDetail from "./Pages/ServiceDetail";
import SubServiceDetail from './Pages/SubServiceDetail';
import CompanyDetail from './Pages/CompanyDetail'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/service/:id/subservice/:subserviceId"
          element={<SubServiceDetail />}
        />
        <Route
          path="/service/:id/subservices/:subserviceId/company/:companyId"
          element={<CompanyDetail />}
        />
      </Routes>
    </>
  );
}

export default App
