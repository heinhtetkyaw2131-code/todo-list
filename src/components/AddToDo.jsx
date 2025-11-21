import "./AddToDo.css";

function AddToDo() {
  return (
    <div className="m-auto w-160 flex items-center justify-between my-10">
      <input placeholder="Add todo" className="w-80 shadow-xl h-10 px-2" />
      <input type="date" className="w-40 px-2 py-2 shadow-xl" />
      <button className="bg-blue-500 p-2 text-white rounded-lg  shadow-xl cursor-pointer">Add To Do</button>
    </div>
  );
}

export default AddToDo;
