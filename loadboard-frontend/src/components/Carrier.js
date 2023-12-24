import React, { useState } from 'react';

const Carrier = () => {
  const [loads, setLoads] = useState([
    // Sample data. Replace with real data from your backend.
    { id: 1, description: 'Load 1 Description' },
    { id: 2, description: 'Load 2 Description' }
    // Add more loads as needed
  ]);

  const bookLoad = (loadId) => {
    console.log(`Booking load with ID: ${loadId}`);
    // Implement the booking logic here
  };

  return (
    <div>
      <h1>Available Loads</h1>
      {loads.map(load => (
        <div key={load.id}>
          <p>{load.description}</p>
          <button onClick={() => bookLoad(load.id)}>Book Load</button>
        </div>
      ))}
    </div>
  );
}

export default Carrier;
