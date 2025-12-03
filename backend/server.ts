import 'dotenv/config';
import express from 'express';
import { handleContact } from './api/route.js';

const app = express();
const port = 3001; // Choose a different port for the backend

app.use(express.json());

app.post('/api/contact', handleContact);

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
