import { FaBars, FaTimes } from 'react-icons/fa';

function BurgerMenu({ toggleSidebar, isSidebarOpen }) {
  return (
    <button
      onClick={toggleSidebar}
      className="text-green-800 p-2 rounded hover:bg-green-100 transition"
    >
      {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
    </button>
  );
}

export default BurgerMenu;
