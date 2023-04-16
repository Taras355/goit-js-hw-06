const inputEl = document.querySelector("#name-input");
const nameEl = document.querySelector("#name-output");

const DEFAULT_NAME = nameEl.textContent;

inputEl.addEventListener("input", greetName);

function greetName(event) {
    const name = event.currentTarget.value;
    nameEl.textContent = name;
    if (name === "") {
        nameEl.textContent = DEFAULT_NAME;
    }
}
