import { useState } from "react";
import Header from "./components/Header";
import AddToDo from "./components/AddToDo";
import TodoList from "./components/TodoList";
import TaskDoneList from "./components/TaskDoneList";

function App() {
  const [tasksDone, setTasksDone] = useState(
    JSON.parse(localStorage.getItem("tasksDone")) ||
      [
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
      ]
  );

  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todoList")) || [
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
    ]
  );
  return (
    <>
      <Header />
      <AddToDo {...{ setTodoList, todoList }} />
      <TodoList {...{ tasksDone, setTasksDone, setTodoList, todoList }} />
      <TaskDoneList {...{ tasksDone, setTasksDone }} />
    </>
  );
}

export default App;
