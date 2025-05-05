import { NavLink } from 'react-router-dom';
import { FaTachometerAlt,FaAddressBook, FaPlus, FaFileExport } from 'react-icons/fa';
import { IoMdContact } from "react-icons/io";

function Sidebar({ isOpen }) {
  const navLinkClasses = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded hover:bg-blue-500 ${
      isActive ? 'bg-green-800 font-semibold' : ''
    }`;

  return (
    <aside className={`h-full p-4 bg-green-600 text-white transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'}`}>

      <div className={`flex flex-col items-center mb-8 transition-all duration-300 ${isOpen ? 'px-0' : 'px-4'}`}>
        <IoMdContact className="text-white" size={isOpen ? 70 : 36} />
        {isOpen && (
          <h1 className="text-2xl font-extrabold mt-2 text-center">
        Contact Manager
          </h1>
        )}
      </div>

      <nav className="flex flex-col gap-2">
        <NavLink to="/" className={navLinkClasses}>
          <FaTachometerAlt size={20} />
          {isOpen && <span>Dashboard</span>}
        </NavLink>
        <NavLink to="/contacts" className={navLinkClasses}>
          <FaAddressBook size={20} />
          {isOpen && <span>Contacts</span>}
        </NavLink>
        <NavLink to="/addContact" className={navLinkClasses}>
          <FaPlus size={20} />
          {isOpen && <span>Add Contact</span>}
        </NavLink>
        <NavLink to="/exports" className={navLinkClasses}>
          <FaFileExport size={20} />
          {isOpen && <span>Exports</span>}
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
