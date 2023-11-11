import { setProjectFlag } from "../main.js";
// this validates the input field for the project name
export function validateProject(e) {
  // Define a regular expression to match any non-whitespace character
  const regex = /\S/;
  if (!regex.test(e.target.value)) {
    e.target.style.outlineColor = "red";
    // this sets the projectFlag to false so we can't submit the form
    setProjectFlag(false);
  } else {
    e.target.style.outlineColor = "green";
    // this sets the projectFlag to true so we can submit the form
    setProjectFlag(true);
  }
}
