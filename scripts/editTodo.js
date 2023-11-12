// Import necessary functions and resources
import { getProjects } from "../main.js";
import { renderTodo } from "../helpers/renderTodoDom.js";
import { saveToLocalStorage } from "../helpers/manageStorage.js";
import { setFromToEmpty } from "../helpers/setFormToEmpty.js";

// Function that edits a todo
export function editTodo(todoId, projectId) {
  // Get the projects array from main.js
  const projects = getProjects();

  // Find the selected project from the projects array
  const project = projects.find((project) => project.id === projectId);

  // Get the todos array from the active project
  const todos = project.todos;

  // Find the todo from the todos array
  const todo = todos.find((todo) => todo.id === todoId);

  // Get the edit form from the DOM
  const form = document.querySelector(".todo-form");

  // Set the form visibility to visible to indicate editing
  form.classList.add("edit");

  // Get form inputs from the DOM
  const todoNameInput = document.querySelector("#todo-name-input");
  const todoDetailsInput = document.querySelector("#todo-details-input");
  const todoPriorityInput = document.querySelector("#todo-priority-input");
  const todoDeadlineInput = document.querySelector("#todo-deadline-input");

  // Handle the submit event
  // Set todo properties to values from the form
  todo.name = todoNameInput.value;
  todo.details = todoDetailsInput.value;
  todo.priority = todoPriorityInput.value;
  todo.deadline = todoDeadlineInput.value;

  // Call the renderTodo function and save the projects array to local storage
  renderTodo();
  saveToLocalStorage(projects);

  // Reset form inputs
  setFromToEmpty();

  // Remove the edit class from the form to indicate not editing a todo
  form.classList.remove("edit");
}
