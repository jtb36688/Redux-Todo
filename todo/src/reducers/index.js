import {
  ADD_TODO,
  TOGGLE_COMPLETED,
  TOGGLE_MINIMIZED,
  HANDLE_INPUT_CHANGES,
  CLEAR_COMPLETED
} from "../actions";
import moment from "moment";

const initialState = {
  todoList: [],
  titlevalue: "",
  minimizedlist: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        todotitle: action.payload,
        id: Date.now(),
        date: new moment().format("MMMM Do YYYY, h:mm:ss a"),
        completed: false
      };
      return {
        ...state,
        todoList: [...state.todoList, newTodo],
        titlevalue: ""
      };

    case TOGGLE_COMPLETED:
      return {
        ...state,
        todoList: state.todoList.map((todo, idx) => {
          if (idx !== action.payload) {
            return todo;
          } else {
            return { ...todo, completed: !todo.completed };
          }
        })
      };

    case TOGGLE_MINIMIZED:
      return {
        ...state,
        minimizedlist: !state.minimizedlist
      };
    case HANDLE_INPUT_CHANGES:
      return {
        ...state,
        titlevalue: action.payload.titlevalue
      };
    case CLEAR_COMPLETED:
      return {
        ...state,
        todoList: state.todoList.filter(todo => todo.completed === false)
      };
    default:
      return state;
  }
};

export default reducer;
