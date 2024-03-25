
const emailAddress = document.querySelector("#emailAddress");

emailAddress.addEventListener("input", function(event) {
    if (emailAddress.validity.typeMismatch) {
        emailAddress.setCustomValidity("Please enter a valid email address.");
    } else if (emailAddress.validity.valueMissing) {
        emailAddress.setCustomValidity("Email field cannot be empty.");
    } else {
        emailAddress.setCustomValidity("");
    }
});

const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");

function validateInput(input) {
    input.addEventListener("input", function() {
        if(input.value === "") {
            input.setCustomValidity("This can't be empty.");
        } else {
            input.setCustomValidity("");
        }
    });
}

// Call for the firstName and lastName inputs
validateInput(firstName);
validateInput(lastName);


document.addEventListener('DOMContentLoaded', (event) => {
    const birthdayDate = document.querySelector("#birthdayDate");
    birthdayDate.required = true;

    // Auto-adding slashes after the date and month
    birthdayDate.addEventListener("input", (event) => {
        var rawValue = event.target.value;
        if (rawValue.includes('/')) {
            rawValue = rawValue.replace(/\D/g, '');
        }
        const day = rawValue.slice(0, 2);
        const month = rawValue.slice(2, 4);
        const year = rawValue.slice(4);
        event.target.value = day + (month ? '/' + month + '/' + year : '');
    });

    birthdayDate.addEventListener("invalid", (event) => {
        if (birthdayDate.validity.patternMismatch) {
            event.target.setCustomValidity('Invalid Date Format, expected DD/MM/YYYY');
        } else if (birthdayDate.validity.valueMissing) {
            event.target.setCustomValidity('This field must be filled.');
        } else {
            event.target.setCustomValidity('');
        }
    });

    document.querySelector('form').addEventListener("submit", function(event) {
        if (!birthdayDate.checkValidity()) {
            event.preventDefault();
        }
    });
});