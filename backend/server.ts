import 'dotenv/config';
import express from 'express';
import { POST } from './api/contact/route.js';

const app = express();
const port = 3001; // Choose a different port for the backend

app.use(express.json());

app.post('/api/contact', async (req, res) => {
  try {
    // Adapt the Express req object to a Web Request-like object for the POST function
    const adaptedReq = {
      json: async () => req.body,
      // Add other properties if your POST function uses them, e.g., headers, url
      headers: req.headers,
      url: req.url
    } as Request;
    
    const response = await POST(adaptedReq);
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    console.error('Error handling contact request:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
