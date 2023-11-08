import { getProjects } from "../main";
import { renderProjectsDom } from "./renderProjectDom";
// This function handles the active project
// it takes an event as a parameter and then loops through the projects array
// and checks if the clicked project is the same as the project in the projects array
// if it is the same it sets the active property to true and if it is not the same
// it sets the active property to false
export function handleActives(e) {
  let projects = getProjects();
  projects.forEach((project) => {
    if (project.id === e.target.parentNode.dataset.id) {
      project.active = true;
    } else {
      project.active = false;
    }
  });
  // This renders the projects to the DOM so the active project can be highlighted
  renderProjectsDom();
}
