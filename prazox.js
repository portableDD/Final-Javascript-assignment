const Praform = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");

Praform.addEventListener("submit", function (e) {
    e.preventDefault();
    checkInput();
});
function isValidPassword(password) {
    return /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/.test(password);
  }
function isEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


function checkInput() {
    const passwordValue = password.value.trim();
    const emailValue = email.value.trim();
    //  email check
    if (emailValue === "") {
        setErrorFor(email, "email cannot be blank");
    }else if(!isEmail(emailValue)){
        setErrorFor(email, "email must inclue @ and .com");
    } else {
        setSuccessFor(email);
    }

        // password check
    if (passwordValue === "") {
        setErrorFor(password, "Password cannot be blank");
    }else if(!isValidPassword(passwordValue)){
        setErrorFor(password, "Password must contain letters, number and special characters");
    }else if(passwordValue < 8){
        setErrorFor(password, "Password cannot be less than 8");
    } else {
        setSuccessFor(password);
    }

}
function setErrorFor(input, message) {
const formcontrol = input.parentElement;
const small = formcontrol.querySelector("small");

small.innerText = message;
formcontrol.className = "form-control error";
}
function setSuccessFor(input) {
const formcontrol = input.parentElement;
formcontrol.className = "form-control success";
}