const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onSubmit);

function onSubmit(event) {
    event.preventDefault();
    const formEl = event.currentTarget;
    const inputEls = formEl.elements;

    if (inputEls.email.value === "" || inputEls.password.value === "") {
        window.alert("Всі поля мають бути заповнені!");
        return;
    }

    const formObject = {
        [inputEls.email.name]: inputEls.email.value,
        [inputEls.password.name]: inputEls.password.value
    };

    console.dir(formObject);
    formEl.reset();
}
