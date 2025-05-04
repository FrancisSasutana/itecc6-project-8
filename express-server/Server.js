import express from 'express';
import cors from 'cors';
import ViewContacts from './Routes/ViewContacts.js';
import AddContact from './Routes/AddContact.js';
import EditContact from './Routes/EditContact.js';

const app = express();
const PORT = 2468;

app.use(cors());
app.use(express.json());

app.use('/contacts', ViewContacts);
app.use('/contacts', AddContact);
app.use('/contacts', EditContact);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
