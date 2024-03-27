import { Router } from 'express';
import homeController from './controllers/homeController.js';
import exerciseController from './controllers/exerciseController.js';
import userController from './controllers/userController.js';


const router = Router();

router.use('/', homeController);
router.use('/create-workout', exerciseController);
router.use('/users', userController);


export default router;

