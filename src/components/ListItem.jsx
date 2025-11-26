import {storeData} from './utils/handleData';

function ListItem({ tasksDone, setTodoList, item, todoList, setTasksDone }) {
  const id = item.key;

  const deleteItem = () => {
    const newArr = todoList.filter((obj) => obj.key !== id);
    setTodoList(newArr);
    storeData('todoList', todoList);
  };

  const finishTask = () => {
    const taskDone = todoList.filter((obj) => obj.key === id);
    console.log(taskDone);
    setTasksDone((prevTasks) => {
      return [...prevTasks, taskDone[0]];
    });
    storeData('tasksDone', tasksDone);
    deleteItem();
  };

  const name = item.name;
  const dueDate = item.dueDate;
  return (
    // <li className="shadow-xl flex w-full justify-between items-center my-3 bg-gray-400 text-white p-5 rounded-2xl">
    //   <div>{name}</div> <div>{dueDate}</div>
    //   <div className="flex w-1/4 justify-between">
    //     <button onClick={finishTask} className="bg-blue-500 px-2 py-1 text-white rounded-lg  shadow-xl cursor-pointer">
    //       Done
    //     </button>
    //     <button
    //       onClick={() => {
    //         deleteItem(id);
    //       }}
    //       className="bg-red-500 px-2 py-1 text-white rounded-lg  shadow-xl cursor-pointer"
    //     >
    //       Delete
    //     </button>
    //   </div>
    // </li>
    <li className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 bg-white border border-gray-200 rounded-2xl hover:bg-gray-50 transition-all active:bg-gray-100">
      {/* Task name + due date – stacked on mobile, side-by-side on larger screens */}
      <div className="flex-1 min-w-0">
        <div className="text-lg font-medium text-gray-900 truncate">{name}</div>
        {dueDate && (
          <div className="text-sm text-gray-500 mt-1">Due: {dueDate}</div>
        )}
      </div>

      {/* Action buttons – full width stacked on mobile, compact on desktop */}
      <div className="flex gap-3 sm:w-auto w-full">
        <button
          onClick={finishTask}
          className="flex-1 sm:flex-initial bg-green-600 hover:bg-green-700 active:scale-95 text-white font-medium px-6 py-3 rounded-xl shadow-md transition transform"
        >
          Done
        </button>
        <button
          onClick={() => deleteItem(id)}
          className="flex-1 sm:flex-initial bg-red-600 hover:bg-red-700 active:scale-95 text-white font-medium px-6 py-3 rounded-xl shadow-md transition transform"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default ListItem;
