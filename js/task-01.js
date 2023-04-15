const elCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${elCategories.length}`);



elCategories.forEach(function qwer (el) {
const category = el.querySelector("h2")
const numberOfElements = el.querySelectorAll('li')
    console.log(`Category: ${category.textContent}`);
    console.log(`Elements: ${numberOfElements.length}`);
})
