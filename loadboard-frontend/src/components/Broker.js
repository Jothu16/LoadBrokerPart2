import React, { useState } from 'react';

const Broker = () => {
  const [newLoad, setNewLoad] = useState('');
  const [loads, setLoads] = useState([]); // Placeholder for loads data

  const handleLoadSubmit = (event) => {
    event.preventDefault();
    // Add logic to post new load
    console.log(`New load posted: ${newLoad}`);
  };

  return (
    <div>
      <h1>Broker Dashboard</h1>
      <form onSubmit={handleLoadSubmit}>
        <input 
          type="text" 
          value={newLoad} 
          onChange={(e) => setNewLoad(e.target.value)}
          placeholder="Enter load details"
        />
        <button type="submit">Post Load</button>
      </form>

      {/* List of loads */}
      {loads.map(load => (
        <div key={load.id}>
          <p>{load.description} - Status: {load.status}</p>
        </div>
      ))}
    </div>
  );
}

export default Broker;
