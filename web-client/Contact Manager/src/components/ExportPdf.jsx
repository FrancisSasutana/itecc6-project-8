import { jsPDF } from "jspdf";

function ExportPdf({ contacts }) {
  const exportToPdf = () => {
    const doc = new jsPDF();
    doc.setFontSize(12);
    doc.text("Contact List", 10, 10);

    contacts.forEach((contact, index) => {
      const y = 20 + (index * 10);
      doc.text(`${contact.name} | ${contact.phone} | ${contact.email}`, 10, y);
    });

    doc.save("contacts.pdf");
  };

  return (
    <button onClick={exportToPdf} className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-transform hover:scale-105">
      Export as PDF
    </button>
  );
}

export default ExportPdf;
