function DashboardCards({ contacts }) {
  const totalContacts = contacts.length;
  const withoutPhone = contacts.filter(c => !c.phone?.trim()).length;
  const withoutEmail = contacts.filter(c => !c.email?.trim()).length;
  const withoutAddress = contacts.filter(c => !c.address?.trim()).length;
  const uniqueRelationships = [...new Set(contacts.map(c => c.relationship).filter(r => r.trim() !== ''))].length;

  const cardStyle =
    "bg-white border border-green-300 shadow-md rounded-xl p-6 text-center transition-transform hover:scale-105";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      <div className={cardStyle}>
        <h2 className="text-green-700 text-lg font-semibold mb-2">Total Contacts</h2>
        <p className="text-2xl font-bold text-gray-800">{totalContacts}</p>
      </div>
      <div className={cardStyle}>
        <h2 className="text-green-700 text-lg font-semibold mb-2">Unique Relationships</h2>
        <p className="text-2xl font-bold text-gray-800">{uniqueRelationships}</p>
      </div>
      <div className={cardStyle}>
        <h2 className="text-green-700 text-lg font-semibold mb-2">Contacts Without Phone</h2>
        <p className="text-2xl font-bold text-gray-800">{withoutPhone}</p>
      </div>
      <div className={cardStyle}>
        <h2 className="text-green-700 text-lg font-semibold mb-2">Contacts Without Email</h2>
        <p className="text-2xl font-bold text-gray-800">{withoutEmail}</p>
      </div>
      <div className={cardStyle}>
        <h2 className="text-green-700 text-lg font-semibold mb-2">Contacts Without Address</h2>
        <p className="text-2xl font-bold text-gray-800">{withoutAddress}</p>
      </div>
    </div>
  );
}

export default DashboardCards;
