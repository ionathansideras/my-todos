import { getProjects } from "../main.js";
import { renderTodo } from "../helpers/renderTodoDom.js";
import { saveToLocalStorage } from "../helpers/manageStorage.js";
import { setFromToEmpty } from "../helpers/setFormToEmpty.js";
// a function that edits a todo
export function editTodo(todoId, projectId) {
  // this gets the projects array from main.js
  const projects = getProjects();
  // this gets the selected project from the projects array
  const project = projects.find((project) => project.id === projectId);
  // this gets the todos array from the active project
  const todos = project.todos;
  // this gets the todo from the todos array
  const todo = todos.find((todo) => todo.id === todoId);
  // this gets the edit form from the DOM
  const form = document.querySelector(".todo-form");
  // this sets the form visibility to visible so we can know that
  // we are editing a todo
  form.classList.add("edit");
  // this gets all the form inputs from the DOM and sets their values to the todos values
  // so we can have this edit form pre-populated with the todos values
  const todoNameInput = document.querySelector("#todo-name-input");
  todoNameInput.value = todo.name;
  const todoDetailsInput = document.querySelector("#todo-details-input");
  todoDetailsInput.value = todo.details;
  const todoPriorityInput = document.querySelector("#todo-priority-input");
  todoPriorityInput.value = todo.priority;
  const todoDeadlineInput = document.querySelector("#todo-deadline-input");
  todoDeadlineInput.value = todo.deadline;
  // this is the function that handles the submit event
  function handleEdit() {
    // this sets the todos name, details, priority, and deadline to the values from the form
    todo.name = todoNameInput.value;
    todo.details = todoDetailsInput.value;
    todo.priority = todoPriorityInput.value;
    todo.deadline = todoDeadlineInput.value;
    // this removes the edit class from the form so we can know that we are not editing a todo
    form.classList.remove("edit");
    // this calls the renderTodo function and saves the projects array to local storage
    renderTodo();
    saveToLocalStorage(projects);
    setFromToEmpty();
    form.removeEventListener("submit", handleEdit);
  }
  // attach an event listener to the form
  form.addEventListener("submit", handleEdit);
}
