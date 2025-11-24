function ListItem({setTodoList, item, todoList, name, dueDate }) {
  const id = item.key;

  const deleteItem = () => {
    const newArr = todoList.filter(obj => obj.key !== id);
    setTodoList(newArr);
  }

  return (
    <li className="shadow-xl flex w-full justify-between items-center my-3 bg-gray-400 text-white p-5 rounded-2xl">
      <div>{name}</div> <div>{dueDate}</div>
      <div className="flex w-1/4 justify-between">
        <button className="bg-blue-500 px-2 py-1 text-white rounded-lg  shadow-xl cursor-pointer">
          Done
        </button>
        <button onClick={() => {
          deleteItem(id)
        }} className="bg-red-500 px-2 py-1 text-white rounded-lg  shadow-xl cursor-pointer">
          Delete
        </button>
      </div>
    </li>
  );
}

export default ListItem;
