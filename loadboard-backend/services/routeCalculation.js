// routeCalculation.js
const { getTrafficData } = require('./services/googleMapsService'); // Adjust the path as necessary

async function calculateProfitability(load, truckSpecs, fuelCost) {
    // Example calculation - modify as needed
    const distance = load.distance; // Assuming distance is a property of 'load'
    const fuelEfficiency = truckSpecs.avgMPG; // Average miles per gallon
    const fuelExpense = (distance / fuelEfficiency) * fuelCost;

    try {
        const trafficData = await getTrafficData(load.origin, load.destination);
        // Extract traffic factor from trafficData, modify as needed
        const trafficFactor = extractTrafficFactor(trafficData);

        const timeFactor = distance * trafficFactor; // Traffic factor affects time taken
        const profit = load.price - fuelExpense;
        const profitabilityScore = profit / timeFactor; // Higher score means more profitable

        return profitabilityScore;
    } catch (error) {
        console.error('Error in calculating profitability:', error);
        throw error;
    }
}

function extractTrafficFactor(trafficData) {
    // Implement logic to extract traffic factor from trafficData
    // This could be based on duration, congestion level, etc.
    // Return a numerical value representing the traffic factor
    return 1; // Placeholder, modify as needed
}

module.exports = { calculateProfitability };

