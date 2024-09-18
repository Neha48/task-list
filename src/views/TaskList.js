import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import TaskCard from "../components/TaskCard";

const TaskList = ({ setCurrView, list, setEditTask }) => {
  return (
    <div className="bg-[#ae9d9d1a] rounded-t-[1rem]">
      <div className="bg-[#0000001a] rounded-t-[1rem]">
        <button
          className="bg-[green] text-[#fff] m-3 py-1 rounded-[1rem]"
          onClick={() => setCurrView("add")}
        >
          <AddCircleRoundedIcon />
          <span className="pl-1 pr-3">Add new Task</span>
        </button>
        <div className="flex gap-1 m-4">
          <button className="bg-[green] text-[#fff] w-16 py-1 rounded-t-[0.5rem]">
            All
          </button>
          <button className="bg-[green] text-[#fff] w-16 py-1 rounded-t-[0.5rem]">
            High
          </button>
          <button className="bg-[green] text-[#fff] w-16 py-1 rounded-t-[0.5rem]">
            Medium
          </button>
          <button className="bg-[green] text-[#fff] w-16 py-1 rounded-t-[0.5rem]">
            Low
          </button>
          <button className="bg-[green] text-[#fff] w-16 py-1 rounded-t-[0.5rem]">
            Done
          </button>
        </div>
      </div>
      {list.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          setCurrView={setCurrView}
          setEditTask={setEditTask}
        />
      ))}
    </div>
  );
};
export default TaskList;
