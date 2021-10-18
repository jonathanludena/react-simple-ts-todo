import { Task } from "../interfaces/Task";

interface Props {
  task: Task;
  deleteTask: (id: number) => void;
}

function TaskCard({ task, deleteTask }: Props) {
  return (
    <div className="card card-body bg-secondary rounded-1">
      <h2>{task.title}</h2>
      <p>{task.id}</p>
      <p>{task.description}</p>
      <button
        onClick={() => task.id && deleteTask(task.id)}
        className="btn btn-danger"
      >
        Delete
      </button>
    </div>
  );
}

export default TaskCard;
