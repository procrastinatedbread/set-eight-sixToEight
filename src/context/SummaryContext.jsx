import { useState, createContext } from "react";

export const SummaryContext = createContext({
  todos: [],
  setTodos: (id) => {},
  updateToDoHandler: (id) => {}
});
export const SummaryProvider = ({ children }) => {
  const [todos, setTodos] = useState();
  const updateToDoHandler = (task) => {
    const updatedTask = { ...task, isCompleted: true };
    const newTaskList = todos.map((item) =>
      item.id === updatedTask.id ? updatedTask : item
    );
    setTodos(newTaskList);
  };
  const summaryContext = { todos, setTodos, updateToDoHandler };
  return (
    <SummaryContext.Provider value={summaryContext}>
      {children}
    </SummaryContext.Provider>
  );
};
