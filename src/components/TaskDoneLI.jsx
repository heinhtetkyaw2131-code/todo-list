function TaskDoneLI({ setTasksDone, tasksDone, item, name, dueDate }) {
  const deleteItem = () => {
    const newArr = tasksDone.filter((obj) => obj.key !== item.key);
    setTasksDone(newArr);
  };
  return (
    <li className="shadow-xl flex w-full justify-between items-center my-3 bg-gray-400 text-white p-5 rounded-2xl">
      <div>{name}</div> <div>{dueDate}</div>
      <div className="flex w-1/4 justify-end">
        <button onClick={deleteItem} className="bg-red-500 px-2 py-1 text-white rounded-lg  shadow-xl cursor-pointer">
          Delete
        </button>
      </div>
    </li>
  );
}

export default TaskDoneLI;
