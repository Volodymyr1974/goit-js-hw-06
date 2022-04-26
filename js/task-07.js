const inputEL = document.querySelector('#font-size-control');
const textEL = document.querySelector('#text');

inputEL.addEventListener('input', onInput);


function onInput(event) {
        textEL.style.fontSize = `${event.currentTarget.value}px`;
};