import { getProjects } from "../main";
import { renderProjectsDom } from "../helpers/renderProjectDom";
import { saveToLocalStorage } from "../helpers/manageStorage";
// This function deletes a project from the projects array
export function deleteProject(id) {
  const projects = getProjects();
  // This filters the projects array and returns a new array without the project with
  const filteredProjects = projects.filter((project) => project.id !== id);
  // This replaces the projects array with the filteredProjects array
  projects.splice(0, projects.length, ...filteredProjects);
  // This renders the projects again
  renderProjectsDom();
  // This saves the projects array to local storage
  saveToLocalStorage(projects);
}
