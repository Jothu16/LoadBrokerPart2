import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Carrier from './components/Carrier';
import Broker from './components/Broker';
import Shipper from './components/Shipper';
import LandingPage from './components/LandingPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/carrier" element={<Carrier />} />
        <Route path="/broker" element={<Broker />} />
        <Route path="/shipper" element={<Shipper />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;


 
