function ExportCsv({ contacts }) {
  const handleExport = () => {
    const csvHeaders = ["Name", "Email", "Phone", "Address", "Relationship"];
    const csvRows = contacts.map(contact => [
      contact.name,
      contact.email,
      contact.phone,
      contact.address,
      contact.relationship,
    ]);

    const csvContent = [
      csvHeaders.join(","),
      ...csvRows.map(row => row.map(value => `"${value || ''}"`).join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "contacts.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={handleExport}
      className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-transform hover:scale-105"
    >
      Export as CSV
    </button>
  );
}

export default ExportCsv;
