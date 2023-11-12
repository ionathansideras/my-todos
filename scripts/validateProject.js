// Import necessary function
import { setProjectFlag } from "../main.js";

// Function to validate the input field for the project name
export function validateProject(e) {
  // Define a regular expression to match any non-whitespace character
  const regex = /\S/;

  // Check if the input value contains any non-whitespace character
  if (!regex.test(e.target.value)) {
    // Set outline color to red if validation fails
    e.target.style.outlineColor = "red";

    // Set projectFlag to false to indicate invalid input
    setProjectFlag(false);
  } else {
    // Set outline color to green if validation passes
    e.target.style.outlineColor = "green";

    // Set projectFlag to true to indicate valid input
    setProjectFlag(true);
  }
}
