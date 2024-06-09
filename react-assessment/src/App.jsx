import AdminHomeSector from "./components/AdminHomeSector";

function App() {
  return (
    <div>
      <div className="text-center py-5">
        <h1 className="text-4xl font-bold pb-5">Generation Thailand</h1>
        <h1 className="text-4xl font-bold">React - Assessment</h1>
      </div>
      <div className="flex gap-5 justify-around mt-10">
        <button className="bg-gray-500 text-white px-8 py-2 rounded-md hover:bg-gray-600 hover:ring hover:ring-gray-300">
          User Home Sector
        </button>
        <button className="bg-gray-500 text-white px-8 py-2 rounded-md hover:bg-gray-600 hover:ring hover:ring-gray-300">
          Admin Home Sector
        </button>
      </div>
      <div>
        <AdminHomeSector />
      </div>
    </div>
  );
}

export default App;
