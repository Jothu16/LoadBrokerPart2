import React, { useState, useEffect } from 'react';
import { fetchLoads, bookLoad } from '../services/api';

const LoadList = () => {
    const [loads, setLoads] = useState([]);

    useEffect(() => {
        const getLoads = async () => {
            try {
                const data = await fetchLoads();
                setLoads(data);
            } catch (error) {
                console.error('Failed to fetch loads', error);
            }
        };

        getLoads();
    }, []);

    const handleBooking = async (loadId) => {
        // Replace 'carrierId' with the actual carrier ID from your context or state
        const carrierId = 'yourCarrierId'; 
        try {
            await bookLoad(loadId, carrierId);
            console.log(`Load ${loadId} booked successfully`);
            // Optionally, update the UI or state to reflect the booked load
        } catch (error) {
            console.error('Booking failed', error);
        }
    };

    return (
        <div>
            {loads.length > 0 ? (
                <ul>
                    {loads.map(load => (
                        <li key={load.id}>
                            Load Name: {load.name} - Load ID: {load.id}
                            <button onClick={() => handleBooking(load.id)}>Book Load</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No loads available.</p>
            )}
        </div>
    );
};

export default LoadList;
