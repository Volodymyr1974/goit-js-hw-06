
const divEl = document.querySelector('#boxes');
const inputEl = document.querySelector("input");
const dataGreateEl = document.querySelector('button[data-create]');
const dataDestoryEl = document.querySelector('button[data-destroy]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

let amount = 0;
  
function createBoxes(amount) {
  let boxsize = 30;
  const arraydiv = [];
  for (let i = 1; i <= amount; i += 1) {
    const newDivEl = document.createElement('div');
       newDivEl.style.width = `${boxsize}px`;
    newDivEl.style.height = `${boxsize}px`;
    newDivEl.style.backgroundColor = getRandomHexColor();
    newDivEl.style.marginTop = '10px';
    newDivEl.classList = 'box';
    arraydiv.push(newDivEl);
    boxsize += 10;
   
  }; divEl.append(...arraydiv);
 
};
 
dataGreateEl.addEventListener('click', onCreateBoxes);
function onCreateBoxes() {
  destroyBoxes();
  amount =  inputEl.value;
  createBoxes(amount);
};

  

dataDestoryEl.addEventListener('click', destroyBoxes);
function destroyBoxes() {
  const boxes = divEl.querySelectorAll('.box');
     for (const box of boxes) {
    box.remove();
  }
};

  
