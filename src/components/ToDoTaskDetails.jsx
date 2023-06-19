import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { SummaryContext } from "../context/SummaryContext";
import ToDoTaskCard from "./ToDoTaskCard";

const ToDoTaskDetails = () => {
  const { toDoId } = useParams();
  const { todos } = useContext(SummaryContext);
  const selectedToDo = todos.find(({ id }) => id === +toDoId);

  return (
    <div>
      <h1>Details</h1>
      <ToDoTaskCard {...selectedToDo} />
      <Link to="/">See all Todos</Link>
    </div>
  );
};
export default ToDoTaskDetails;
