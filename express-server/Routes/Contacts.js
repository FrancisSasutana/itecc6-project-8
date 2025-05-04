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

router.get('/', (req, res) => {
  db.query('SELECT * FROM contacts', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
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

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name, phone, email, address, relationship, notes } = req.body;

  const sql = `
    UPDATE contacts 
    SET name = ?, phone = ?, email = ?, address = ?, relationship = ?, notes = ? 
    WHERE id = ?
  `;

  db.query(
    sql,
    [name, phone, email, address, relationship, notes, id],
    (err, result) => {
      if (err) {
        console.error('Error updating contact:', err);
        return res.status(500).json({ message: 'Failed to update contact' });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Contact not found' });
      }

      res.status(200).json({ message: 'Contact updated successfully' });
    }
  );
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM contacts WHERE id = ?', [id], (err, result) => {
    if (err) return res.status(500).json({ message: 'Delete failed' });
    res.json({ message: 'Contact deleted' });
  });
});

export default router;
