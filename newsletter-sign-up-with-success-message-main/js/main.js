let submitButton = document.querySelector(".container .content form input[type='submit']");
let field = document.querySelector(".container .content form input[type='text']");
let errorMessage = document.querySelector(".container .content form p");
let form = document.querySelector(".form");
let successMessage = document.querySelector(".success");
let successMessageEmail = document.querySelector(".email");

submitButton.addEventListener("click", function name() {
    event.preventDefault();
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (field.value === "" || !field.value.match(validRegex)) {
        errorMessage.style.cssText = "display: inline-block";
    } else {
        form.style.cssText = "display: none";
        successMessage.style.cssText = "display: flex";
        successMessageEmail.innerHTML = field.value;
    }
});