const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User'); // Adjust the path as necessary
const router = express.Router();

const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = new User({
            username: req.body.username,
            password: hashedPassword,
            role: req.body.role,
        });
        const savedUser = await user.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/login', async (req, res) => {
    const user = await User.findOne({ username: req.body.username });
    if (user == null) {
        return res.status(400).send('Cannot find user');
    }

    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
            res.header('auth-token', token).send(token);
        } else {
            res.send('Not Allowed');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
