export const initialState = { list: [] };

export function reducer(state, action) {
  switch (action.type) {
    case "add":
      let task = action.payload;
      task.id = state.list.length + 1;
      return { ...state, list: [...state.list, task] };
    case "edit":
      let taskIndex = state.list.findIndex((t) => t.id === action.payload?.id);
      state.list[taskIndex] = action.payload;
      return { ...state };
    case "markDone":
      let index = state.list.findIndex((t) => t.id === action.payload?.id);
      state.list[index].isCompleted = true;
      return { ...state };
    case "delete":
      return {
        ...state,
        list: state.list.filter((task) => task !== action.payload),
      };
    default:
      return "Unrecognized command";
  }
}
