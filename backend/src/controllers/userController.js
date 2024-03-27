import { Router } from 'express';


const router = Router();

router.get('/login', (req, res) => {
    res.json('Hello from login page!');
});

router.get('/register', (req, res) => {
    res.json('Hello from register page!');
});

router.post('/register', (req, res) => {
    console.log('Received registration data:', req.body);
    res.json('User registration endpoint');
});


export default router;