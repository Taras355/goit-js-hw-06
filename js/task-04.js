let counterValue = 0;

const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');
const counterEl = document.querySelector("#value");

decrementEl.addEventListener("click", decrease);
incrementEl.addEventListener("click", increase);

function decrease() {
    counterValue -= 1;
    counterEl.innerHTML = counterValue;
}

function increase() {
    counterValue += 1;
    counterEl.innerHTML = counterValue;
}
