const pressBtn = document.querySelector('#counter');

let counterValue = 0;

const decrementEL = document.querySelector(`[data-action = "decrement"]`);
const incrementEL = document.querySelector(`[data-action = "increment"]`);
const valueEL = document.querySelector("#value");


pressBtn.addEventListener('click', ((event) => {
    
    if (event.target.nodeName !== "BUTTON") {
        return;
    };
    switch (event.target.dataset.action) {
    case 'decrement':
            counterValue -= 1;
            valueEL.innerText = counterValue;
     break;

    case 'increment':
            counterValue += 1;
            valueEL.innerText = counterValue;
    break;

    default:
    break;
  }
    
}));
