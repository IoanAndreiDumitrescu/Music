document.getElementById("birthdayDate").addEventListener("blur", function () {
    //Test the value of the input field and whether it matches the regular expression,     where val is the value extracted from the field
    if (!this.value.match(/^\d+\.?\d+$/)) {
        alert("error");
    }
}, false);

document.getElementById("phoneNumber").addEventListener("blur", function () {
    //Test the value of the input field and whether it matches the regular expression,     where val is the value extracted from the field
    if (!this.value.match(/^ [0 - 9] * $/)) {
        alert("Solo numeros");
    }
}, false);