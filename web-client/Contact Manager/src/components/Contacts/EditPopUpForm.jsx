import { useState } from 'react';
import axios from 'axios';

function EditPopUpForm({ contact, onClose, onSave }) {
  const [formData, setFormData] = useState({
    name: contact.name,
    phone: contact.phone,
    email: contact.email,
    address: contact.address,
    relationship: contact.relationship,
    notes: contact.notes,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:2468/contacts/${contact.id}`, formData)
      .then(() => {
        alert('Contact updated successfully!');
        onSave();
        onClose();
      })
      .catch((err) => {
        console.error('Error updating contact:', err);
        alert('Failed to update contact');
      });
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-[rgba(0,0,0,0.2)] bg-opacity-80 z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-sm border-t-4 border-green-500">
        <h2 className="text-xl font-semibold text-green-700 mb-4 text-center">Edit Contact</h2>
        <form onSubmit={handleSubmit}>
          {['name', 'phone', 'email', 'address', 'relationship', 'notes'].map((field) => (
            <div className="mb-3" key={field}>
              <label className="block mb-1 text-sm font-medium text-gray-700 capitalize">{field}</label>
              <input
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="w-full border border-green-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent text-sm"
              />
            </div>
          ))}
          <div className="flex justify-between mt-5">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1.5 text-green-600 border border-green-600 rounded-md hover:bg-green-50 transition text-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-1.5 rounded-md hover:bg-green-700 transition text-sm"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditPopUpForm;
