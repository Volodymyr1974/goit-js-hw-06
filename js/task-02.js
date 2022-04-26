const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const makeElements = (ingredients) => {
  return ingredients.map((ingredient) => {
    const navItemEl = document.createElement('li');
    navItemEl.classList.add('item');
    navItemEl.textContent = ingredient;
    console.log(navItemEl);
    return navItemEl;
  });
};
const elements = makeElements(ingredients);

const ingredientsEl = document.querySelector('#ingredients');

ingredientsEl.append(...elements);



 
