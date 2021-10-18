import { ChangeEvent, FormEvent, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Task } from "../interfaces/Task";

type handleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface Props {
  addNewTask: (task: Task) => void;
}

const initialState = {
  title: "",
  description: "",
};

export default function TaskForm({ addNewTask }: Props) {
  const [task, setTask] = useState(initialState);

  const handleChange = ({ target: { name, value } }: handleInputChange) => {
    setTask({
      ...task,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewTask(task);
    setTask(initialState);
  };

  return (
    <div className="card card-body bg-secondary m-1">
      <h1>Add Task</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Write a title"
          onChange={handleChange}
          value={task.title}
          className="form-control mb-3 rounded-1 shadow-none"
        />
        <textarea
          rows={2}
          name="description"
          placeholder="Write a description"
          onChange={handleChange}
          value={task.description}
          className="form-control mb-3 rounded-1 shadow-none"
        />

        <button className="btn btn-primary">
          <AiOutlinePlus style={{ marginRight: "1rem" }} />
          Save
        </button>
      </form>
    </div>
  );
}
