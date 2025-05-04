import React, { useState } from 'react';
import ContactsTable from './ContactsTable';
import ReactPaginate from 'react-paginate';

function PaginatedContacts({ contacts, itemsPerPage, refreshContacts }) {
  const [currentPage, setCurrentPage] = useState(0);

  const offset = currentPage * itemsPerPage;
  const currentItems = contacts.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(contacts.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <ContactsTable contacts={currentItems} refreshContacts={refreshContacts} />
      <ReactPaginate
        previousLabel="«"
        nextLabel="»"
        breakLabel="..."
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName="flex mt-6 space-x-1"
        pageLinkClassName="px-3 py-1 rounded-md border border-gray-300 text-gray-700 hover:bg-green-100"
        activeLinkClassName="bg-green-600 text-white border-green-600"
        disabledLinkClassName="opacity-50 cursor-not-allowed"
      />
    </div>
  );
}

export default PaginatedContacts;
