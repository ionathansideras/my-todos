import { getProjects } from "../main";
import { renderTodo } from "../helpers/renderTodoDom.js";
import { saveToLocalStorage } from "../helpers/manageStorage.js";
import { hideTodoForm } from "../helpers/showHideTodoForm.js";
// this function is going to delete a todo from the list
// based on the todo id and the project id
export function deleteTodo(todoId, projectId) {
  // this gets the projects from the projects array
  const projects = getProjects();
  // this gets the selected project from the projects array
  const project = projects.find((project) => project.id === projectId);
  // this filters the todos array and returns a new array without the deleted todo
  project.todos = project.todos.filter((todo) => todo.id !== todoId);
  // this renders the todo list to the DOM
  hideTodoForm();
  renderTodo();
  // this saves the projects array to local storage
  saveToLocalStorage(projects);
}
