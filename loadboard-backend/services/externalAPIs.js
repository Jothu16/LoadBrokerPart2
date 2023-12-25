// externalAPIs.js

// This function simulates an API call to external load boards
function fetchLoadsFromExternalSources(origin, destination) {
    // Simulated data - replace this with actual API call logic in the future
    const mockData = [
        { id: 1, origin: 'California', destination: 'Texas', price: 1000 },
        { id: 2, origin: 'California', destination: 'Arizona', price: 600 },
        // Add more mock loads as needed
    ];

    // Filter loads based on origin and destination if provided
    const filteredLoads = mockData.filter(load => {
        return (!origin || load.origin === origin) && (!destination || load.destination === destination);
    });

    return filteredLoads;
}

module.exports = { fetchLoadsFromExternalSources };
