import React, { useState } from 'react';
import AddPopUp from './AddPopUp';
import axios from 'axios';

function AddForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    relationship: '',
    notes: ''
  });

  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.name === 'name') setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) {
      setError('Name is required');
      return;
    }
    setShowPopup(true);
  };

  const confirmAdd = () => {
    axios
      .post('http://localhost:2468/contacts', form)
      .then(() => {
        alert('Contact added!');
        setForm({ name: '', phone: '', email: '', address: '', relationship: '', notes: '' });
        setShowPopup(false);
      })
      .catch((err) => {
        console.error('Error:', err);
        alert('Failed to add contact.');
      });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl p-4 space-y-4">
      {['name', 'phone', 'email', 'address', 'relationship', 'notes'].map((field) => (
        <div key={field} className="flex flex-col">
          <label className="capitalize font-medium">{field}</label>
          <input
            name={field}
            value={form[field]}
            onChange={handleChange}
            className={`border px-2 py-1 rounded ${
              field === 'name' && error ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {field === 'name' && error && (
            <span className="text-red-600 text-sm">{error}</span>
          )}
        </div>
      ))}
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Add Contact
      </button>

      {showPopup && (
        <AddPopUp onConfirm={confirmAdd} onCancel={() => setShowPopup(false)} />
      )}
    </form>
  );
}

export default AddForm;
