import { saveToLocalStorage } from "../helpers/manageStorage";
import { getProjects } from "../main";
import { v4 as uuidv4 } from "uuid";
import { renderTodo } from "../helpers/renderTodoDom";
// this function will add a todo to the active project
export function addTodo() {
  // this gets the projects array from main.js
  let projects = getProjects();
  // this creates a todo object
  const todo = {
    // this creates a unique id for the todo
    id: uuidv4(),
    name: document.querySelector(".todo-input").value,
    date: new Date().toLocaleDateString(),
  };
  // here we add the todo to the active project
  projects.forEach((project) => {
    if (project.active) {
      project.todos.push(todo);
    }
  });
  // this renders the todo list to the DOM
  renderTodo();
  console.log(projects);
  // this saves the projects array to local storage
  saveToLocalStorage();
}
