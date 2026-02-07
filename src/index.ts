import express from 'express';
import 'reflect-metadata';
import * as dotenv from 'dotenv';
import { AppDataSource } from './data-source';

dotenv.config({ path: 'app.env' });

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((error) => {
    console.error('Error during database initialization:', error);
  });

app.get('/', (req, res) => {
  res.send('Hello, Docker + Express + TypeScript!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
