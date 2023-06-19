import { useContext } from "react";
import { SummaryContext } from "../context/SummaryContext";
import ToDoTaskCard from "./ToDoTaskCard";

const DoneToDo = () => {
  const { todos } = useContext(SummaryContext);
  const isDoneList = todos.filter((task) => task.isCompleted);
  console.log(isDoneList);
  return (
    <>
      <h3>Total To-Do: {isDoneList.length}</h3>
      {isDoneList?.map((task) => {
        return (
          <>
            <ToDoTaskCard key={task.id} {...task} noDetail />
          </>
        );
      })}
    </>
  );
};
export default DoneToDo;
