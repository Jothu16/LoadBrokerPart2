// Carrier.js

import React, { useState } from 'react';
import './Carrier.css'; // Assuming you have a separate CSS file for styling

const Carrier = () => {
  const [loads, setLoads] = useState([
    { id: 1, description: 'Load 1 Description' },
    { id: 2, description: 'Load 2 Description' }
    // ... more loads
  ]);

  const bookLoad = (loadId) => {
    console.log(`Booking load with ID: ${loadId}`);
    // Implement booking logic here
  };

  return (
    <div className="carrier">
      <h1>Available Loads</h1>
      <div className="load-list">
        {loads.map(load => (
          <div className="load-item" key={load.id}>
            <p>{load.description}</p>
            <button onClick={() => bookLoad(load.id)}>Book Load</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carrier;
