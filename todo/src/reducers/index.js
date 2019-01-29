import { ADD_TODO, TOGGLE_COMPLETED, TOGGLE_MINIMIZED, HANDLE_INPUT_CHANGES, CLEAR_COMPLETED } from "../actions"

    const initialState = {
        todoList: [],
        titlevalue: "",
        minimizedlist: false
    }

    const reducer = (state = initialState, action) => {
        switch (action.type) {
          case CHANGE_COLOR:
            return {
              ...state,
              color: action.payload.color
            };
          default:
            return state;
        }
      };
      
      
      export default reducer;