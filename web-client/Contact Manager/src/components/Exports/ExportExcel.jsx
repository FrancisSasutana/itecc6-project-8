import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

function ExportExcel({ contacts }) {
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(contacts);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Contacts");
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(blob, "contacts.xlsx");
  };

  return (
    <button onClick={exportToExcel} className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-transform hover:scale-105">
      Export as Excel
    </button>
  );
}

export default ExportExcel;
