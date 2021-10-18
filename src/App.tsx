import { useState } from "react";

import { Task } from "./interfaces/Task";

import "./App.css";
import logo from "./logo.svg";

import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

interface Props {
  title?: string;
}

function App({ title }: Props) {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Learn React",
      description: "Learn React",
      completed: false,
    },
  ]);

  const getCurrentTimesstamp = (): number => new Date().getTime();

  const newAddTask = (task: Task) =>
    setTasks([
      ...tasks,
      { ...task, id: getCurrentTimesstamp(), completed: false },
    ]);

  const deleteTask = (id: number) => tasks.filter((task) => task.id !== id);

  return (
    <div className="" style={{ height: "100vh" }}>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <img src={logo} alt="logo" style={{ width: "4rem" }} />
          <a href="/">{title && title}</a>
        </div>
      </nav>

      <main className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <TaskForm addNewTask={newAddTask} />
          </div>
          <div className="col-md-8">
            <div className="row">
              <TaskList tasks={tasks} deleteTask={deleteTask} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
