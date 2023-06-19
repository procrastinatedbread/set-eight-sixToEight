import { useContext } from "react";
import { SummaryContext } from "../context/SummaryContext";
import ToDoTaskCard from "./ToDoTaskCard";

const OpenToDo = () => {
  const { todos } = useContext(SummaryContext);
  const openList = todos.filter((task) => !task.isCompleted);
  return (
    <>
      <h3>Total To-Do: {openList.length}</h3>
      {openList.map((task) => {
        return (
          <>
            <ToDoTaskCard key={task.id} {...task} noDetail />
          </>
        );
      })}
    </>
  );
};
export default OpenToDo;
