import "./AddToDo.css";

function AddToDo() {
  return (
    <div class="m-auto w-120 flex items-center justify-between">
      <input placeholder="Add todo" class="w-50 shadow-xl h-10 px-2" />
      <input type="date" class="w-40 px-2 py-2 shadow-xl" />
      <button class="bg-blue-500 p-2 text-white rounded-lg  shadow-xl">Add To Do</button>
    </div>
  );
}

export default AddToDo;
