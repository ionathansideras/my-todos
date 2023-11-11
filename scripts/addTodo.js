import { saveToLocalStorage } from "../helpers/manageStorage";
import { getProjects } from "../main";
import { v4 as uuidv4 } from "uuid";
import { renderTodo } from "../helpers/renderTodoDom";
import { setFromToEmpty } from "../helpers/setFormToEmpty";

// this function gets the todo input values
export function getTodoInputValues() {
  const todoName = document.querySelector("#todo-name-input").value.trim();
  const todoDetails = document
    .querySelector("#todo-details-input")
    .value.trim();
  const todoPriority = document.querySelector("#todo-priority-input").value;
  const todoDeadline = document
    .querySelector("#todo-deadline-input")
    .value.trim();

  return { todoName, todoDetails, todoPriority, todoDeadline };
}
// this function will add a todo to the active project
export function addTodo() {
  // this gets the projects array from main.js
  let projects = getProjects();
  // this gets the todo input values
  const { todoName, todoDetails, todoPriority, todoDeadline } =
    getTodoInputValues();
  // this creates a todo object
  const todo = {
    // this creates a unique id for the todo
    id: uuidv4(),
    name: todoName,
    details: todoDetails,
    priority: todoPriority,
    deadline: todoDeadline,
  };
  // here we add the todo to the active project
  projects.forEach((project) => {
    if (project.active) {
      console.log(project.todos);
      project.todos.push(todo);
    }
  });
  // this renders the todo list to the DOM
  // this sets the form inputs to empty
  renderTodo();
  // this saves the projects array to local storage
  saveToLocalStorage();
  setFromToEmpty();
}
