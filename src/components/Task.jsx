import { useRecoilValue } from "recoil";
import Recoil from "./Recoil";
import styled from "./Task.module.css";
export default function TaskPage() {
  const taskList = useRecoilValue(Recoil);
  return (
    <div className={styled.container}>
      <h1>Task to do!</h1>
      <ul>
        {taskList.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}
