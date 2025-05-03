import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import ContactsTable from '../components/ContactsTable';

function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:2468/contacts')
      .then((res) => {
        setContacts(res.data);
      })
      .catch((err) => {
        console.error('Error getting contacts:', err);
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-start mt-[-1rem] w-full">
      <h1 className="text-green-800 text-3xl font-bold mb-2">Contacts</h1>
      <SearchBar />
      <ContactsTable contacts={contacts} />
    </div>
  );
}

export default Contacts;
