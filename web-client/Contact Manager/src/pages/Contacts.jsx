import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import PaginatedContacts from '../components/PaginatedContacts';

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get('http://localhost:2468/contacts')
      .then((res) => {
        setContacts(res.data);
      })
      .catch((err) => {
        console.error('Error getting contacts:', err);
      });
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const filteredContacts = contacts.filter((contact) =>
    Object.values(contact).some((value) =>
      value?.toString().toLowerCase().includes(searchQuery)
    )
  );

  return (
    <div className="flex flex-col items-center justify-start mt-[-1rem] w-full">
      <h1 className="text-green-800 text-3xl font-bold mb-2">Contacts</h1>
      <SearchBar onSearch={handleSearch} />
      <PaginatedContacts contacts={filteredContacts} itemsPerPage={5} />
    </div>
  );
}
export default Contacts;
