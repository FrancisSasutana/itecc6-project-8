import express from 'express';
import mysql2 from 'mysql2';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

const port = 2468;

app.get('/', (req, res) => {
  res.send('Contact Manager')
});

app.listen(port, () => {
  console.log(` Server listening on port ${port}`)
});