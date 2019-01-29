import moment from "moment";

export const ADD_TODO = "ADD_TODO";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";
export const TOGGLE_MINIMIZED = "TOGGLE_MINIMIZED";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";
export const HANDLE_INPUT_CHANGES = "HANDLE_INPUT_CHANGES";

export const addTodo = todotitle => {
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
export const clearCompleted = (todoArray) => {
  return {
    type: CLEAR_COMPLETED,
    payload: {
      todoList: todoArray.filter(todo => todo.completed === false)
    }
  };
};

export const toggleCompleted = (todoArray, index) => {
  console.log(todoArray, index);
  return {
    type: TOGGLE_COMPLETED,
    payload: {
      todoList: todoArray.map((todo, idx) => {
        if (idx !== index) {
          return todo;
        } else {
          return { ...todo, completed: !todo.completed };
        }
      })
    }
  };
};
