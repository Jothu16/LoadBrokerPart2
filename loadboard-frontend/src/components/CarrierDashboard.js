import React, { useState } from 'react';
import './CarrierDashboard.css'; // Import the CSS file

const CarrierDashboard = () => {
  // Sample state for available loads
  const [loads, setLoads] = useState([
    {
      id: 1,
      description: 'Load 1',
      rate: 1000,
      miles: 300,
      origin: 'City A',
      destination: 'City B',
      loadType: 'Refrigerated',
      weight: '20,000 lbs',
      pickupWindow: '8 AM - 12 PM',
      deliveryWindow: '2 PM - 6 PM',
      estimatedMilesToPickup: 50,
      company: 'Company XYZ',
      notes: 'Handle with care, fragile items.'
    },
    {
      id: 2,
      description: 'Load 2',
      rate: 1500,
      miles: 500,
      origin: 'City C',
      destination: 'City D',
      loadType: 'Dry Goods',
      weight: '15,000 lbs',
      pickupWindow: '9 AM - 1 PM',
      deliveryWindow: '3 PM - 7 PM',
      estimatedMilesToPickup: 75,
      company: 'Company ABC',
      notes: 'Load includes perishable food items.'
    }
    // ... other loads
  ]);

  // State for origin and destination selection
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  // List of states for dropdown options (simplified for example)
  const states = ['California', 'Texas', 'New York', 'Florida', 'Illinois'];

    // Sample state for currently booked loads
  const [bookedLoads, setBookedLoads] = useState([
    // ... sample booked loads ...
  ]);

  // Function to handle origin change
  const handleOriginChange = (e) => {
    setOrigin(e.target.value);
  };

  // Function to handle destination change
  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  // Function to book a load
  const bookLoad = (loadId) => {
    console.log(`Booking load with ID: ${loadId}`);
    // Implement the booking logic here
  };

  // Function to calculate profit per mile and estimated gas usage
  const calculateDetails = (load) => {
    const profitPerMile = load.rate / load.miles;
    const estimatedGasUsage = load.miles / 10; // Example calculation
    return { profitPerMile, estimatedGasUsage };
  };

  return (
    <div className="carrier-dashboard">
      <h2>Carrier Dashboard</h2>

      {/* Widget to display available loads */}
      <div className="dashboard-widget">
        <h3>Available Loads</h3>
        <div className="loads-list">
          {loads.map(load => {
            const { profitPerMile, estimatedGasUsage } = calculateDetails(load);
            return (
              <div key={load.id} className="load-item">
                <p>Description: {load.description}</p>
                <p>Rate: ${load.rate}</p>
                <p>Miles: {load.miles}</p>
                <p>Profit per Mile: ${profitPerMile.toFixed(2)}</p>
                <p>Estimated Gas Usage: {estimatedGasUsage} gallons</p>
                <p>Origin: {load.origin}</p>
                <p>Destination: {load.destination}</p>
                <p>Load Type: {load.loadType}</p>
                <p>Weight: {load.weight}</p>
                <p>Pickup Window: {load.pickupWindow}</p>
                <p>Delivery Window: {load.deliveryWindow}</p>
                <p>Estimated Miles to Pickup: {load.estimatedMilesToPickup}</p>
                <p>Posted by: {load.company}</p>
                <p>Notes: {load.notes}</p>
                <button onClick={() => bookLoad(load.id)}>Book Load</button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dropdown for selecting origin */}
      <div className="dashboard-widget">
        <h3>Select Origin</h3>
        <select value={origin} onChange={handleOriginChange}>
          <option value="">Select a State</option>
          {states.map(state => (
            <option key={state} value={state}>{state}</option>
          ))}
        </select>
      </div>

      {/* Dropdown for selecting destination */}
      <div className="dashboard-widget">
        <h3>Select Destination</h3>
        <select value={destination} onChange={handleDestinationChange}>
          <option value="">Select a State</option>
          {states.map(state => (
            <option key={state} value={state}>{state}</option>
          ))}
        </select>
      </div>

      {/* Widget for Currently Booked Loads */}
      <div className="dashboard-widget">
        <h3>Currently Booked</h3>
        <div className="loads-list">
          {bookedLoads.map(load => (
            <div key={load.id} className="load-item">
              {/* Display details of booked loads */}
              {/* ... */}
            </div>
          ))}
        </div>
      </div>

      {/* Widget to display available loads */}
      <div className="dashboard-widget">
        <h3>Available Loads</h3>
        <div className="loads-list">
          {loads.map(load => {
            const { profitPerMile, estimatedGasUsage } = calculateDetails(load);
            return (
              <div key={load.id} className="load-item">
                {/* Display details of available loads */}
                {/* ... */}
                <button onClick={() => bookLoad(load.id)}>Book Load</button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Additional widgets for Upcoming Trips, Recent Bookings, Earnings Overview, Notifications */}
      {/* ... */}
    </div>
  );
}

export default CarrierDashboard;