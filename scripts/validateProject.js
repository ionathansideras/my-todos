// Import necessary function
import { setProjectFlag } from "../main.js";

// Function to validate the input field for the project name
export function validateProject(e) {
  // Define a regular expression to match any non-whitespace character
  const regex = /\S/;

  // Check if the input value contains any non-whitespace character
  if (!regex.test(e.value) || e.value.length > 20) {
    // Set outline color to red if validation fails
    e.style.outlineColor = "red";

    // Set color and content for the project range indicator
    document.querySelector(".project-range").style.color = "rgb(255, 70, 70)";
    document.querySelector(
      ".project-range"
    ).textContent = `${e.value.length} / 20`;

    // Set projectFlag to false to indicate invalid input
    setProjectFlag(false);
  } else {
    // Set outline color to green if validation passes
    e.style.outlineColor = "rgb(70, 255, 70)";

    // Set color and content for the project range indicator
    document.querySelector(".project-range").style.color = "rgb(70, 255, 70)";
    document.querySelector(
      ".project-range"
    ).textContent = `${e.value.length} / 20`;

    // Set projectFlag to true to indicate valid input
    setProjectFlag(true);
  }

  // Toggle visibility of the project range indicator based on input length
  if (e.value.length === 0) {
    document.querySelector(".project-range").style.visibility = "hidden";
  } else {
    document.querySelector(".project-range").style.visibility = "visible";
  }
}
