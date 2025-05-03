import React from 'react';
import AddForm from '../components/AddForm';

function AddContact() {
  return (
    <div className="flex flex-col items-center justify-start mt-[-1rem] w-full">
      <h1 className="text-green-800 text-3xl font-bold mb-2">Add Contact</h1>
      <AddForm />
    </div>
  );
}

export default AddContact;
