import React from 'react';

function AddPopUp({ onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.2)] flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-[90%] max-w-md text-center">
        <p className="mb-4 font-medium text-gray-700 text-lg">
          Are you sure you want to add this contact?
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={onConfirm}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
          >
            Yes
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddPopUp;
