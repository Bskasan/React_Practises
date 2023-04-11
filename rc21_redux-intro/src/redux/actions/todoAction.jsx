import {
  ADD_TODO,
  CLEAR_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
} from "../types/todoTypes";

export const addTodo = (payload) => ({ type: ADD_TODO, payload });

export const deleteTodo = (payload) => ({
  type: DELETE_TODO,
  payload: payload,
});

export const toggleTodo = (payload) => ({
  type: TOGGLE_TODO,
  payload: payload,
});

export const clearTodo = () => ({ type: CLEAR_TODO });
