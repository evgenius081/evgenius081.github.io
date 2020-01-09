const treasure = {
    x: Math.floor(Math.random()*800),
    y: Math.floor(Math.random()*600)
}

let clickCounter = 0;
const strong = document.querySelector(`#end_game strong`)
const map = document.getElementById(`map`);
const hint = document.getElementById(`hint`);
const endGame = document.getElementById(`end_game`);

const mapClickHandler = function(event){
    clickCounter++;
    const userCoords = {
        x: event.offsetX,
        y: event.offsetY
    }
    const length = getLength(treasure, userCoords);
    if(length < 60){
        strong.textContent = clickCounter;
        endGame.style.display = `block`;
        map.removeEventListener(`click`, mapClickHandler)
    }else if(length < 150){
        hint.textContent = `Calm`;
        hint.style.color = `orange`
    }else if(length < 250){
        hint.textContent = `Cold`;
        hint.style.color = `lightblue`
    }else{
        hint.textContent = `Too cold`;
        hint.style.color = `blue`
    }
}

map.addEventListener(`click`, mapClickHandler)

function getLength(obj1, obj2){
    return Math.sqrt(Math.pow((obj1.x-obj2.x), 2)+Math.pow((obj1.y-obj2.y), 2))
}