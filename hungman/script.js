// .createElement(`div`);
// .remove();
// .removeChild();
// .appendChild();
// .insertBefore();
// .replaceChild()



const placeWord = (anchor) => {
    const words = ['neighbor', 
                   'technology', 
                   'reference', 
                   'influence', 
                   'ambulance', 
                   'birthday'];
    const secretWord = words[Math.floor(Math.random()*words.length)];
    console.log(secretWord);
    for(let i = 0; i<secretWord.length; i++){
        const span = document.createElement(`span`);
        span.textContent = `_`;
        anchor.appendChild(span)
    }
    return secretWord;
};

const checkLose = (counter, btn) => {
    document.getElementById(`man`).style.backgroundImage = `url(${counter}.png)`;
    if(counter === 4){
        endGame(false);
    }
}

const checkWin = (counter, btn) => {
    if(counter === secretWord.length){
        endGame(true);
    }
}

const gameRunner = () => {
    let wasSpanChanged = false;
    for(let i = 0 ; i < secretWord.length; i++){
        if( secretWord[i] === input.value.toLowerCase() && spans[i].textContent === `_`){
            spans[i].textContent = secretWord[i];
            wasSpanChanged = true;
            rightCounter++;
        }
    }
    if(wasSpanChanged === false){
        checkLose(++errorCounter, btn);
    }else{
        checkWin(rightCounter, btn);
    }
    input.value = ``;
}

const windowKeyPressHandler = function(event){
    if(event.keyCode === 13){
        gameRunner();
    }
}

const endGame = function(win){
    const bgColor = win ? `lightgreen` : `salmon`
    btn.disabled = true;
    btn.style.opacity = 0.5;
    document.body.style.background = bgColor;
    document.getElementById(`word`).textContent = win ? `YOU WIN!` : `GAME OVER! 
                                                   Secret word was: ${secretWord}`;
    input.removeEventListener(`keypress`, windowKeyPressHandler);
}

const btn = document.querySelector(`#userInput > button`)
const secretWord = placeWord(document.getElementById(`word`));
const input = btn.previousElementSibling;
const spans = document.getElementById(`word`).getElementsByTagName(`span`);
let errorCounter = 1;
let rightCounter = 0;

btn.addEventListener(`click`, gameRunner)

input.addEventListener(`keypress`, windowKeyPressHandler);