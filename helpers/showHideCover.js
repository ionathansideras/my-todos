// those functions are used to show and hide the cover
export function showCover(z) {
  document.querySelector(".cover").classList.add("cover-visible");
  document.querySelector(".cover").style = `z-index: ${z}`;
}

export function hideCover() {
  document.querySelector(".cover").classList.remove("cover-visible");
}
