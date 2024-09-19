const localList = [];
for (let i = 0; i < localStorage.length; i++) {
  localList.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
}
export const initialState = { list: localList };

export function reducer(state, action) {
  switch (action.type) {
    case "add":
      let task = action.payload;
      task.id = state.list.length + 1;
      localStorage.setItem(task.id, JSON.stringify(task));
      return { ...state, list: [...state.list, task] };
    case "edit":
      let taskIndex = state.list.findIndex((t) => t.id === action.payload?.id);
      state.list[taskIndex] = action.payload;
      localStorage.setItem(action.payload?.id, JSON.stringify(action.payload));
      return { ...state };
    case "markDone":
      let index = state.list.findIndex((t) => t.id === action.payload?.id);
      state.list[index].isCompleted = true;
      localStorage.setItem(
        action.payload?.id,
        JSON.stringify({
          ...action.payload,
          isCompleted: true,
        })
      );
      return { ...state };
    case "delete":
      localStorage.removeItem(action.payload?.id);
      return {
        ...state,
        list: state.list.filter((task) => task !== action.payload),
      };
    default:
      return "Unrecognized command";
  }
}
