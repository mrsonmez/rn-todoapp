import { createSlice } from "@reduxjs/toolkit";
import { Alert } from "react-native";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    counter: 0,
    todos: [],
    todo: "",
  },
  reducers: {
    handleChange: (state, action) => {
      state.todo = action.payload;
    },
    addTodo: (state, action) => {
      const { id, todo, finished } = action.payload;
      if (todo == undefined || todo == null || todo == "") {
        Alert.alert("", "Lütfen boş veri girişi yapmaya çalışmayın.");
      } else {
        state.todos.push({ id: id, todo: todo, finished: finished });
        state.todo = "";
      }
    },
    changeComplete: (state, action) => {
      const clone = [...state.todos];
      let index = clone.findIndex((item) => item.id == action.payload);
      clone[index].finished = !clone[index].finished;
      state.todos = clone;
    },
    removeTodo: (state, action) => {
      const clone = [...state.todos];
      let index = clone.findIndex((item) => item.id == action.payload);
      clone.splice(index, 1);
      state.todos = clone;
    },
  },
});
export const { addTodo, changeComplete, handleChange, removeTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
