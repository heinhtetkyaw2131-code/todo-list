import {storeData} from './utils/handleData';

function TaskDoneLI({ setTasksDone, tasksDone, item }) {
  const deleteItem = () => {
    const newArr = tasksDone.filter((obj) => obj.key !== item.key);
    setTasksDone(newArr);
    storeData('tasksDone', newArr);
  };

  const name = item.name;
  const dueDate = item.dueDate;

  return (
    // <li className="shadow-xl flex w-full justify-between items-center my-3 bg-gray-400 text-white p-5 rounded-2xl">
    //   <div>{name}</div> <div>{dueDate}</div>
    //   <div className="flex w-1/4 justify-end">
    //     <button
    //       onClick={deleteItem}
    //       className="bg-red-500 px-2 py-1 text-white rounded-lg  shadow-xl cursor-pointer"
    //     >
    //       Delete
    //     </button>
    //   </div>
    // </li>
    <li className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 bg-white hover:bg-gray-50 active:bg-gray-100 transition-all">
      {/* Task info */}
      <div className="flex-1 min-w-0">
        <div className="text-lg font-medium text-gray-700 line-through opacity-75">
          {name}
        </div>
        {dueDate && (
          <div className="text-sm text-gray-500 mt-1">
            Completed on: {dueDate}
          </div>
        )}
      </div>

      {/* Delete button – full width on mobile */}
      <div className="flex justify-end">
        <button
          onClick={() => deleteItem(item.key)} // assuming you pass id/key
          className="w-full sm:w-auto bg-red-600 hover:bg-red-700 active:scale-95 text-white font-medium px-8 py-3 rounded-xl shadow-md transition transform"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TaskDoneLI;
