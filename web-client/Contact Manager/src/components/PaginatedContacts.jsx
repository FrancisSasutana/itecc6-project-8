import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import ContactsTable from './ContactsTable';

function PaginatedContacts({ contacts, itemsPerPage = 5 }) {
  const [currentPage, setCurrentPage] = useState(0);

  const offset = currentPage * itemsPerPage;
  const currentItems = contacts.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(contacts.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  useEffect(() => {
    setCurrentPage(0); // Reset to first page when filtered contacts change
  }, [contacts]);

  return (
    <div className="w-full flex flex-col items-center">
      <ContactsTable contacts={currentItems} />
      <ReactPaginate
        previousLabel="«"
        nextLabel="»"
        breakLabel="..."
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName="flex mt-6 space-x-1"
        pageClassName="text-sm"
        pageLinkClassName="px-3 py-1 rounded-md border border-gray-300 text-gray-700 hover:bg-green-100 hover:text-green-700 transition-colors duration-150"
        previousLinkClassName="px-3 py-1 rounded-md border border-gray-300 text-gray-700 hover:bg-green-100"
        nextLinkClassName="px-3 py-1 rounded-md border border-gray-300 text-gray-700 hover:bg-green-100"
        activeLinkClassName="bg-green-600 text-white border-green-600"
        breakLinkClassName="px-3 py-1 text-gray-400"
        disabledLinkClassName="opacity-50 cursor-not-allowed"
      />
    </div>
  );
}

export default PaginatedContacts;
