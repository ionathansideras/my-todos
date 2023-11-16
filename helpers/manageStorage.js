import { getProjects } from "../main";
// this file contains functions to manage local storage
export function getLocalStorage() {
  const projects = getProjects();
  // if there is a projects array in local storage it will assign it to the projects variable
  if (localStorage.getItem("projects")) {
    const savedProjects = JSON.parse(localStorage.getItem("projects"));
    projects.push(...savedProjects);
    // this renders the projects again
  } else {
    const welcomeProject = getDefaultProjectData();
    // if there is no projects array in local storage it will create one
    localStorage.setItem("projects", JSON.stringify(welcomeProject));
    projects.push(...welcomeProject);
  }
}
// this function saves the projects array to local storage
export function saveToLocalStorage() {
  const projects = getProjects();
  // this saves the projects array to local storage
  localStorage.setItem("projects", JSON.stringify(projects));
}

function getDefaultProjectData() {
  return [
    {
      id: "welcome-project",
      name: "General",
      todos: [
        {
          id: "1",
          name: "Welcome",
          details:
            "In this website you can create projects and add todo's to them, enjoy!",
          priority: "Not Important",
          deadline:
            new Date().getDate() +
            "-" +
            (new Date().getMonth() + 1) +
            "-" +
            new Date().getFullYear(),
        },
      ],
      active: true,
    },
  ];
}
