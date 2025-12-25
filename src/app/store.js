import { configureStore } from '@reduxjs/toolkit'
import todoReducers from "../feature/todo/todoSlice.js";

export const store = configureStore({
  reducer: todoReducers,
})