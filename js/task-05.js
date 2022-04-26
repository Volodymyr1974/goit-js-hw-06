
  
const refs = {
    input: document.querySelector("#name-input"),
    nameLabel: document.querySelector("#name-output"),
};

function onInput(event){
    console.log(event.currentTarget.value);
    refs.nameLabel.textContent = event.currentTarget.value;
    if (event.currentTarget.value === "") {
        refs.nameLabel.textContent = "Anonymous";
    };

};

refs.input.addEventListener('input', onInput);