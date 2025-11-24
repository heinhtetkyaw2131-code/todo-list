import { useState } from "react";
import TaskDoneLI from "./TaskDoneLI";

function TaskDoneList() {
  const [tasksDone, setTasksDone] = useState([
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
      <h2 className="text-2xl">Tasks Done ({tasksDone.length})</h2>
      <ul className="overflow-y-auto shadow-xl px-3 py-1 rounded-lg mt-5 max-h-88">
        {tasksDone.map((item) => {
          return <TaskDoneLI setTasksDone={setTasksDone} item={item} name={item.name} dueDate={item.dueDate} key={item.key} tasksDone={tasksDone} />
        })}
      </ul>
    </section>
  );
}

export default TaskDoneList;
