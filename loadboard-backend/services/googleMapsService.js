// googleMapsService.js
const fetch = require('node-fetch');

async function getTrafficData(origin, destination) {
    const apiKey = process.env.[API_KEY_GOOGLE_MAPS];
    const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${apiKey}&departure_time=now&traffic_model=best_guess`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        // Parse and return relevant data
        return data;
    } catch (error) {
        console.error('Error fetching traffic data:', error);
        throw error;
    }
}

module.exports = { getTrafficData };
