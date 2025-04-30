import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import Contacts from './pages/Contacts.jsx';
import AddContact from './pages/AddContact.jsx';
import Sidebar from './components/Sidebar.jsx';
function App() {

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-6 overflow-auto">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/addContact" element={<AddContact />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
