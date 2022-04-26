const categoriesEl = document.querySelector(`#categories`);
console.log(`Number of categories: ${categoriesEl.childElementCount}`);

const nameCategotiesEl = categoriesEl.querySelectorAll('.item');
nameCategotiesEl.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.childElementCount}`);
    
});
