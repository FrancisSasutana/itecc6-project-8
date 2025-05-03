import SearchBar from "../components/SearchBar";

function Contacts() {
  return (
    <div className="flex flex-col items-center justify-start mt-[-1rem]">
      <h1 className="text-green-800 text-3xl font-bold mb-2">Contacts</h1>
      <SearchBar />
    </div>
  );
}

export default Contacts;
