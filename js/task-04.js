const counterValueEl = document.getElementById('value');
const btnUpEl = document.querySelector('[data-action="increment"]');
const btnDownEl = document.querySelector('[data-action="decrement"]');
let counterValue = 0 ;
counterValueEl.textContent = counterValue;


btnUpEl.addEventListener('click' , plusNumber);
btnDownEl.addEventListener('click' , minusNumber);

function plusNumber () {
    counterValue += 1 ;
    counterValueEl.textContent = counterValue;
};

function minusNumber () {
   counterValue -= 1 ;
  counterValueEl.textContent = counterValue;
}