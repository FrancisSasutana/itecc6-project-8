import { Router } from 'express';
import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();
const router = Router();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});


router.post('/', (req, res) => {
  const { name, phone, email, address, relationship, notes } = req.body;
  if (!name) return res.status(400).json({ error: 'Name is required' });

  const sql = 'INSERT INTO contacts (name, phone, email, address, relationship, notes) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(sql, [name, phone, email, address, relationship, notes], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Contact added successfully' });
  });
});

export default router;
