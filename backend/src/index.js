import express from "express";
import cors from 'cors';
import router from './routes.js';


const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use('/', router);

app.listen(9009, () => console.log('Connected to backend!'));