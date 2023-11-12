// Import necessary functions and resources
import { deleteProject } from "../scripts/deleteProject";
import { getProjects } from "../main";
import { renderTodo } from "./renderTodoDom";
import trash from "../imgs/trash.png";

// Function to render projects to the DOM
export function renderProjectsDom() {
  // Reference to the projects array
  let projects = getProjects();

  // Call the firstProjectToActive function and pass the projects array to it
  firstProjectToActive(projects);

  // Get the projects div from the DOM and clear it to render the updated projects array
  const projectsUi = document.querySelector(".projects");
  projectsUi.innerHTML = "";

  // Loop through the projects array and create a div for each project
  projects.forEach((project) => {
    const projectContainer = document.createElement("div");
    projectContainer.setAttribute("data-id", project.id);

    const projectName = document.createElement("h2");
    projectName.classList.add("project-name");

    const projectDelete = document.createElement("img");
    projectDelete.classList.add("delete-project");
    projectDelete.src = trash;

    // Call the makeProjectActive function and pass the project to it
    makeProjectActive(project, projectContainer);

    // Add an event listener to the delete button to call the deleteProject function
    projectDelete.addEventListener("click", () => {
      // Call the deleteProject function and pass the project id to it
      deleteProject(project.id);
    });

    projectName.textContent = project.name;
    projectContainer.appendChild(projectName);
    projectContainer.appendChild(projectDelete);
    projectsUi.appendChild(projectContainer);
  });

  // Call the renderTodo function to update the todos in the DOM
  renderTodo();
}

// Function to make the project active or inactive based on the active property
function makeProjectActive(project, projectContainer) {
  projectContainer.dataset.active = project.active;
}

// Function to select the first project of the projects array to make it active
// If all projects have data-active="false," then the first project will be selected
function firstProjectToActive(projects) {
  // If all projects have data-active="false," then the first project will be selected.
  // The every method will return true if all projects have data-active="false"
  if (projects.every((project) => project.active === false)) {
    // Set the first project to active
    projects[0] ? (projects[0].active = true) : null;
  }
}
