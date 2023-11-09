import { deleteProject } from "../scripts/deleteProject";
import { getProjects } from "../main";
import { renderTodo } from "./renderTodoDom";
// This function renders the projects to the DOM
export function renderProjectsDom() {
  // this is a reference to the projects array
  let projects = getProjects();
  // This calls the firstProjectToActive function and passes the projects array to it
  firstProjectToActive(projects);
  // This gets the projects div from the DOM and clears it so we can
  // render the new updated projects array
  const projectsUi = document.querySelector(".projects");
  projectsUi.innerHTML = "";
  // This loops through the projects array and creates a div for each project
  projects.forEach((project) => {
    const projectContainer = document.createElement("div");
    projectContainer.setAttribute("data-id", project.id);
    const projectName = document.createElement("h2");
    projectName.classList.add("project-name");
    const projectDelete = document.createElement("button");
    projectDelete.classList.add("delete");
    projectDelete.textContent = "Delete";
    // This calls the makeProjectActive function and passes the project to it
    makeProjectActive(project, projectContainer);
    // This adds an event listener to the delete button so when it is clicked it calls the
    // deleteProject function
    projectDelete.addEventListener("click", () => {
      // This calls the deleteProject function and passes the project id to it
      deleteProject(project.id);
    });
    projectName.textContent = project.name;
    projectContainer.appendChild(projectName);
    projectContainer.appendChild(projectDelete);
    projectsUi.appendChild(projectContainer);
  });
  renderTodo();
}
// This function makes the project active true or false based on
// the active property of the project
function makeProjectActive(project, projectContainer) {
  if (project.active) {
    projectContainer.dataset.active = true;
  } else {
    projectContainer.dataset.active = false;
  }
}
// this function will select the first project of the projects to make it active
// if all projects have data-active="false" then the first project will be selected
function firstProjectToActive(projects) {
  // if all projects have data-active="false" then the first project will be selected.
  // the every method will return true if all projects have data-active="false"
  if (projects.every((project) => project.active === false)) {
    // this will set the first project to active
    projects[0] ? (projects[0].active = true) : null;
  }
}
