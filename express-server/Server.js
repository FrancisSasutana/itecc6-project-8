import express from 'express';
import cors from 'cors';
import ViewContacts from '../express-server/Routes/ViewContacts.js'
import AddContact from "./Routes/AddContact.js"

const app = express();
const PORT = 2468;

app.use(cors());
app.use(express.json());


app.use('/contacts', ViewContacts);
app.use('/contacts', AddContact);


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});