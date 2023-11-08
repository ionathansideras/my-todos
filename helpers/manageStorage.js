import { getProjects } from "../main";
import { renderProjectsDom } from "../helpers/renderProjectDom";
// this file contains functions to manage local storage
export function getLocalStorage() {
  const projects = getProjects();
  // if there is a projects array in local storage it will assign it to the projects variable
  if (localStorage.getItem("projects")) {
    const savedProjects = JSON.parse(localStorage.getItem("projects"));
    projects.push(...savedProjects);
    // this renders the projects again
    renderProjectsDom();
  } else {
    // if there is no projects array in local storage it will create one
    localStorage.setItem("projects", JSON.stringify(projects));
  }
}
// this function saves the projects array to local storage
export function saveToLocalStorage() {
  const projects = getProjects();
  // this saves the projects array to local storage
  localStorage.setItem("projects", JSON.stringify(projects));
}
