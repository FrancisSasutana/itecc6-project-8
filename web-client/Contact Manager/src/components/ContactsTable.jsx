import React from 'react';
import EditButton from './EditButton';

function ContactsTable({ contacts, refreshContacts }) {

  return (
    <div>
      <div className="w-full max-w-5xl mt-4 overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300 text-sm">
          <thead className="bg-green-400">
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Phone</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Address</th>
              <th className="border px-4 py-2">Relationship</th>
              <th className="border px-4 py-2">Notes</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{contact.name}</td>
                <td className="border px-4 py-2">{contact.phone}</td>
                <td className="border px-4 py-2">{contact.email}</td>
                <td className="border px-4 py-2">{contact.address}</td>
                <td className="border px-4 py-2">{contact.relationship}</td>
                <td className="border px-4 py-2">{contact.notes}</td>
                <td className="border px-4 py-2">
                  <EditButton contact={contact} refreshContacts={refreshContacts} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ContactsTable;
