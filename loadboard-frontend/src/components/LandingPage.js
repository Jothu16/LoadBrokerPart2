import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Assuming you have a separate CSS file

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>MRI Transportation Loadboard</h1>
        <nav className="nav-bar">
          <Link to="/carrier" className="nav-link">Carriers</Link>
          <Link to="/broker" className="nav-link">Brokers</Link>
          <Link to="/shipper" className="nav-link">Shippers</Link>
        </nav>
      </header>
      <main className="main-content">
        <h2>Welcome to Our Loadboard Platform</h2>
        <p>Find the best loads, optimize your routes, and streamline your transportation business.</p>
        {/* Additional content here */}
      </main>
      <footer className="footer">
        <p>&copy; 2023 MRI Transportation LLC</p>
        {/* Additional footer content here */}
      </footer>
    </div>
  );
}

export default LandingPage;
