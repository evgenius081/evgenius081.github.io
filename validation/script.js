const userEmail = document.getElementById(`emailWrapper`).getElementsByTagName(`input`)[0];
const userPassword = document.forms[0][1];
const registerBtn = document.getElementById(`sendForm`);
const registerForm = document.getElementById(`signIn`);
const formValid = true;

userPassword.addEventListener(`click`, inputHintClickHandler);
userEmail.addEventListener(`click`, inputHintClickHandler);

function inputHintClickHandler(){
    if(this.nextElementSibling){
        this.nextElementSibling.remove();
    }
}

function isFormValid(){
    if(!isEmailValid(userEmail)){
        makeHintError(userEmail, `email is not valid`);
        formValid = false
    }
    if(isEmptyInput(userEmail)){
        makeHintError(userEmail, `emai is required!`);
        formValid = false
    }
    let passErrorCode = isPasswordValid(userPassword);
    if(passErrorCode){
        if(isEmptyInput(userPassword)){
            makeHintError(userPassword, `password is required`);
        }else if( passErrorCode === 2){
            makeHintError(userPassword, `password should contain digits and letters`)
        }else if(passErrorCode === 1){
            makeHintError(userPassword, `password length must be over 6 `);
        }
        formValid = false;
   }
   return formValid
}

registerBtn.addEventListener(`click`, function(event){
    event.preventDefault();
    if(isFormValid()){
        registerForm.submit(); 
    }
});

function isEmptyInput (elem) {
    return !elem.value
}

function isEmailValid(elem){
    let regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i;
    return regEx.test(elem.value)
}

function isPasswordValid (elem){
    if(elem.value.length < 6){
        return 1
    }else if(!( /[a-zA-Z]/.test(elem.value) && /\d/.test(elem.value))){
        return 2
    }else{
        return 0
    }
}

function makeHintError(elem, ErrorText){
    if(elem.nextElementSibling){
        elem.nextElementSibling.remove();
    }
    const hintError = document.createElement(`div`);
    hintError.textContent = ErrorText;
    hintError.classList.add(`error-hint`);
    elem.parentElement.appendChild(hintError);
}