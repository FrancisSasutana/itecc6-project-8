import { NavLink } from 'react-router-dom';

function Sidebar() {
  const navLinkClasses = ({ isActive }) =>
    `block px-4 py-2 rounded hover:bg-blue-500 ${
      isActive ? 'bg-green-800 font-semibold' : ''
    }`;

  return (
    <aside className="w-64 bg-green-600 text-white h-full p-6">
      <h1 className="text-2xl font-bold mb-6">Contact Manager</h1>
      <nav className="flex flex-col gap-2">
        <NavLink to="/" className={navLinkClasses}>
          Dashboard
        </NavLink>
        <NavLink to="/contacts" className={navLinkClasses}>
          Contacts
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
