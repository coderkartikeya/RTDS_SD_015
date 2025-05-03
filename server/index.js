import dotenv from 'dotenv';
import http from 'http';
import { app } from './app.js';
import connectDb from './db/index.js';

dotenv.config();
const port = process.env.PORT || 3001;
const server = http.createServer(app);

connectDb()
  .then(() => {
    server.listen(port, () => {
      console.log(`🚀 Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB Connection Error:', err);
  });
