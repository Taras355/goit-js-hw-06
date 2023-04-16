const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onBlur);

function onBlur(event) {
    const el = event.currentTarget;
    if (el.value.length === Number(el.dataset.length)) {
        el.classList.add("valid");
        el.classList.remove("invalid");
    } else if (el.value.length === 0) {
        el.classList.remove("valid");
        el.classList.remove("invalid");
    } else {
        el.classList.add("invalid");
        el.classList.remove("valid");
    }
}
