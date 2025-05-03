import { FaSearch } from 'react-icons/fa';

function SearchBar() {
  return (
    <div className="flex items-center bg-white shadow-md px-4 py-2 rounded-lg w-full max-w-xl">
      <FaSearch className="text-gray-500 mr-3" />
      <input
        type="text"
        placeholder="Search contacts..."
        className="flex-1 text-black outline-none"
      />
    </div>
  );
}

export default SearchBar;
