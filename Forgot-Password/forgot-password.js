// Getting the input variables
const username =  document.querySelector('.usename'),
    newPassword =  document.querySelector('.new-password'),
    confirmPassword =  document.querySelector('.confirm-password'),
    form =  document.querySelector('.form'),
    loginLink =  document.querySelector('.login-link');

let errorCount = 0; // initializing the error counter;

// Display error messages
const setError = (element, message) => { 
    const inputBox = element.parentElement;
    const errorDisplay = inputBox.querySelector('.error');

    errorDisplay.textContent = message;
    inputBox.classList.add('fail');

    element.addEventListener('click', event => {
        inputBox.classList.remove('fail');
    });
};

// Targeting the form validation
form.addEventListener('submit', event => {
    event.preventDefault();

    validateInputs();

    if(errorCount === 0 ) { // Move to login page if no errors
        loginLink.click();
    }

});

// Validate the form inputs 
const validateInputs = () => {
    // Getting the input values
    const usernameValue = username.value.trim(); 
    const newPasswordValue = newPassword.value.trim(); 
    const confirmPasswordValue = confirmPassword.value.trim(); 
    errorCount = 0;

    if(usernameValue === "") { // Testing the Username value
        setError(username, "The username is Required");
        errorCount++;
    };

    if(newPasswordValue === "") {
        setError(newPassword, "The new password is required");
        errorCount++;
    };

    if(confirmPasswordValue === "") {
        setError(confirmPassword, "Confirming the password is required");
        errorCount++;
    } else if (confirmPasswordValue !== newPasswordValue) {
        setError(confirmPassword, "Passwords doesn't match");
    };

};