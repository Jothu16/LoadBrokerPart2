const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String, // Consider using bcrypt for hashing
    role: {
        type: String,
        enum: ['Carrier', 'Broker', 'Shipper', 'Admin'],
    },
    // Add other relevant fields
});

module.exports = mongoose.model('User', userSchema);
