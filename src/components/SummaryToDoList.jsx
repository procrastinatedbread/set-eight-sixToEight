import { useContext, useEffect } from "react";
import { SummaryContext } from "../context/SummaryContext";
import { fakeFetch } from "../constants";
import ToDoTaskCard from "./ToDoTaskCard";

const SummaryToDoList = () => {
  const { todos, setTodos, updateToDoHandler } = useContext(SummaryContext);
  const url = "https://example.com/api/todos";
  useEffect(() => {
    const innerFunction = async () => {
      const { data } = await fakeFetch(url);
      // console.log(data.todoList);
      setTodos(data.todoList);
    };
    innerFunction();
  }, []);
  const getCompletedStyle = (isCompleted) => {
    return isCompleted ? "line-through" : "";
  };
  console.log(todos);
  return (
    <>
      {todos?.map((task) => {
        const { id, title, description, isCompleted } = task;
        return (
          <div key={id}>
            <h2 style={{ textDecoration: getCompletedStyle(isCompleted) }}>
              {title}
            </h2>
            <p style={{ textDecoration: getCompletedStyle(isCompleted) }}>
              {description}
            </p>
            <p>Status: {isCompleted ? "Done" : "Not Done"}</p>
            <button
              disabled={isCompleted}
              onClick={() => updateToDoHandler(task)}
            >
              Mark as Done
            </button>
          </div>
        );
      })}
    </>
  );
};
export default SummaryToDoList;
