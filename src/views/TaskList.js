import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import TaskCard from "../components/TaskCard";
import { useEffect, useState } from "react";

const TaskList = ({ setCurrView, list, setEditTask }) => {
  const [filter, setFilter] = useState("all");
  const [filteredList, setFilteredList] = useState(list);
  const [search, setSearch] = useState("");

  useEffect(() => {
    switch (filter) {
      case "all":
        setFilteredList(list);
        break;
      case "high":
        setFilteredList(list.filter((t) => t.priority === "High"));
        break;
      case "medium":
        setFilteredList(list.filter((t) => t.priority === "Medium"));
        break;
      case "low":
        setFilteredList(list.filter((t) => t.priority === "Low"));
        break;
      case "done":
        setFilteredList(list.filter((t) => t.isCompleted));
        break;
      default:
        setFilteredList(list);
    }
  }, [filter, list]);

  useEffect(() => {
    const searched = filteredList.filter((t) =>
      t.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredList(searched);
  }, [search]);
  return (
    <div className="bg-[#ae9d9d1a] rounded-t-[1rem]">
      <div className="bg-[#0000001a] rounded-t-[1rem]">
        <div className="flex justify-between">
          <button
            className="bg-[green] text-[#fff] m-3 p-1 rounded-[1rem]"
            onClick={() => setCurrView("add")}
          >
            <AddCircleRoundedIcon />
            <span className="pl-1 pr-3">Add new Task</span>
          </button>
          <input
            type="search"
            placeholder="Search by Task name"
            className="border-[2px] border-[#0000005a] px-3 py-1 h-12 m-2"
            onChange={(e) =>
              setTimeout(() => {
                setSearch(e.target.value);
              }, 2000)
            }
          />
        </div>
        <div className="flex gap-1 m-4">
          <button
            className={`${
              filter === "all"
                ? "bg-[#fff] text-[#000]"
                : "bg-[green] text-[#fff]"
            } w-16 py-1 rounded-t-[0.5rem]`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`${
              filter === "high"
                ? "bg-[#fff] text-[#000]"
                : "bg-[green] text-[#fff]"
            } w-16 py-1 rounded-t-[0.5rem]`}
            onClick={() => setFilter("high")}
          >
            High
          </button>
          <button
            className={`${
              filter === "medium"
                ? "bg-[#fff] text-[#000]"
                : "bg-[green] text-[#fff]"
            } w-16 py-1 rounded-t-[0.5rem]`}
            onClick={() => setFilter("medium")}
          >
            Medium
          </button>
          <button
            className={`${
              filter === "low"
                ? "bg-[#fff] text-[#000]"
                : "bg-[green] text-[#fff]"
            } w-16 py-1 rounded-t-[0.5rem]`}
            onClick={() => setFilter("low")}
          >
            Low
          </button>
          <button
            className={`${
              filter === "done"
                ? "bg-[#fff] text-[#000]"
                : "bg-[green] text-[#fff]"
            } w-16 py-1 rounded-t-[0.5rem]`}
            onClick={() => setFilter("done")}
          >
            Done
          </button>
        </div>
      </div>
      {filteredList.map((task) => (
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
