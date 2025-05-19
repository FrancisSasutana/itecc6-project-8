import { useState } from "react";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";

function SortsButton({ sortField, setSortField }) {
  const [isOpen, setIsOpen] = useState(false);
  const fields = ['name', 'phone', 'email', 'address', 'relationship', 'notes'];

  return (
    <div className="relative">
      <select
        id="sortField"
        value={sortField}
        onChange={(e) => setSortField(e.target.value)}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        className="appearance-none bg-white text-black font-semibold px-4 py-2 pr-8 rounded shadow cursor-pointer border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
      >
        <option value="">Default</option>
        {fields.map((field) => (
          <option key={field} value={field}>
            {field.charAt(0).toUpperCase() + field.slice(1)}
          </option>
        ))}
      </select>

      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-green-600">
        {isOpen ? <IoIosArrowDropup /> : <IoIosArrowDropdown />}
      </div>
    </div>
  );
}

export default SortsButton;
