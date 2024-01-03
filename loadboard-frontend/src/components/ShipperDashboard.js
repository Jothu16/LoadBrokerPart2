import React, { useState } from 'react';
import './ShipperDashboard.css'; // Import the CSS file


const ShipperDashboard = () => {
  const [shipments, setShipments] = useState([
    { id: 1, description: 'Shipment 1' },
    { id: 2, description: 'Shipment 2' }
    // ... other shipments
  ]);

  // Function to add a new shipment
  const addShipment = () => {
    // Logic to add a new shipment
    // This could open a modal or a new form
  };

  // Function to edit a shipment
  const editShipment = (shipmentId) => {
    // Logic to edit a shipment
    // This could open a modal with the shipment's details for editing
  };

  // Function to delete a shipment
  const deleteShipment = (shipmentId) => {
    // Logic to delete a shipment
    // Confirm before deleting
    if (window.confirm(`Are you sure you want to delete shipment ${shipmentId}?`)) {
      setShipments(shipments.filter(shipment => shipment.id !== shipmentId));
    }
  };

  return (
    <div className="shipper-dashboard">
      <h2>Shipper Dashboard</h2>
      <button onClick={addShipment}>Create New Shipment</button>
      <div className="shipments-list">
        {shipments.map(shipment => (
          <div key={shipment.id} className="shipment-item">
            <p>{shipment.description}</p>
            <button onClick={() => editShipment(shipment.id)}>Edit</button>
            <button onClick={() => deleteShipment(shipment.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShipperDashboard;
