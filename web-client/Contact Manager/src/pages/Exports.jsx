import ExportCsv from "../components/ExportCsv";
import ExportJson from "../components/ExportJson";
import ExportExcel from "../components/ExportExcel";
import ExportPdf from "../components/ExportPdf";
import ExportXml from "../components/ExportXml";

function Exports({ contacts }) {
  return (
    <div className="flex flex-col items-center justify-start mt-[-1rem] w-full">
      <h1 className="text-green-800 text-3xl font-bold mb-10">Exports</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ExportCsv contacts={contacts} />
        <ExportJson contacts={contacts} />
        <ExportXml contacts={contacts} />
        <ExportPdf contacts={contacts} />
        <ExportExcel contacts={contacts} />
      </div>
    </div>
  );
}

export default Exports;
