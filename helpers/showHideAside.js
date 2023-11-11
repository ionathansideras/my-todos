import { showCover, hideCover } from "./showHideCover.js";
// in this file we will create a function that will show or hide the aside
export function showHideAside() {
  // This gets the aside element
  const menu = document.getElementById("mobile-menu");
  // This checks if the aside is visible
  if (menu.classList.contains("menu-open")) {
    // This removes the aside-hide class
    menu.classList.remove("menu-open");
    hideCover();
  } else {
    // This adds the aside-hide class
    menu.classList.add("menu-open");
    showCover(1);
  }
}
