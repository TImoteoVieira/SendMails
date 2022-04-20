import 'dotenv/config';
import express from 'express';
import UserControllers from './app/controllers/UserControllers';

const app = express();

app.use(express.json());

app.post('/users', UserControllers.store)

app.listen(3333, () => {
    console.log('Server Up')
});