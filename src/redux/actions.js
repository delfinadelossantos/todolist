export const CREATE_TODO = "CREATE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";

export const createToDo = (todo) => {
  return {
    type: CREATE_TODO,
    payload: todo,
  };
};

export const deleteToDo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const completeToDo = (id) => {
  return {
    type: COMPLETE_TODO,
    payload: id,
  };
};
