// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CarrierDashboard from './components/CarrierDashboard'; // Import CarrierDashboard
import Broker from './components/Broker';
import Shipper from './components/Shipper';
import LandingPage from './components/LandingPage';
import ProtectedRoute from './components/ProtectedRoute';
import LoginForm from './components/LoginForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/carrier" element={
          <ProtectedRoute>
            <CarrierDashboard /> {/* Use CarrierDashboard here */}
          </ProtectedRoute>
        } />
        <Route path="/broker" element={
          <ProtectedRoute>
            <Broker />
          </ProtectedRoute>
        } />
        <Route path="/shipper" element={
          <ProtectedRoute>
            <Shipper />
          </ProtectedRoute>
        } />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;


