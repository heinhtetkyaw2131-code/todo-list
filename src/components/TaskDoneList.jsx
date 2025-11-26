import TaskDoneLI from "./TaskDoneLI";

function TaskDoneList({ tasksDone, setTasksDone }) {
  return (
    // <section className="flex flex-col mb-10 w-150 mx-auto">
    //   <h2 className="text-2xl">Tasks Done ({tasksDone.length})</h2>
    //   <ul className="overflow-y-auto shadow-xl px-3 py-1 rounded-lg mt-5 max-h-88">
    //     {tasksDone.map((item) => {
    //       return (
    //         <TaskDoneLI
    //           setTasksDone={setTasksDone}
    //           item={item}
    //           key={item.key}
    //           tasksDone={tasksDone}
    //         />
    //       );
    //     })}
    //   </ul>
    // </section>
    <section className="w-full px-4 sm:px-6 lg:px-8 mb-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
        Tasks Done ({tasksDone.length})
      </h2>

      {/* Card container – same style as active tasks */}
      <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <ul className="divide-y divide-gray-200 max-h-96 sm:max-h-screen overflow-y-auto">
          {tasksDone.length === 0 ? (
            <li className="p-10 text-center text-gray-400 italic">
              No completed tasks yet. Keep going!
            </li>
          ) : (
            tasksDone.map((item) => (
              <TaskDoneLI
                key={item.key}
                item={item}
                tasksDone={tasksDone}
                setTasksDone={setTasksDone}
              />
            ))
          )}
        </ul>
      </div>
    </section>
  );
}

export default TaskDoneList;
