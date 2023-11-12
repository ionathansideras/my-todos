// Import necessary functions
import { setTodoNameFlag, setTodoDetailsFlag } from "../main";

// Function to validate the input field for the project name
export function validateTodo(e) {
  // Check the target ID to determine which input is being validated
  if (e.target.id === "todo-name-input") {
    nameInput(e.target);
  } else if (e.target.id === "todo-details-input") {
    detailsInput(e.target);
  }
}

// Function to validate the name input
export function nameInput(e) {
  const regex = /\S/;

  // Check if the input value contains any non-whitespace character
  if (!regex.test(e.value) || e.value.length > 15) {
    // Set outline color to red if validation fails
    e.style.outlineColor = "rgb(255, 70, 70)";
    document.querySelector(
      ".name-range"
    ).textContent = `${e.value.length} / 15`;
    document.querySelector(".name-range").style.color = "rgb(255, 70, 70)";
    setTodoNameFlag(false);
  } else {
    // Set outline color to green if validation passes
    e.style.outlineColor = "rgb(70, 255, 70)";
    document.querySelector(
      ".name-range"
    ).textContent = `${e.value.length} / 15`;
    document.querySelector(".name-range").style.color = "rgb(70, 255, 70)";
    setTodoNameFlag(true);
  }
}

// Function to validate the details input
export function detailsInput(e) {
  const regex = /\S/;

  // Check if the input value contains any non-whitespace character
  if (!regex.test(e.value) || e.value.length > 50) {
    // Set outline color to red if validation fails
    e.style.outlineColor = "rgb(255, 70, 70)";
    document.querySelector(
      ".details-range"
    ).textContent = `${e.value.length} / 50`;
    document.querySelector(".details-range").style.color = "rgb(255, 70, 70)";
    setTodoDetailsFlag(false);
  } else {
    // Set outline color to green if validation passes
    e.style.outlineColor = "rgb(70, 255, 70)";
    document.querySelector(
      ".details-range"
    ).textContent = `${e.value.length} / 50`;
    document.querySelector(".details-range").style.color = "rgb(70, 255, 70)";
    setTodoDetailsFlag(true);
  }
}
