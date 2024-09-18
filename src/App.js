import { FolderOutlined } from "@mui/icons-material";
import TaskList from "./views/TaskList";
import { useState } from "react";
import { useReducer } from "react";
import { reducer, initialState } from "./store/reducer";
import AddTask from "./views/AddTask";

function App() {
  const [currView, setCurrView] = useState("list");
  const [editTask, setEditTask] = useState();
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="w-1/2 h-screen mx-auto my-1">
      <div className="bg-[green] text-[#fff] w-40 h-10 mx-3 p-1 rounded-t-[1rem]">
        <FolderOutlined className="mx-2" />
        Task List View
      </div>
      {currView === "list" && (
        <TaskList
          setCurrView={setCurrView}
          list={state.list}
          setEditTask={setEditTask}
        />
      )}
      {(currView === "add" || currView === "edit") && (
        <AddTask
          setCurrView={setCurrView}
          dispatch={dispatch}
          editTask={editTask}
        />
      )}
    </div>
  );
}

export default App;
