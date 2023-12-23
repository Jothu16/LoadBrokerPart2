import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <header>
        <h1>MRI Transportation Loadboard</h1>
        <nav>
          <Link to="/carrier">Carriers</Link>
          <Link to="/broker">Brokers</Link>
          <Link to="/shipper">Shippers</Link>
        </nav>
      </header>
      <main>
        <h2>Welcome to Our Loadboard Platform</h2>
        <p>Find the best loads, optimize your routes, and streamline your transportation business.</p>
      </main>
      <footer>
        <p>&copy; 2023 MRI Transportation LLC</p>
      </footer>
    </div>
  );
}

export default LandingPage;
