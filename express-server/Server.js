import express from 'express';
import cors from 'cors';
import Contacts from './Routes/Contacts.js'
const app = express();
const PORT = 2468;

app.use(cors());
app.use(express.json());

app.use('/contacts', Contacts);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
