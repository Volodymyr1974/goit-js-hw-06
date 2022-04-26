const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elements = [];

ingredients.forEach((el) => {
  const navItemEl = document.createElement('li');
  navItemEl.classList.add('item');
  navItemEl.textContent = el;

  elements.push(navItemEl);
  
});

const ingredientsEl = document.querySelector('#ingredients');

ingredientsEl.append(...elements);



 
