import express from 'express';
import registers from '../src/models/registers.js';
const router = express.Router();

// Simulated user database
const users = [];

router.post('/register', async (req, res) => {
    const { username, email, password, confirmpassword } = req.body;
    try {
        const userExists = await registers.findOne({ username }).exec();
        if (userExists) {
            return res.status(400).send('User already exists');
        }
        const user = new registers({ username, email, password, confirmpassword });
        await user.save();
        req.session.user = { username };
        res.redirect('/');
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).send('Error registering user');
    }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await registers.findOne({ username, password }).exec();
        if (!user) {
            return res.status(400).send('Invalid credentials');
        }
        req.session.user = { username };
        res.redirect('/');
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).send('Error logging in user');
    }
});

router.post('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

export default router;
