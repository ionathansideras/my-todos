// Import necessary functions and resources
import { getProjects, setEditIds } from "../main";
import { deleteTodo } from "../scripts/deleteTodo";
import { showCover } from "./showHideCover";
import { showTodoForm } from "./showHideTodoForm";
import { setFormValues } from "./setFormValues";
import deleteImg from "../imgs/trash.png";
import editSrc from "../imgs/edit.svg";
import { nameInput, detailsInput } from "../scripts/validateTodo";

// Function to render the todo list to the DOM based on the active project
export function renderTodo() {
  // Get the projects array from local storage
  const projects = getProjects();

  // Find the active project from the projects array
  const activeProject = projects.find((project) => project.active === true);

  // Get the todos array from the active project
  const todos = activeProject?.todos;

  // Get the todo list element from the DOM and clear it
  const todoList = document.querySelector("main");
  todoList.innerHTML = "";

  // Loop through the todos array and create a div for each todo
  todos?.forEach((todo) => {
    // Create the section for the todo
    const todoContainer = document.createElement("section");
    todoContainer.classList.add("todo");

    // Create the main div for the todo
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-div");

    // Create the div for the todo name
    const todoName = document.createElement("h2");
    todoName.classList.add("todo-name");
    todoName.textContent = todo.name;

    // Create the div for the todo delete button
    const todoDelete = document.createElement("img");
    todoDelete.classList.add("delete-todo");
    todoDelete.src = deleteImg;

    // Add an event listener to the delete button
    todoDelete.addEventListener("click", () => {
      // Call the deleteTodo function and pass the todo id to it
      deleteTodo(todo.id, activeProject.id);
    });

    // Create the todo edit button
    const todoEdit = document.createElement("button");
    todoEdit.setAttribute("id", "edit");
    todoEdit.textContent = "Edit";

    // Add an event listener to the edit button
    todoEdit.addEventListener("click", () => {
      // Call the editTodo function and pass the todo id to it
      showTodoForm();
      showCover(50);
      document.querySelector(".todo-form").classList.add("edit");
      setEditIds({
        todoId: todo.id,
        projectId: activeProject.id,
      });
      setFormValues(todo);

      // Validate input using the nameInput and detailsInput functions
      const name = document.querySelector("#todo-name-input");
      const details = document.querySelector("#todo-details-input");
      nameInput(name);
      detailsInput(details);
    });

    // Create the div for deadline
    const todoDeadline = document.createElement("p");
    todoDeadline.classList.add("todo-deadline");
    todoDeadline.textContent = todo.deadline;

    // Create the edit icon
    const editImg = document.createElement("img");
    editImg.src = editSrc;

    // Create the div for details
    const todoDetails = document.createElement("p");
    todoDetails.classList.add("todo-details");
    todoDetails.textContent = todo.details;

    // Create the span for priority color
    const priorityColor = document.createElement("span");
    const priorityClass = todo.priority.toLowerCase().replace(" ", "-");
    priorityColor.classList.add("todo-priority");
    priorityColor.classList.add(priorityClass);

    // Add the edit icon to the edit button
    todoEdit.appendChild(editImg);

    // Create the container for todo buttons
    const todoButtonsContainer = document.createElement("div");
    todoButtonsContainer.classList.add("todo-buttons-container");
    todoButtonsContainer.appendChild(todoDeadline);
    todoButtonsContainer.appendChild(todoEdit);

    // Append everything to the todo container
    todoDiv.appendChild(todoDelete);
    todoDiv.appendChild(priorityColor);
    todoDiv.appendChild(todoName);
    todoDiv.appendChild(todoDetails);
    todoDiv.appendChild(todoButtonsContainer);

    todoContainer.appendChild(todoDiv);
    todoList.appendChild(todoContainer);
  });
}
