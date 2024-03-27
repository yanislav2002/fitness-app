import { Router } from 'express';


const router = Router();

router.get('/', (req, res) => {
    res.json('Hello from backend!');
});

export default router;