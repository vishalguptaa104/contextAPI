import { createSlice, nanoid } from "@reduxjs/toolkit";

//intital state ki starting me kesa dikhega
const initialState = {
  todos: [{ id: 1, text: "Hello world!" }],
};

//slice -> reducer ka bda version -> reducer-> functionality
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  // reducer ke andr yha 2 chize milengi state and action
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer