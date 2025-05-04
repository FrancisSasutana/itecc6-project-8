import DashboardCards from "../components/DashboardCards";

function Dashboard({ contacts }) {
  return (
    <div className="flex flex-col items-center justify-start mt-[-1rem] w-full">
      <h1 className="text-green-800 text-3xl font-bold mb-15">Dashboard</h1>
      <DashboardCards contacts={contacts} />
    </div>
  );
}

export default Dashboard;
