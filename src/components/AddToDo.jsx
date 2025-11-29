import { useState } from "react";
import { storeData } from "./utils/handleData";

function AddToDo({ setTodoList, todoList }) {
  const [inputName, setInputName] = useState("");
  const [inputDate, setInputDate] = useState("");

  const addTodo = () => {
    if (inputName === "" || inputDate === "") {
      alert("Please fill out both fields.");
      return;
    }

    const newArr = [
      ...todoList,
      { name: inputName, dueDate: inputDate, key: crypto.randomUUID() },
    ];
    newArr.reverse();
    setTodoList(newArr);

    storeData("todoList", newArr);

    setInputDate("");
    setInputName("");
  };
  return (
    // <div className="m-auto w-160 flex items-center justify-between my-10">
    //   <input placeholder="Add todo" className="w-80 shadow-xl h-10 px-2" />
    //   <input type="date" className="w-40 px-2 py-2 shadow-xl" />
    //   <button className="bg-blue-500 p-2 text-white rounded-lg  shadow-xl cursor-pointer">Add To Do</button>
    // </div>
    <div className="mx-auto w-full max-w-4xl flex flex-col sm:flex-row gap-4 items-center justify-center sm:justify-between px-4 my-10">
      <input
        value={inputName}
        onChange={(event) => {
          setInputName(event.target.value);
        }}
        placeholder="Add todo"
        className="w-full sm:w-80 lg:w-96 shadow-xl h-12 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        value={inputDate}
        onChange={(event) => {
          setInputDate(event.target.value);
        }}
        type="date"
        className="w-full sm:w-48 shadow-xl h-12 px-4 rounded-lg border border-gray-300"
      />
      <button
        onClick={addTodo}
        className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 active:scale-95 text-white font-medium px-8 py-3 rounded-lg shadow-xl transition k"
      >
        Add To Do
      </button>
    </div>
  );
}

export default AddToDo;
