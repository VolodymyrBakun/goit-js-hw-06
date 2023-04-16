const inputEl = document.getElementById("validation-input");
const rightLength = Number(inputEl.getAttribute("data-length"));

inputEl.addEventListener("blur", checkLength);

function checkLength(event) {
  if (rightLength === event.currentTarget.value.trim().length) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}
