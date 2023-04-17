function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  btnEl: document.querySelector(".change-color"),
  showColorEl: document.querySelector(".color"),
};

const bodyEl = document.querySelector("body");

refs.btnEl.addEventListener("click", changeBgColor);

function changeBgColor() {
  const bgColor = getRandomHexColor();
  refs.showColorEl.textContent = bgColor;
  bodyEl.style.backgroundColor = bgColor;
}
