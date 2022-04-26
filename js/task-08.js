const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password },
    } = event.currentTarget;
    
    console.log(email.value); console.log(password.value);
    if (email.value === "" || password.value === "") {
        return alert("Error! fill in all the fields");
    };

    const FormData = {
        name: email.value,
        password: password.value,
    };
    console.log(FormData);
    event.currentTarget.reset();
   
};
