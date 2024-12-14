import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use('/users', userRoutes);

app.listen(3001, () => console.log('Raw SQL app running on http://localhost:3001'));
