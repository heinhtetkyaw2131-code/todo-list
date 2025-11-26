import ListItem from "./ListItem";

function TodoList({ tasksDone, setTasksDone, todoList, setTodoList }) {
  return (
    // <section className="flex flex-col mb-10 max-w-150 mx-auto">
    //   <h2 className="text-2xl">Tasks to do ({todoList.length})</h2>
    //   <ul className="overflow-y-auto shadow-xl px-3 py-1 rounded-lg mt-5 max-h-88">
    //     {todoList.map((item) => {
    //       return <ListItem tasksDone={tasksDone} setTasksDone={setTasksDone} item={item} todoList={todoList} setTodoList={setTodoList} key={item.key} />
    //     })}
    //   </ul>
    // </section>
    <section className="w-full px-4 sm:px-6 lg:px-8 mb-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
        Tasks to do ({todoList.length})
      </h2>

      {/* Responsive card container */}
      <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <ul className="divide-y divide-gray-200 max-h-96 sm:max-h-screen overflow-y-auto">
          {todoList.length === 0 ? (
            <li className="p-8 text-center text-gray-500">
              No tasks yet! Add one above
            </li>
          ) : (
            todoList.map((item) => (
              <ListItem
                key={item.key}
                item={item}
                tasksDone={tasksDone}
                setTasksDone={setTasksDone}
                todoList={todoList}
                setTodoList={setTodoList}
              />
            ))
          )}
        </ul>
      </div>
    </section>
  );
}

export default TodoList;
