// Example schema, modify as needed
const loadSchema = new mongoose.Schema({
    origin: String,
    destination: String,
    price: Number,
    carrier: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    // Add other relevant fields
});

module.exports = mongoose.model('Load', loadSchema);
