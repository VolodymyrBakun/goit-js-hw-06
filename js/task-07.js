const refs = {
  sizeControlerEl: document.querySelector("#font-size-control"),
  textToResize: document.querySelector("#text"),
};

refs.sizeControlerEl.addEventListener("input", resizeText);

function resizeText(event) {
  refs.textToResize.style.fontSize = `${event.target.value}px`;
}
