const userEmail = document.getElementById(`emailWrapper`).getElementsByTagName(`input`)[0];
const userPassword = document.forms[0][1];
const registerBtn = document.getElementById(`sendForm`);

registerBtn.addEventListener(`click`, function(event){
    event.preventDefault();
    console.log(isEmailValid(userEmail) ? `email is valid` : `email is not valid`)
});

function isEmptyInput (elem) {
    return !elem.value
}

function isEmailValid(elem){
    let regEx = / ^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i;
    return regEx.test(elem.value)
}

function isPasswordValid (elem){
    if(elem.value.length >= 6 ){

    }
}