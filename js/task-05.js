const inputFieldEl = document.getElementById('name-input');
const greatingEl = document.getElementById('name-output');

inputFieldEl.addEventListener('input' , greating);

function greating(event) {
    
    greatingEl.textContent = event.currentTarget.value ;

    if (greatingEl.textContent === "") {
        greatingEl.textContent = `Anonymous`
    }
}