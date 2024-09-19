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
  const validateTaskTitle = (title) => {
    return (
      state.list?.findIndex(
        (tsk) => tsk.name.toLowerCase() === title.toLowerCase()
      ) < 0
    );
  };
  return (
    <div className="w-full md:w-1/2 h-screen mx-auto my-1">
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
      {currView === "add" && (
        <AddTask
          setCurrView={setCurrView}
          dispatch={dispatch}
          validateTaskTitle={validateTaskTitle}
        />
      )}
      {currView === "edit" && (
        <AddTask
          setCurrView={setCurrView}
          dispatch={dispatch}
          editTask={editTask}
          validateTaskTitle={validateTaskTitle}
        />
      )}
    </div>
  );
}

export default App;
