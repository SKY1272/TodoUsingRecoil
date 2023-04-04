import { useRecoilState } from "recoil";
import Recoil from "./Recoil";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "./Home.module.css";
export default function Home() {
  const [taskList, setTaskList] = useRecoilState(Recoil);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    setTaskList([...taskList, newTask]);
    setNewTask("");
  };
  return (
    <div className={styled.container}>
      <h1>Home Page</h1>
      <input
        type="text"
        value={newTask}
        placeholder="Enter Text"
        onChange={(e) => setNewTask(e.target.value)}
      />
      <div className={styled.btn}>
        <button onClick={handleAddTask}>Add Task</button>

        <Link to="/task">
          <button>Check tasks</button>
        </Link>
      </div>
    </div>
  );
}
