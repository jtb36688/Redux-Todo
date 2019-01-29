import moment from "moment"

export const ADD_TODO = "ADD_TODO";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";
export const TOGGLE_MINIMIZED = "TOGGLE_MINIMIZED";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";
export const HANDLE_INPUT_CHANGES = "HANDLE_INPUT_CHANGES";


export const addTodo = (todotitle) => {
  return {
    type: ADD_TODO,
    payload: {
      todotitle: todotitle,
      id: Date.now(),
      date: new moment().format("MMMM Do YYYY, h:mm:ss a"),
      completed: false
    }
  };
};
export const handleChanges = (todotitle) => {
  return {
    type: CLEAR_COMPLETED,
    payload: { titlevalue: todotitle }
  };
};
export const toggleMinimized = () => {
  return {
    type: TOGGLE_MINIMIZED,
    payload: ""
  };
};
export const clearCompleted = () => {
  return {
    type: CLEAR_COMPLETED,
    payload: ""
  };
};
export const toggleCompleted = (todoArray, index) => {
  return {
    type: TOGGLE_COMPLETED,
    payload: todoArray
      .slice()
      .splice(
        index,
        1,
        Object.assign(
          { completed: !todoArray[index].completed },
          todoArray[index]
        )
      )
  };
};
