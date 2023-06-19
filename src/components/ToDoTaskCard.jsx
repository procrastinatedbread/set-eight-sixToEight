import { Link } from "react-router-dom";

const ToDoTaskCard = (task) => {
  const { id, title, description, isCompleted, noDetail } = task;
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Status: {isCompleted ? "Done" : "Not Done"}</p>
      {noDetail && <Link to={`/details/${id}`}>Expand Todo</Link>}
    </div>
  );
};
export default ToDoTaskCard;
