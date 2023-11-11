import { getLocalStorage, saveToLocalStorage } from "./helpers/manageStorage";
import { addProject } from "./scripts/addProject";
import { addTodo } from "./scripts/addTodo";
import { setProjectToActive } from "./helpers/setProjectToActive";
import { showHideAside } from "./helpers/showHideAside";
import { validateProject } from "./scripts/validateProject";
import "./styles/aside.css";

// This is the projects array that will hold all the projects
let projects = [];
// This is a flag that will be used to check if the project input is valid or not
let projectFlag = false;
// This is a getter for the projectFlag variable with this way of writing it
export function getProjectFlag() {
  return projectFlag;
}
// this gets the projects array from local storage and assigns it to the projects variable
// if there is no projects array in local storage it will create one
getLocalStorage();
// This is a getter for the projects array with this way of writing it
// we can access the projects array from any other file by importing this function
export function getProjects() {
  return projects;
}
// This is a setter for the projects array with this way of writing it
// we can modify the projects array from any other file by importing this function
export function setProjects(data) {
  projects = data;
}
// This is a setter for the projectFlag variable with this way of writing it
export function setProjectFlag(data) {
  projectFlag = data;
}
// this adds a submit event listener to the todo form
document.querySelector(".todo-form").addEventListener("submit", (e) => {
  e.preventDefault();
  // This checks if the clicked element has the edit class
  // because we want to use the addTodo function only when we are not editing a todo
  if (!e.target.classList.contains("edit")) addTodo();
});
// This adds a click event listener to the aside
// by using event delegation we can add a click event listener to the parent element
// and then check if the clicked element has the project-name class
// by passing an event listener to the parent element we can add projects dynamically
// without having to add an event listener to each project again and again every time we add a project
// or every time we delete a project
document.querySelector("aside").addEventListener("click", (e) => {
  // This checks if the clicked element has the project-name class
  // so we can make sure that we are clicking on a project and not on
  // the delete button or the parent
  if (e.target.classList.contains("project-name")) {
    // This calls the setProjectToActive function and passes the event to it
    setProjectToActive(e);
    // This saves the projects array to local storage
    saveToLocalStorage(projects);
  }
  // when we click the aside-hide button we want to hide the aside
  if (e.target.id === "mobile-menu" || e.target.classList.contains("bar")) {
    console.log(e.target);
    showHideAside();
  }
});
// This adds a focus and input event listener to the project input to validate the input
document.querySelector(".project-input").addEventListener("focus", (e) => {
  validateProject(e);
});
document.querySelector(".project-input").addEventListener("input", (e) => {
  validateProject(e);
});
// This adds a submit event listener to the project form
document.querySelector(".project-form").addEventListener("submit", (e) => {
  console.log(projectFlag);
  e.preventDefault();
  // This checks if the projectFlag is true if its true it means that the
  // it means that the input is valid and we can add the project
  if (projectFlag) {
    addProject();
    // This saves the projects array to local storage
    saveToLocalStorage(projects);
  }
});
