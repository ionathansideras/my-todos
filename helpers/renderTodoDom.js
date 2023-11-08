import { getProjects } from "../main";
import { deleteTodo } from "../scripts/deleteTodo";
// this function will render the todo list to the DOM
// based on the active project
export function renderTodo() {
  // this gets the projects array from local storage
  const projects = getProjects();
  // this gets the active project from the projects array
  const activeProject = projects.find((project) => project.active === true);
  // this gets the todos array from the active project
  const todos = activeProject.todos;
  // this gets the todo list from the DOM and clears it
  const todoList = document.querySelector("main");
  todoList.innerHTML = "";
  // this loops through the todos array and creates a div for each todo
  todos.forEach((todo) => {
    const todoContainer = document.createElement("div");
    todoContainer.classList.add("todo");
    const todoName = document.createElement("h2");
    todoName.classList.add("todo-name");
    const todoDelete = document.createElement("button");
    todoDelete.classList.add("delete");
    todoDelete.textContent = "Delete";
    todoDelete.addEventListener("click", () => {
      // this calls the deleteTodo function and passes the todo id to it
      deleteTodo(todo.id, activeProject.id);
      console.log(getProjects());
    });
    const todoDate = document.createElement("p");
    todoDate.classList.add("todo-date");
    todoDate.textContent = todo.date;
    todoName.textContent = todo.name;
    todoContainer.appendChild(todoName);
    todoContainer.appendChild(todoDate);
    todoContainer.appendChild(todoDelete);
    todoList.appendChild(todoContainer);
  });
}
