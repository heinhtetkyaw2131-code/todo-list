import Header from "./components/Header";
import AddToDo from "./components/AddToDo";
import TodoList from "./components/TodoList";
import TaskDoneList from "./components/TaskDoneList";

function App() {
  return (
    <>
      <Header />
      <AddToDo />
      <TodoList />
      <TaskDoneList />
    </>
  );
}

export default App;
