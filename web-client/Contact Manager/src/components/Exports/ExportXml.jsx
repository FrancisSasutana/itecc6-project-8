function ExportXml({ contacts }) {
  const exportToXml = () => {
    const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
    const xmlBody = contacts
      .map(contact => `
        <contact>
          <name>${contact.name}</name>
          <phone>${contact.phone}</phone>
          <email>${contact.email}</email>
          <address>${contact.address}</address>
          <relationship>${contact.relationship}</relationship>
        </contact>
      `)
      .join("");

    const blob = new Blob([`${xmlHeader}<contacts>${xmlBody}</contacts>`], {
      type: "application/xml",
    });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "contacts.xml";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <button onClick={exportToXml} className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700  transition-transform hover:scale-105">
      Export as XML
    </button>
  );
}

export default ExportXml;
