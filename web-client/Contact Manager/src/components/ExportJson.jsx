function ExportJson({ contacts }) {
  const handleExport = () => {
    const jsonContent = JSON.stringify(contacts, null, 2);
    const blob = new Blob([jsonContent], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "contacts.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={handleExport}
      className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-transform hover:scale-105"
    >
      Export as JSON
    </button>
  );
}

export default ExportJson;
