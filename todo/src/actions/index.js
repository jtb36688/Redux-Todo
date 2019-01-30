

export const ADD_TODO = "ADD_TODO";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";
export const TOGGLE_MINIMIZED = "TOGGLE_MINIMIZED";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";
export const HANDLE_INPUT_CHANGES = "HANDLE_INPUT_CHANGES";

export const addTodo = todotitle => {
  return {
    type: ADD_TODO,
    payload: todotitle
  };
};
export const handleInput = (name, value) => {
  return {
    type: HANDLE_INPUT_CHANGES,
    payload: { [name]: value }
  };
};
export const toggleMinimized = () => {
  return {
    type: TOGGLE_MINIMIZED,
    payload: {}
  };
};
export const clearCompleted = () => {
  return {
    type: CLEAR_COMPLETED,
    payload: {
      todoList: {}
    }
  };
};

export const toggleCompleted = (index) => {
  return {
    type: TOGGLE_COMPLETED,
    payload: index
  };
};
