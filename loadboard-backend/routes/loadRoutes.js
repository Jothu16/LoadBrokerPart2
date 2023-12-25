const express = require('express');
const Load = require('../models/Load'); // Adjust the path as necessary
const { fetchLoadsFromExternalSources } = require('../services/externalAPIs'); // Adjust the path as necessary
const { calculateProfitability } = require('../services/routeCalculation'); // Adjust the path as necessary

const router = express.Router();

// Create a new load
router.post('/', async (req, res) => {
    const load = new Load({
        // Set the load properties based on your schema
        // e.g., name: req.body.name
    });

    try {
        const newLoad = await load.save();
        res.status(201).json(newLoad);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all loads
router.get('/', async (req, res) => {
    try {
        const loads = await Load.find();
        res.json(loads);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a single load by ID
router.get('/:id', getLoad, (req, res) => {
    res.json(res.load);
});

// Update a load
router.patch('/:id', getLoad, async (req, res) => {
    // Update load properties based on req.body
    // e.g., if (req.body.name != null) { res.load.name = req.body.name; }

    try {
        const updatedLoad = await res.load.save();
        res.json(updatedLoad);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a load
router.delete('/:id', getLoad, async (req, res) => {
    try {
        await res.load.remove();
        res.json({ message: 'Deleted Load' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Middleware to get load object by ID
async function getLoad(req, res, next) {
    let load;
    try {
        load = await Load.findById(req.params.id);
        if (load == null) {
            return res.status(404).json({ message: 'Cannot find load' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

    res.load = load;
    next();
}

// Route to fetch loads from external sources
router.get('/external', async (req, res) => {
    const { origin, destination } = req.query;
    try {
        const loads = await fetchLoadsFromExternalSources(origin, destination);
        res.json(loads);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/enhanced', (req, res) => {
    // Fetch loads (either from database or external sources)
    // For demonstration, let's assume we have an array of loads
    const loads = [
        // ... load data ...
    ];

    const enhancedLoads = loads.map(load => {
        return {
            ...load,
            profitability: calculateProfitability(load),
        };
    });

    res.json(enhancedLoads);
});

module.exports = router;
