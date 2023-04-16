const categoriesEl = document.querySelector("#categories");

console.log("Number of categories: ", categoriesEl.children.length);

[...categoriesEl.children].forEach((liEl) => {
    console.log(`Category: ${liEl.firstElementChild.textContent}`);
    console.log("Elements: ", liEl.lastElementChild.children.length);
});
