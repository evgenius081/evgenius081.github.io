$(function(){
    const ingridients = {
        base: [
            {
                name: "Тонкое",
                price: 2
            },
            {
                name: "Среднее",
                price: 3
            },
            {
                name: "Толстое",
                price: 5
            },
            {
                name: "На кефире",
                price: 8
            }
                
        ],
        meat: [
            {
                name: "Салями",
                price: 4
            },
            {
                name: "Курица",
                price: 7
            },
            {
                name: "Пепперони",
                price: 5
            },
            {
                name: "Ветчина",
                price: 9
            }
        ],
        cheese: [
            {
                name: "Моцарелла",
                price: 3
            },
            {
                name: "Пармезан",
                price: 5
            },
            {
                name: "Чеддер",
                price: 6
            },
            {
                name: "Рокфор",
                price: 4
            }
        ],
        souce: [
            {
                name: "Томатный",
                price: 1
            },
            {
                name: "Песто",
                price: 4
            },
            {
                name: "Майонез",
                price: 2
            },
            {
                name: "Бешамель",
                price: 6
            }
        ]
    };
    const baseVariants = $(`#basement ul li`);
    const meatVariants = $(`#meat ul li`);
    const cheeseVariants = $(`#cheese ul li`);
    const souceVariants = $(`#souce ul li`);
    const variants = [baseVariants, meatVariants, cheeseVariants, souceVariants];
    let chosenNumberMeat = 0;
    let chosenNumberCheese = 0;
    var completeStages = 0;
    const btn = $(`#complete`);
    const ingrid = $(`#ingridients`);

    function objectSender(){

    }

    function sumCounter(){
    }

    function orderSetter(elem){
        let elemClone = $(elem).clone();
        elemClone.css(`color`, `#000`);
        elemClone.removeClass(`active`);
        elemClone.appendTo(ingrid);
    }

    function selectionDisabler(elem){
        for(var i =0 ; i < 4; i++){
            elem.parentElement.children[i].removeEventListener(`click`, ordinaryChoice);
            elem.parentElement.children[i].style.color = `#455a64`
        }
        elem.addEventListener(`click`, ordinaryChoice);
        elem.style.color = `#fdd835`
    }

    function ordinaryChoice(){
        if( $(this).hasClass(`active`) ){
            $(this).removeClass(`active`);
            for(var i =0 ; i < 4; i++){
                this.parentElement.children[i].addEventListener(`click`, ordinaryChoice);
                this.parentElement.children[i].style.color = `#000`
            }
            pizzaPartChanger(--completeStages);
        }else{
            $(this).addClass(`active`);
            selectionDisabler(this);
            pizzaPartChanger(++completeStages);
        }
        orderSetter(this);
        sumCounter();
    }

    function twiceChoice(){
        let res = this.parentElement === document.getElementById(`meat`).children[1] ? chosenNumberMeat : chosenNumberCheese; 
        let whoIsIt = this.parentElement === document.getElementById(`meat`).children[1] ? `meat` :  `cheese`;
        if( $(this).hasClass(`active`) ){
            if(res === 1){
                $(this).removeClass(`active`);
                this.style.color = `#000`
                res --;
                pizzaPartChanger(--completeStages);
            }else if(res > 1){
                $(this).removeClass(`active`);
                res--;
                for(var i = 0 ; i < 4; i++){
                    if(!this.parentElement.children[i].classList.contains(`active`) || !this){
                    this.parentElement.children[i].addEventListener(`click`, twiceChoice);
                    this.parentElement.children[i].style.color = `#000`;
                    }
                }
            }
        }else{
            if( res === 0){
                res++;
                $(this).addClass(`active`);
                this.style.color = `#fdd835`;
                pizzaPartChanger(++completeStages);
            }else if(res === 1){
                $(this).addClass(`active`);
                this.style.color = `#fdd835`;
                for(var i = 0 ; i < 4; i++){
                    if(!this.parentElement.children[i].classList.contains(`active`) || !this){
                        this.parentElement.children[i].removeEventListener(`click`, twiceChoice);
                        this.parentElement.children[i].style.color = `#455a64`;
                    }
                }
                    res++;
            }

        }
        whoIsIt === `meat` ? chosenNumberMeat = res : chosenNumberCheese = res;
        orderSetter(this);
        sumCounter();
    }

    function clickSetter(obj){
        let keysNumber = 0;
        for(var key in obj){
            keysNumber++;
            if(keysNumber === 5){
                break
            }
            obj === baseVariants || obj === souceVariants ? obj[key].addEventListener(`click`, ordinaryChoice) :  obj[key].addEventListener(`click`, twiceChoice);
        }
    }

    for(var i = 0; i < 4; i++){
        clickSetter(variants[i]);
    }
function pizzaPartChanger(stages){
    for(var i = 1; i <= 4; i++){
        document.getElementById(`stage${i}`).style.background = ``;
    }
    for(var i = 1; i <= stages; i++){
        document.getElementById(`stage${i}`).style.background = `url(img/${i}.png) center/cover no-repeat`;
    }
   if(stages === 4){
    btn.prop(`disabled`, false);
    btn.css(`color`, `#fff`)
   }else{
    btn.prop(`disabled`, true);
    btn.css(`color`, `#455a64`)
   }
}
btn.click(function(){
    // objectSender();
    $(`#main *`).css(`display`, `none`);
    $(`#main`).append(`<div id="succes">`);
    $(`#succes`).append(`<p>Ваша пицца скоро будет приготовлена. Спасибо за заказ!</p>`);
    $(`#succes`).append(`<div id="belissimo">`)
})

})