function TodoList() {
  return (
    <section className="flex flex-col mb-10 w-150 mx-auto">
      <h2 className="text-2xl">Tasks to do (3)</h2>
      <ul className="overflow-y-auto shadow-xl px-3 py-1 rounded-lg mt-5 h-88">
        <li className="shadow-xl flex w-full justify-between items-center my-3 bg-gray-400 text-white p-5 rounded-2xl">
          <div>Go to the market </div> <div>02/03/2025</div>{" "}
          <div className="flex w-1/4 justify-between">
            <button className="bg-blue-500 px-2 py-1 text-white rounded-lg  shadow-xl cursor-pointer">
              Done
            </button>
            <button className="bg-red-500 px-2 py-1 text-white rounded-lg  shadow-xl cursor-pointer">
              Delete
            </button>
          </div>
        </li>
        <li className="shadow-xl flex w-full justify-between items-center my-3 bg-gray-400 text-white p-5 rounded-2xl">
          <div>Go to the market </div> <div>02/03/2025</div>
          <div className="flex w-1/4 justify-between">
            <button className="bg-blue-500 px-2 py-1 text-white rounded-lg  shadow-xl cursor-pointer">
              Done
            </button>
            <button className="bg-red-500 px-2 py-1 text-white rounded-lg  shadow-xl cursor-pointer">
              Delete
            </button>
          </div>
        </li>
        <li className="flex w-full justify-between items-center my-3 bg-gray-400 text-white p-5 rounded-2xl shadow-xl">
          <div>Go to the market </div> <div>02/03/2025</div>
          <div className="flex w-1/4 justify-between">
            <button className="bg-blue-500 px-2 py-1 text-white rounded-lg  shadow-xl cursor-pointer">
              Done
            </button>
            <button className="bg-red-500 px-2 py-1 text-white rounded-lg  shadow-xl cursor-pointer">
              Delete
            </button>
          </div>
        </li>
        <li className="flex w-full justify-between items-center my-3 bg-gray-400 text-white p-5 rounded-2xl shadow-xl">
          <div>Go to the market </div> <div>02/03/2025</div>
          <div className="flex w-1/4 justify-between">
            <button className="bg-blue-500 px-2 py-1 text-white rounded-lg  shadow-xl cursor-pointer">
              Done
            </button>
            <button className="bg-red-500 px-2 py-1 text-white rounded-lg  shadow-xl cursor-pointer">
              Delete
            </button>
          </div>
        </li>
        <li className="flex w-full justify-between items-center my-3 bg-gray-400 text-white p-5 rounded-2xl shadow-xl">
          <div>Go to the market </div> <div>02/03/2025</div>
          <div className="flex w-1/4 justify-between">
            <button className="bg-blue-500 px-2 py-1 text-white rounded-lg  shadow-xl cursor-pointer">
              Done
            </button>
            <button className="bg-red-500 px-2 py-1 text-white rounded-lg  shadow-xl cursor-pointer">
              Delete
            </button>
          </div>
        </li>
        <li className="flex w-full justify-between items-center my-3 bg-gray-400 text-white p-5 rounded-2xl shadow-xl">
          <div>Go to the market </div> <div>02/03/2025</div>
          <div className="flex w-1/4 justify-between">
            <button className="bg-blue-500 px-2 py-1 text-white rounded-lg  shadow-xl cursor-pointer">
              Done
            </button>
            <button className="bg-red-500 px-2 py-1 text-white rounded-lg  shadow-xl cursor-pointer">
              Delete
            </button>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default TodoList;
