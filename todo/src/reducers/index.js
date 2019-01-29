import { ADD_TODO, TOGGLE_COMPLETED, TOGGLE_MINIMIZED, HANDLE_INPUT_CHANGES, CLEAR_COMPLETED } from "../actions"

    const initialState = {
        todoList: [],
        titlevalue: "",
        minimizedlist: false
    }

    const reducer = (state = initialState, action) => {
        switch (action.type) {
          case ADD_TODO:
            return {
              ...state,
              todoList: state.todoList.concat(action.payload),
              titlevalue: ""
            };
            case TOGGLE_COMPLETED:
            return {
                ...state,
                todoList: action.payload.todoList
            }
            case TOGGLE_MINIMIZED:
            return {
                ...state,
                minimizedlist: action.payload.minimizedlist
            }
            case HANDLE_INPUT_CHANGES:
            return {
                ...state,
                titlevalue: action.payload.titlevalue
            }
            case CLEAR_COMPLETED:
            return {
                ...state,
                todoList: action.payload.todoList
            }
          default:
            return state;
        }
      };
      
      
      export default reducer;