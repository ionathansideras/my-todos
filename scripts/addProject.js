import { renderProjectsDom } from "../helpers/renderProjectDom";
import { getProjects } from "../main";
import { v4 as uuidv4 } from "uuid";
// this function will add a project to the projects array
export function addProject() {
  // this gets the projects array from main.js
  let projects = getProjects();
  let input = document.querySelector("input");
  // this creates a project object
  const project = {
    id: uuidv4(),
    name: input.value,
    todos: [],
    active: false,
  };
  // this clears the input field
  input.value = "";
  // pushes the project to the projects array
  projects.push(project);
  // renders the projects to the DOM
  renderProjectsDom();
}
