$(function(){
    const ingridients = [
            {
                name: "Тонкая",
                price: 2
            },
            {
                name: "Средняя",
                price: 3
            },
            {
                name: "Толстая",
                price: 5
            },
            {
                name: "На кефире",
                price: 8
            },
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
            },
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
            },
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
        ];
    let chosenIngridients = {};
    const baseVariants = $(`#basement ul li`);
    const meatVariants = $(`#meat ul li`);
    const cheeseVariants = $(`#cheese ul li`);
    const souceVariants = $(`#souce ul li`);
    const variants = [baseVariants, meatVariants, cheeseVariants, souceVariants];
    const totalPrice = $(`#totalPrice`);
    let chosenNumberMeat = 0;
    let chosenNumberCheese = 0;
    var completeStages = 0;
    const btn = $(`#complete`);
    const ingrid = $(`#ingridients`);
    let sum = 0;


    function objectSender(){

    }

    function sumCounter(){

    }

    function deleter(){
        let a = $(this.parentElement).text()
        let b = $(`.active`);
        
        for(var i = 0; i < b.length; i++){
            if(b[i].textContent === a){
           if(b[i].parentElement === document.getElementById(`basement`).children[1] || b[i].parentElement === document.getElementById(`souce`).children[1]){
            for(var j =0 ; j < 4; j++){
                    b[i].parentElement.children[j].addEventListener(`click`, ordinaryChoice);
                    b[i].parentElement.children[j].style.color = `#000`;
            }
            for( var j = 0; j < ingridients.length;  j++){
                if(b[i].textContent === ingridients[j].name){
                    sum = sum - ingridients[j].price;
                }
            }
            totalPrice.text(`Цена: ${sum}$`);
            b[i].classList.remove(`active`);
            b[i].style.color = `#000`;
            pizzaPartChanger(--completeStages);
            break;
        }else{
            let res = b[i].parentElement === document.getElementById(`meat`).children[1] ? chosenNumberMeat : chosenNumberCheese; 
        let whoIsIt = b[i].parentElement === document.getElementById(`meat`).children[1] ? `meat` :  `cheese`;
        if( $(b[i]).hasClass(`active`) ){
            if(res === 1){
                $(b[i]).removeClass(`active`);
                b[i].style.color = `#000`
                res --;
                pizzaPartChanger(--completeStages);
                for(var j = 0; j < 6; j++){
                    if($(ingrid).children()[j].textContent === b[i].textContent){
                        ingrid.children()[j].remove();
                        break;
                    }
                }
            }else if(res > 1){
                $(b[i]).removeClass(`active`);
                res--;
                for(var j = 0 ; j < 4; j++){
                    if(!b[i].parentElement.children[j].classList.contains(`active`) || !b[i]){
                        b[i].parentElement.children[j].addEventListener(`click`, twiceChoice);
                        b[i].parentElement.children[j].style.color = `#000`;
                    }
                }
                for(var j = 0; j < 6; j++){
                if(ingrid.children()[j].textContent === b[i].textContent){
                    ingrid.children()[j].remove();
                    break;
                }
            }
            totalPrice.text(`Цена: ${sum}$`);
            }
            for( var j = 0; j < ingridients.length;  j++){
                if(b[i].textContent === ingridients[j].name){
                    sum = sum - ingridients[j].price;
                }
            }
            totalPrice.text(`Цена: ${sum}$`);
            whoIsIt === `meat` ? chosenNumberMeat = res : chosenNumberCheese = res;
        }
        }     
        }
        
    }this.parentElement.remove();
    }

    function orderSetter(elem){
        let elemClone = $(elem).clone();
        elemClone.css(`color`, `#000`);
        elemClone.removeClass(`active`);
        elemClone.addClass(`orderElement`)
        elemClone.append(`<div class="deleter"></div>`)
        ingrid.append(elemClone);
        $(`.deleter`).click(deleter);
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
                    this.parentElement.children[i].style.color = `#000`;
                }
                for(var i = 0; i < 6; i++){
                    if($(ingrid).children()[i].textContent === this.textContent){
                        ingrid.children()[i].remove();
                        break;
                    }
                }
                for( var j = 0; j < ingridients.length;  j++){
                    if(this.textContent === ingridients[j].name){
                        sum = sum - ingridients[j].price;
                    }
                }
                    totalPrice.text(`Цена: ${sum}$`);
                pizzaPartChanger(--completeStages);
            }else{
                $(this).addClass(`active`);
                selectionDisabler(this);
                pizzaPartChanger(++completeStages);
                orderSetter(this);
                for( var j = 0; j < ingridients.length;  j++){
                    if(this.textContent === ingridients[j].name){
                        sum = sum + ingridients[j].price;
                    }
                }
                totalPrice.text(`Цена: ${sum}$`);
            }
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
                for(var i = 0; i < 6; i++){
                    if($(ingrid).children()[i].textContent === this.textContent){
                        ingrid.children()[i].remove();
                        break;
                    }
                }
            }else if(res > 1){
                $(this).removeClass(`active`);
                res--;
                for(var i = 0 ; i < 4; i++){
                    if(!this.parentElement.children[i].classList.contains(`active`) || !this){
                    this.parentElement.children[i].addEventListener(`click`, twiceChoice);
                    this.parentElement.children[i].style.color = `#000`;
                    }
                }
                for(var i = 0; i < 6; i++){
                if($(ingrid).children()[i].textContent === this.textContent){
                    ingrid.children()[i].remove();
                    break;
                }
            }
            
            }
            for( var i = 0; i < ingridients.length;  i++){
                if(this.textContent === ingridients[i].name){
                    sum = sum - ingridients[i].price;
                }
            }
            totalPrice.text(`Цена: ${sum}$`);
        }else{
            if( res === 0){
                res++;
                $(this).addClass(`active`);
                orderSetter(this);
                this.style.color = `#fdd835`;
                pizzaPartChanger(++completeStages);
                for( var i = 0; i < ingridients.length;  i++){
                    if(this.textContent === ingridients[i].name){
                        sum = sum + ingridients[i].price;
                    }
                }
                totalPrice.text(`Цена: ${sum}$`);
            }else if(res === 1){
                $(this).addClass(`active`);
                orderSetter(this);
                this.style.color = `#fdd835`;
                for(var i = 0 ; i < 4; i++){
                    if(!this.parentElement.children[i].classList.contains(`active`) || !this){
                        this.parentElement.children[i].removeEventListener(`click`, twiceChoice);
                        this.parentElement.children[i].style.color = `#455a64`;
                    }
                }
                    res++;
                    for( var i = 0; i < ingridients.length;  i++){
                        if(this.textContent === ingridients[i].name){
                            sum = sum + ingridients[i].price;
                        }
                    }
                    totalPrice.text(`Цена: ${sum}$`);
            }

        }
        whoIsIt === `meat` ? chosenNumberMeat = res : chosenNumberCheese = res;
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

    function orderElementsCreater(){

    }

    btn.click(function(){
    // objectSender();
        $(`#main *`).css(`display`, `none`);
        $(`#main`).append(`<div id="succes">`);
        $(`#succes`).append(`<p>Ваша пицца скоро будет приготовлена. Спасибо за заказ!</p>`);
        $(`#succes`).append(`<div id="belissimo">`)
})
    
    })