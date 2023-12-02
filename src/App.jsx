import "./App.css";

function App() {
  return (
    <>
      <div className="w-3/4 m-4 p-4 mx-auto flex flex-col gap-2 items-center bg-slate-300 min-h-screen">
        <input className="border rounded py-1 px-2 outline-none border-1 border-gray-400" type="text" />
        <button className="px-3 py-2 bg-gray-800 rounded text-white">Add</button>
      </div>
    </>
  );
}

export default App;
