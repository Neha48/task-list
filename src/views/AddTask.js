import { useEffect, useState } from "react";

function AddTask({ setCurrView, dispatch, editTask }) {
  const [task, setTask] = useState({
    name: "",
    desc: "",
    dueBy: "",
    priority: "",
  });
  useEffect(() => {
    console.log(editTask);
    if (editTask) setTask(editTask);
  }, [editTask]);

  const handleAdd = () => {
    dispatch({ type: "add", payload: task });
    setTimeout(() => setCurrView("list"), 1000);
  };

  const handleEdit = () => {
    dispatch({ type: "edit", payload: task });
    setTimeout(() => setCurrView("list"), 1000);
  };

  const handleDone = () => {
    dispatch({ type: "markDone", payload: task });
    setTimeout(() => setCurrView("list"), 1000);
  };

  const handleDelete = () => {
    dispatch({ type: "delete", payload: task });
    setTimeout(() => setCurrView("list"), 1000);
  };

  return (
    <div className="bg-[#0000001a] rounded-[1rem] p-5">
      <div className="flex w-full justify-between">
        <h2 className="font-bold text-[1.3em]">
          {editTask ? "Edit Task" : "Add New Task"}
        </h2>
        <button
          className="bg-[red] text-[#fff] w-1/3 px-4 rounded-[1rem]"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
      <div className="flex flex-col gap-2 my-4">
        <input
          type="text"
          placeholder="Task Name"
          disabled={task.isCompleted}
          value={task.name}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
          className="border-[2px] border-[#0000005a] px-3 py-1"
        />
        <textarea
          type="text"
          placeholder="Task Description"
          disabled={task.isCompleted}
          value={task.desc}
          onChange={(e) => setTask({ ...task, desc: e.target.value })}
          className="border-[2px] border-[#0000005a] px-3 py-1"
        />
        <input
          type="datetime-local"
          disabled={task.isCompleted}
          value={task.dueBy}
          onChange={(e) => setTask({ ...task, dueBy: e.target.value })}
          className="border-[2px] border-[#0000005a] px-3 py-1"
        />
        <select
          title="Select Priority"
          value={task.priority}
          disabled={task.isCompleted}
          onChange={(e) => setTask({ ...task, priority: e.target.value })}
          className="border-[2px] border-[#0000005a] px-3 py-1"
        >
          <option>Select Priority</option>
          <option value={"High"}>High</option>
          <option value={"Medium"}>Medium</option>
          <option value={"Low"}>Low</option>
        </select>
      </div>
      <div className="flex w-full justify-between mt-40">
        {!task.isCompleted &&
          (editTask ? (
            <>
              <button
                className="bg-[green] w-full text-[#fff] my-3 mx-1 py-1 px-2 rounded-[1rem]"
                onClick={handleEdit}
              >
                Save Changes
              </button>
              <button
                className="bg-[green] w-full text-[#fff] my-3 mx-1 py-1 px-2 rounded-[1rem]"
                onClick={handleDone}
              >
                Mark as done
              </button>
            </>
          ) : (
            <button
              className="bg-[green] w-full text-[#fff] m-3 py-1 px-4 rounded-[1rem]"
              onClick={handleAdd}
            >
              Add Task
            </button>
          ))}
        <button className="bg-[green] w-full text-[#fff] m-3 py-1 px-4 rounded-[1rem]">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default AddTask;
