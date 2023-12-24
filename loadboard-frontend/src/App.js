import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Carrier from './components/Carrier';
import Broker from './components/Broker';
import Shipper from './components/Shipper';
import LandingPage from './components/LandingPage';
import ProtectedRoute from './components/ProtectedRoute'; // Make sure to import ProtectedRoute
import LoginForm from './components/LoginForm'; // Assuming you have a LoginForm component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/carrier" element={<ProtectedRoute component={Carrier} />} />
        <Route path="/broker" element={<ProtectedRoute component={Broker} />} />
        <Route path="/shipper" element={<ProtectedRoute component={Shipper} />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
 
