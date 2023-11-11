// this file contains functions to show and hide the todo form
export function showTodoForm() {
  document.querySelector(".todo-form").classList.add("todo-form-visible");
}
export function hideTodoForm() {
  document.querySelector(".todo-form").classList.remove("todo-form-visible");
}
