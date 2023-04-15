const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector("#ingredients")

const list = [];

ingredients.forEach(function createLi (el) { 

const newLi = document.createElement("li");
newLi.textContent = el;
newLi.classList.add("item");

list.push(newLi);}
)

listEl.append(...list)