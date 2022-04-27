function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const btnChangeEl = document.querySelector('.change-color');
const colorEl = document.querySelector('.color');
const bodyColorEl = document.querySelector('body');


btnChangeEl.addEventListener('click', ongetRandomHexColor);
function ongetRandomHexColor() {
  colorEl.textContent = `${getRandomHexColor()}`;
  bodyColorEl.style.backgroundColor = `${getRandomHexColor()}`;
};
