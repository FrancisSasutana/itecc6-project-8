import React, { useState } from 'react';
import DeletePopUp from './DeletePopUp';
import axios from 'axios';
import { FaTrash } from 'react-icons/fa';

function DeleteButton({ contactId, refreshContacts }) {
  const [showPopUp, setShowPopUp] = useState(false);

  const handleDelete = () => {
    axios
      .delete(`http://localhost:2468/contacts/${contactId}`)
      .then(() => {
        alert('Contact deleted');
        refreshContacts();
      })
      .catch((err) => {
        console.error('Delete error:', err);
        alert('Failed to delete contact');
      })
      .finally(() => setShowPopUp(false));
  };

  return (
    <>
      <button
        onClick={() => setShowPopUp(true)}
        className="ml-2 text-red-600 hover:text-red-800"
        title="Delete"
      >
        <FaTrash size={16} />
      </button>
      {showPopUp && (
        <DeletePopUp onConfirm={handleDelete} onCancel={() => setShowPopUp(false)} />
      )}
    </>
  );
}

export default DeleteButton;
