import "./styles.css";
import Home from "./components/Home";
import Task from "./components/Task";
import { Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
export default function App() {
  return (
    <>
      <div className="App">
        <RecoilRoot>
          <Routes>
            <Route path="/" Component={Home}></Route>
            <Route path="/task" Component={Task}></Route>
          </Routes>
        </RecoilRoot>
      </div>
    </>
  );
}
