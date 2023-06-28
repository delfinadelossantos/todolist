import { CREATE_TODO, DELETE_TODO, COMPLETE_TODO } from "./actions";

const initialState = {
  todos: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO: {
      return {
        ...state,
        todos: [state.todos, action.payload],
      };
    }
    case DELETE_TODO: {
      const filteredTodos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      return {
        ...state,
        filteredTodos,
      };
    }
    case COMPLETE_TODO: {
      const newTodos = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, complete: true } : todo
      );
      return {
        ...state,
        todos: newTodos,
      };
    }
    default:
      return { ...state };
  }
};

export default rootReducer;
