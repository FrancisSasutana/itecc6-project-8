import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import SortsButton from '../components/SortsButton';
import PaginatedContacts from '../components/PaginatedContacts';

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortField, setSortField] = useState('');
  
  const fetchContacts = () => {
    axios.get('http://localhost:2468/contacts')
      .then((res) => {
        setContacts(res.data);
      })
      .catch((err) => {
        console.error('Error getting contacts:', err);
      });
  };

  useEffect(() => {
    fetchContacts();
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
    <div className="flex flex-col items-center justify-start mt-[-1rem] w-full px-4">
      <h1 className="text-green-800 text-3xl font-bold mb-2">Contacts</h1>
  
      {/* Flex row for Search and Sort */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full max-w-3xl gap-4 mb-4">
        <SearchBar onSearch={handleSearch} />
        <SortsButton sortField={sortField} setSortField={setSortField} />
      </div>
  
      <PaginatedContacts
        contacts={filteredContacts}
        itemsPerPage={5}
        refreshContacts={fetchContacts}
        sortField={sortField}
      />
    </div>
  );
}
export default Contacts;
