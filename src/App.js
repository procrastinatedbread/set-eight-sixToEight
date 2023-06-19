import "./styles.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import SummaryToDoList from "./components/SummaryToDoList";
import DoneToDo from "./components/DoneToDo";
import OpenToDo from "./components/OpenToDo";
import ToDoTaskDetails from "./components/ToDoTaskDetails";

export default function App() {
  return (
    <div className="App">
      <h1> To-do list</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<SummaryToDoList />} />
        <Route path="/donetodo" element={<DoneToDo />} />
        <Route path="/opentodo" element={<OpenToDo />} />
        <Route path="/details/:toDoId" element={<ToDoTaskDetails />} />
      </Routes>
    </div>
  );
}
