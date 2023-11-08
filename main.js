import { getLocalStorage, saveToLocalStorage } from "./helpers/manageStorage";
import { addProject } from "./scripts/addProject";
import { addTodo } from "./scripts/addTodo";
import { handleActives } from "./helpers/handleActives";
import "./styles/aside.css";

document.querySelector("aside").innerHTML = `
  <h1>Hello todo!</h1>
  <form class="project-form">
    <input type="text" placeholder="What needs to be done?">
    <button type="submit">Add</button>
  </form>
  <div class="projects"></div>
`;
// This is the projects array that will hold all the projects
let projects = [];
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
// this adds a submit event listener to the todo form
document.querySelector(".todo-form").addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});
// This adds a submit event listener to the project form
document.querySelector(".project-form").addEventListener("submit", (e) => {
  e.preventDefault();
  addProject();
  // This saves the projects array to local storage
  saveToLocalStorage(projects);
});
// This adds a click event listener to the projects div
// by using event delegation we can add a click event listener to the parent element
// and then check if the clicked element has the project-name class
// by passing an event listener to the parent element we can add projects dynamically
// without having to add an event listener to each project again and again every time we add a project
// or every time we delete a project
document.querySelector(".projects").addEventListener("click", (e) => {
  // This checks if the clicked element has the project-name class
  // so we can make sure that we are clicking on a project and not on
  // the delete button or the parent
  if (e.target.classList.contains("project-name")) {
    // This calls the handleActives function and passes the event to it
    handleActives(e);
    // This saves the projects array to local storage
    saveToLocalStorage(projects);
  }
});
