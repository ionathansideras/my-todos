// Import necessary functions and resources
import { getLocalStorage, saveToLocalStorage } from "./helpers/manageStorage";
import { addProject } from "./scripts/addProject";
import { addTodo } from "./scripts/addTodo";
import { editTodo } from "./scripts/editTodo";
import { setProjectToActive } from "./helpers/setProjectToActive";
import { showHideAside } from "./helpers/showHideAside";
import { validateProject } from "./scripts/validateProject";
import { showTodoForm, hideTodoForm } from "./helpers/showHideTodoForm";
import { showCover, hideCover } from "./helpers/showHideCover";
import { setFromToEmpty } from "./helpers/setFormToEmpty";
import { renderProjectsDom } from "./helpers/renderProjectDom";
import { detailsInput, nameInput } from "./scripts/validateTodo";
// Import styles
import "./styles/main.css";
import "./styles/aside.css";
import "./styles/todo-form.css";
import "./styles/header.css";
import { validateTodo } from "./scripts/validateTodo";

// Projects array to hold all projects
let projects = [];

// Global variable to store todo id and project id
let editIds = {
  todoId: "",
  projectId: "",
};

// Setter for editIds
export function setEditIds(data) {
  editIds = data;
}

// Flag to check if the project input is valid
let projectFlag = false;
let todoNameFlag = false;
let todoDetailsFlag = false;
// Get projects array from local storage and assign it to the projects variable
getLocalStorage();
renderProjectsDom();
// Getter for projects array
export function getProjects() {
  return projects;
}

// Setter for projects array
export function setProjects(data) {
  projects = data;
}

// Setter for projectFlag variable
export function setProjectFlag(data) {
  projectFlag = data;
}
export function setTodoNameFlag(data) {
  todoNameFlag = data;
}
export function setTodoDetailsFlag(data) {
  todoDetailsFlag = data;
}

// Add submit event listener to the todo form
document.querySelector(".todo-form").addEventListener("submit", (e) => {
  e.preventDefault();
  if (todoNameFlag && todoDetailsFlag) {
    if (!e.target.classList.contains("edit")) {
      // Adding a new todo
      addTodo();
    } else {
      // Editing an existing todo
      editTodo(editIds.todoId, editIds.projectId);
    }
    // Hide the todo form and cover
    hideTodoForm();
    hideCover();
  }
});

// Add click event listener to the aside
document.querySelector("aside").addEventListener("click", (e) => {
  if (e.target.classList.contains("project-name")) {
    // Set the clicked project as active
    setProjectToActive(e);
    // Save the projects array to local storage
    saveToLocalStorage(projects);
  }
  // Toggle the visibility of the aside on mobile
  if (e.target.id === "mobile-menu" || e.target.classList.contains("bar")) {
    showHideAside();
  }
});

// Add focus and input event listener to the project input to validate input
document.querySelector(".project-input").addEventListener("focus", (e) => {
  validateProject(e.target);
});
document.querySelector(".project-input").addEventListener("input", (e) => {
  validateProject(e.target);
});

// Add submit event listener to the project form
document.querySelector(".project-form").addEventListener("submit", (e) => {
  e.preventDefault();
  // Check if the project input is valid
  if (projectFlag) {
    // Add a new project
    addProject();
    // Save the projects array to local storage
    saveToLocalStorage(projects);
  }
});

// Add click event listener to open todo form button
document.querySelector(".open-todo-form").addEventListener("click", () => {
  // Show the cover and the todo form
  setFromToEmpty();
  showCover(50);
  showTodoForm();
  const name = document.querySelector("#todo-name-input");
  const details = document.querySelector("#todo-details-input");
  nameInput(name);
  detailsInput(details);
});

// Add click event listener to hide todo form button
document.querySelector(".hide-todo-form").addEventListener("click", () => {
  // Hide the cover and the todo form
  hideCover();
  hideTodoForm();
  document.querySelector(".edit")?.classList?.remove("edit");
});

// Add click event listener to the cover
document.querySelector(".cover").addEventListener("click", () => {
  // Hide the aside, todo form, and cover when clicking the cover
  hideCover();
  hideTodoForm();
  document.querySelector(".edit")?.classList?.remove("edit");
  document.querySelector(".menu-open")?.classList?.remove("menu-open");
});

const inputName = document.querySelector("#todo-name-input");
const inputDetails = document.querySelector("#todo-details-input");
const inputsForValidation = [inputName, inputDetails];
inputsForValidation.forEach((input) => {
  input.addEventListener("focus", (e) => {
    validateTodo(e);
  });
  input.addEventListener("input", (e) => {
    validateTodo(e);
  });
});
