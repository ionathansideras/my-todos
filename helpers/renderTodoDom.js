import { getProjects } from "../main";
import { deleteTodo } from "../scripts/deleteTodo";
import { editTodo } from "../scripts/editTodo";
// this function will render the todo list to the DOM
// based on the active project
export function renderTodo() {
  // this gets the projects array from local storage
  const projects = getProjects();
  // this gets the active project from the projects array
  const activeProject = projects.find((project) => project.active === true);
  // this gets the todos array from the active project
  const todos = activeProject?.todos;
  // this gets the todo list from the DOM and clears it
  const todoList = document.querySelector("main");
  todoList.innerHTML = "";
  // this loops through the todos array and creates a div for each todo
  todos?.forEach((todo) => {
    // creates the div for the todo
    const todoContainer = document.createElement("div");
    todoContainer.classList.add("todo");
    // creates the div for the todo name
    const todoName = document.createElement("h2");
    todoName.classList.add("todo-name");
    todoName.textContent = todo.name;
    // creates the div for the todo delete button
    const todoDelete = document.createElement("button");
    todoDelete.classList.add("delete");
    todoDelete.textContent = "Delete";
    // this adds an event listener to the delete button
    todoDelete.addEventListener("click", () => {
      // this calls the deleteTodo function and passes the todo id to it
      deleteTodo(todo.id, activeProject.id);
    });
    // creates the todo edit button
    const todoEdit = document.createElement("button");
    todoEdit.classList.add("edit");
    todoEdit.textContent = "Edit";
    // this adds an event listener to the edit button
    todoEdit.addEventListener("click", () => {
      // this calls the editTodo function and passes the todo id to it
      editTodo(todo.id, activeProject.id);
    });
    // creates the div for deadline
    const todoDeadline = document.createElement("p");
    todoDeadline.classList.add("todo-deadline");
    todoDeadline.textContent = todo.deadline;
    // creates the div for details
    const todoDetails = document.createElement("p");
    todoDetails.classList.add("todo-details");
    todoDetails.textContent = todo.details;
    // creates the div for priority
    const todoPriority = document.createElement("p");
    todoPriority.classList.add("todo-priority");
    todoPriority.textContent = todo.priority;
    // appends everything to the todo container
    todoContainer.appendChild(todoName);
    todoContainer.appendChild(todoDetails);
    todoContainer.appendChild(todoPriority);
    todoContainer.appendChild(todoDeadline);
    todoContainer.appendChild(todoEdit);
    todoContainer.appendChild(todoDelete);
    todoList.appendChild(todoContainer);
  });
}
