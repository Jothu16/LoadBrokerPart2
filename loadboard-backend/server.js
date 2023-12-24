require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

const userRoutes = require('./routes/userRoutes');
const loadRoutes = require('./routes/loadRoutes');

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/loads', loadRoutes);

app.get('/', (req, res) => {
  res.send('MRI Transportation Load Board Backend');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
