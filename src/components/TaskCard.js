import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import CircleIcon from "@mui/icons-material/Circle";

function TaskCard({ task, setCurrView, setEditTask }) {
  const color =
    task.priority === "High"
      ? "error"
      : task.priority === "Medium"
      ? "warning"
      : "primary";
  const handleEdit = () => {
    setCurrView("edit");
    setEditTask(task);
  };
  return (
    <div
      className={`my-2 ${
        task.isCompleted ? "bg-[green]" : "bg-[#0000001a]"
      } h-16 flex justify-between`}
      onClick={handleEdit}
    >
      <div className="flex">
        <ArrowRightIcon htmlColor="green" />
        <div className="flex flex-col mx-1">
          <h3 className="font-bold">{task.name}</h3>
          <h5>Due Date: {task.dueBy}</h5>
        </div>
      </div>
      <div className="flex p-2">
        <h3 className="font-bold">{task.priority}</h3>
        <CircleIcon color={color} />
      </div>
    </div>
  );
}

export default TaskCard;
