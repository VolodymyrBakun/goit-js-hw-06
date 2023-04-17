function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {

  const boxesToCreate = Number(inputEl.value);
  let box = `<div style="background-color: ${getRandomHexColor()}; width: 30px; height: 30px;"></div>`;


  for (let i = 1; i < boxesToCreate; i += 1) {
    let size = (30 + (i * 10));
    let color = getRandomHexColor();

    box += `<div style="background-color: ${color}; width: ${size}px; height: ${size}px;"></div>`;

  }
boxEl.innerHTML = box;
};

function destroyBoxes() {
  boxEl.innerHTML = "";
}

const inputEl = document.querySelector('input')
const btnCreateEl = document.querySelector('[data-create]');
const btnDestroyEl = document.querySelector('[data-destroy]');
const boxEl = document.querySelector('#boxes');

btnCreateEl.addEventListener('click', createBoxes);
btnDestroyEl.addEventListener('click', destroyBoxes)
