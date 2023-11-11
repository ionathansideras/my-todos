// this function sets the form to empty
export function setFromToEmpty() {
  document.querySelector("#todo-name-input").value = "";
  document.querySelector("#todo-details-input").value = "";
  document.querySelector("#todo-priority-input").value = "Not Important";
  document.querySelector("#todo-deadline-input").value = "";
}
