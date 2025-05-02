import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import Contacts from './pages/Contacts.jsx';
import AddContact from './pages/AddContact.jsx';
import Sidebar from './components/Sidebar.jsx';
import BurgerMenu from './components/BurgerMenu.jsx';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen">

      <Sidebar isOpen={isSidebarOpen} />

      <div className="flex-1 flex flex-col">

        <div className="p-4 flex justify-start items-center">
          <BurgerMenu toggleSidebar={() => setIsSidebarOpen(prev => !prev)} isSidebarOpen={isSidebarOpen} />
        </div>

        <div className="p-6 overflow-auto flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/addContact" element={<AddContact />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
