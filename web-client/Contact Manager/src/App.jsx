import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios'
import Dashboard from './pages/Dashboard.jsx';
import Contacts from './pages/Contacts.jsx';
import AddContact from './pages/AddContact.jsx';
import Exports from './pages/Exports.jsx';
import Sidebar from './components/Sidebar.jsx';
import BurgerMenu from './components/BurgerMenu.jsx';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:2468/contacts')
      .then(res => setContacts(res.data))
      .catch(err => console.error("Failed to fetch contacts:", err));
  }, []);

  return (
    <div className="flex h-screen">
      <Sidebar isOpen={isSidebarOpen} />

      <div className="flex-1 flex flex-col">
        <div className="pl-4 pt-2 pb-0">
          <BurgerMenu toggleSidebar={() => setIsSidebarOpen(prev => !prev)} isSidebarOpen={isSidebarOpen} />
        </div>

        <div className="flex-1 p-6 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard contacts={contacts} />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/addContact" element={<AddContact />} />
            <Route path="/exports" element={<Exports contacts={contacts} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
