import { useState } from "react";
import ListItem from "./ListItem";

function TodoList() {
  const [todoList, setTodoList] = useState([
    {
      name: "Take a shower1",
      dueDate: "02/03/2023",
      key: crypto.randomUUID(),
    },
    {
      name: "Take a shower2",
      dueDate: "02/03/2023",
      key: crypto.randomUUID(),
    },
    {
      name: "Take a shower3",
      dueDate: "02/03/2023",
      key: crypto.randomUUID(),
    },
    {
      name: "Take a shower4",
      dueDate: "02/03/2023",
      key: crypto.randomUUID(),
    },
    {
      name: "Take a shower5",
      dueDate: "02/03/2023",
      key: crypto.randomUUID(),
    },
  ]);

  return (
    <section className="flex flex-col mb-10 w-150 mx-auto">
      <h2 className="text-2xl">Tasks to do (3)</h2>
      <ul className="overflow-y-auto shadow-xl px-3 py-1 rounded-lg mt-5 h-88">
        {todoList.map((item) => {
          return <ListItem item={item} todoList={todoList} setTodoList={setTodoList} key={item.key} name={item.name} dueDate={item.dueDate} />
        })}
      </ul>
    </section>
  );
}

export default TodoList;
