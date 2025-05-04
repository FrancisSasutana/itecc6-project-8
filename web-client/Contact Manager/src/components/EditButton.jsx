import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import EditPopUpForm from './EditPopUpForm';

function EditButton({ contact, refreshContacts}) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleSave = () => {
    refreshContacts()
    closeModal();
  };

  return (
    <>
      <button className="text-blue-600 hover:underline mr-2" onClick={openModal}>
        <FaEdit size={18} />
      </button>
      {isOpen && (
        <EditPopUpForm
          contact={contact}
          onClose={closeModal}
          onSave={handleSave}
        />
      )}
    </>
  );
}

export default EditButton;
