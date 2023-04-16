const textEl = document.querySelector("#text");
const inputEl = document.querySelector("#font-size-control");

inputEl.addEventListener("input", onResize);

function onResize(event) {
    const el = event.currentTarget;
    textEl.style.fontSize = `${el.value}px`;
}
