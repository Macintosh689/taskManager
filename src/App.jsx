import TaskMeter from "./components/TaskMeter/TaskMeter";
import Modal from "./components/Modal/Modal";
import TaskColumn from "./components/TaskColumn/TaskColumn";
import { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { getSaveTasks, statusNames } from "./utills";
function App() {
  const [tasks, setTasks] = useState(getSaveTasks());

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const moveTask = (taskId, newStatus) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, status: newStatus }; // Обновляем статус задачи
        }
        return task;
      });

      return updatedTasks;
    });
  };
  console.log(tasks);
  return (
    <DndProvider backend={HTML5Backend}>
      <header>
        <TaskMeter />
        <Modal addTask={(newTask) => setTasks((prev) => [...prev, newTask])} />
      </header>
      <div className="columns">
        <TaskColumn
          status={statusNames.BLOCK}
          list={tasks.filter((task) => task.status === statusNames.BLOCK)}
          moveTask={moveTask}
        />
        <TaskColumn
          status={statusNames.TODO}
          list={tasks.filter((task) => task.status === statusNames.TODO)}
          moveTask={moveTask}
        />
        <TaskColumn
          status={statusNames.ONPROGRESS}
          list={tasks.filter((task) => task.status === statusNames.ONPROGRESS)}
          moveTask={moveTask}
        />
        <TaskColumn
          status={statusNames.DONE}
          list={tasks.filter((task) => task.status === statusNames.DONE)}
          moveTask={moveTask}
        />
      </div>
    </DndProvider>
  );
}

export default App;
