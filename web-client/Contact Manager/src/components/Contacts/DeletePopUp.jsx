function DeletePopUp({ onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-[rgba(0,0,0,0.2)] bg-opacity-40">
      <div className="bg-white p-4 rounded shadow-md w-72 text-center">
        <p className="mb-4">Are you sure you want to delete this contact?</p>
        <div className="flex justify-around">
          <button
            className="bg-red-500 text-white px-4 py-1 rounded"
            onClick={onConfirm}
          >
            Yes
          </button>
          <button
            className="bg-gray-300 px-4 py-1 rounded"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletePopUp;
