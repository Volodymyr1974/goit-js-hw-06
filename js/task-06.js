const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInput);

function onInput(event) {
    
    if (event.currentTarget.value.length === Number(event.currentTarget.dataset.length)) {
        input.classList.remove("invalid");
        input.classList.add("valid");
    } else
    if (event.currentTarget.value.length !== Number(event.currentTarget.dataset.length)){
        input.classList.remove("valid");
        input.classList.add("invalid");
        };
    if (event.currentTarget.value.length === 0) {
        input.classList.remove("valid","invalid");
    }
    // switch (event.currentTarget.value.length) {
    //     case Number(event.currentTarget.dataset.length):
    //         input.classList.remove("invalid");
    //         input.classList.add("valid");
    //         break;

    //     default:
    //     input.classList.remove("valid");
    //     input.classList.add("invalid");
    //         break;
    // };
};

