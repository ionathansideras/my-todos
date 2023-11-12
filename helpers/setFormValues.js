// this function sets the form values to the todo values
export function setFormValues(todo) {
  const todoNameInput = document.querySelector("#todo-name-input");
  todoNameInput.value = todo.name;
  const todoDetailsInput = document.querySelector("#todo-details-input");
  todoDetailsInput.value = todo.details;
  const todoPriorityInput = document.querySelector("#todo-priority-input");
  todoPriorityInput.value = todo.priority;
  const todoDeadlineInput = document.querySelector("#todo-deadline-input");
  todoDeadlineInput.value = todo.deadline;
}
