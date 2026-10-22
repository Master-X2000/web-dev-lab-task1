// Toggle Variables
const registerBtn = document.querySelector('.register-btn'),
     loginBtn = document.querySelector('.login-btn'),
     prompt = document.querySelector('.prompt'),
     promptBtn = document.querySelector('.prompt-btn'),
     socialIconBtn = document.querySelectorAll('.social-icon a'),
     container = document.querySelector('.container');

//Login Variables
const loginForm = document.querySelector('.login-form'),
     loginUsername = document.querySelector('.login-username'),
     loginPassword = document.querySelector('.login-password'),
     loginSubmitBtn = document.querySelector('.login-submit-btn'),
     dashboardLink = document.querySelector('.dashboard-link');

//Registration Variables
const registerForm = document.querySelector('.register-form'),
     registerUsername = document.querySelector('.register-username'),
     registerEmail = document.querySelector('.register-email'),
     registerPassword = document.querySelector('.register-password'),
     registerSubmitBtn = document.querySelector('.register-submit-btn');

let errorCount = 0; // initializing the error counter;

// Display prompt message when the social icon is clicked
socialIconBtn.forEach(socialIcon => {
    socialIcon.addEventListener('click', event => {
        const promptContent = document.querySelector('.prompt-content');
        promptContent.innerHTML = `<h1>Sorry!</h1> 
                                    <p>This feature is not available at the moment, <br> please use the login form to access your account.</p>`;
        prompt.classList.add('show');   

        promptBtn.addEventListener("click", event => {
            prompt.classList.remove("show");
        });
    });
});


// Add active to the container for the registration/login transition
registerBtn.addEventListener('click', event => { 
    container.classList.add('active');
});

// Remove active from the container for the registration/login transition
loginBtn.addEventListener('click', event => {
    container.classList.remove('active');
});

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

// Targeting the login form validation
loginForm.addEventListener('submit', event => {
    event.preventDefault();

    validateLoginInputs();

    if(errorCount === 0 ) { // Move to dashboard if no errors
        dashboardLink.click();
    }

});

// Validate the login form inputs 
const validateLoginInputs = () => {
    // Getting the input values
    const loginUsernameValue = loginUsername.value.trim(); 
    const loginPasswordValue = loginPassword.value.trim(); 
    errorCount = 0;

    if(loginUsernameValue === "") { // Testing the Username value
        setError(loginUsername, "The username is Required");
        errorCount++;
    };

    if(loginPasswordValue === "") {
        setError(loginPassword, "The password is required");
        errorCount++;
    };

    /* if(errorCount === 0) {
        const loginFormValues = {
            Username: loginUsernameValue,
            Password: loginPasswordValue,
        };

        console.log(loginFormValues);
    }; */

};


// Targeting the registration form validation
registerForm.addEventListener('submit', event => {
    event.preventDefault();

    validateRegistrationInputs();

    if(errorCount === 0 ) { // Move to dashboard if no errors
        prompt.classList.add("show");
        const promptContent = document.querySelector('.prompt-content');
        promptContent.innerHTML = `<h1>Registration Complete<span>!</span></h1>
                                    <p>
                                        Thank you for registering.😁😁 <br> Your account has been successfully created🫴.
                                    </p>`;
        prompt.classList.add('show'); 
        
        promptBtn.addEventListener("click", event => {
            prompt.classList.remove("show");
            loginBtn.click();
        });
    };

});

// Validate the Email Using Regular expressions
const validEmail = (email) => {
    const regex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/g;
    const isValid = regex.test(email.trim().toLowerCase());
    return isValid;
}

// Validate the registration form inputs 
const validateRegistrationInputs = () => {
    // Getting the input values
    const registerUsernameValue = registerUsername.value.trim(); 
    const registerEmailValue = registerEmail.value.trim(); 
    const registerPasswordValue = registerPassword.value.trim(); 
    errorCount = 0;

    if(registerUsernameValue === "") { // Testing the Username value
        setError(registerUsername, "The username is Required");
        errorCount++;
    };

    if(registerEmailValue === "") {// Testing the email value
        setError(registerEmail, "The email is Required");
        errorCount++;
    } else if(!validEmail(registerEmailValue)) {
        setError(registerEmail, "Enter a valid Email Address");
        errorCount++;
    }

    if(registerPasswordValue === "") {// Testing the password value
        setError(registerPassword, "The password is required");
        errorCount++;
    };

    /* if(errorCount === 0) {
        const loginFormValues = {
            Username: loginUsernameValue,
            Password: loginPasswordValue,
        };

        console.log(loginFormValues);
    }; */

};
