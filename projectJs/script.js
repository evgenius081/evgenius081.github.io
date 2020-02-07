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
    const totalPrice = $(`#totalPrice`);
    const btn = $(`#complete`);
    const ingrid = $(`#ingridients`);
    const variants = [baseVariants, meatVariants, cheeseVariants, souceVariants];
    let chosenNumberMeat = 0;
    let chosenNumberCheese = 0;
    var completeStages = 0;
    let sum = 0;


    function objectSender(){
        let counter = 0;
        for(var i = 0; i < ingridients.length; i++){
            for(var j = 0; j < $(ingrid).children().length; j++){ 
                if($(ingrid).children()[j].textContent === ingridients[i].name){
                    counter++;
                    chosenIngridients[`component${counter}`] = ingridients[i]
                }
            }
        }
        let order = JSON.stringify(chosenIngridients);
        console.log(order); 
    }

    function orderElementDeleter(){
        let active = $(`.active`);
        for(var i = 0; i < active.length; i++){
            if(active[i].textContent === $(this.parentElement).text()){
                if(active[i].parentElement === document.getElementById(`basement`).children[1] || active[i].parentElement === document.getElementById(`souce`).children[1]){
                    listElementSelectionActivator(active[i]);
                    totalPrice.text(reduseSum(active[i]));
                    active[i].classList.remove(`active`);
                    active[i].style.color = `#000`;
                    pizzaPartChanger(--completeStages);
                    break;
                }else{
                    let res = active[i].parentElement === document.getElementById(`meat`).children[1] ? chosenNumberMeat : chosenNumberCheese; 
                    let whoIsIt = active[i].parentElement === document.getElementById(`meat`).children[1] ? `meat` :  `cheese`;
                    if( $(active[i]).hasClass(`active`) ){
                        if(res === 1){
                            $(active[i]).removeClass(`active`);
                            active[i].style.color = `#000`;
                            res --;
                            pizzaPartChanger(--completeStages);
                        }else if(res > 1){
                            $(active[i]).removeClass(`active`);
                            res--;
                            listElementSelectionActivator(active[i]);
                        }
                    }
                    totalPrice.text(reduseSum(active[i]));
                    whoIsIt === `meat` ? chosenNumberMeat = res : chosenNumberCheese = res;
                }
            }     
        }
        this.parentElement.remove();
    }

    function reduseSum(elem){
        for( var j = 0; j < ingridients.length;  j++){
            if(elem.textContent === ingridients[j].name){
                sum = sum - ingridients[j].price;
            }
        }
        return `Цена: ${sum}$`
    }

    function increaseSum(elem){
        for( var j = 0; j < ingridients.length;  j++){
            if(elem.textContent === ingridients[j].name){
                sum = sum + ingridients[j].price;
            }
        }
        return `Цена: ${sum}$`
    }

    function orderElementsCreater(elem){
        let elemClone = $(elem).clone();
        elemClone.css(`color`, `#000`);
        elemClone.removeClass(`active`);
        elemClone.addClass(`orderElement`);
        elemClone.append(`<div class="orderElementDeleter"></div>`);
        ingrid.append(elemClone);
        $(`.orderElementDeleter`).click(orderElementDeleter);
    }

    function orderElementsDeleter(elem){
        for(var i = 0; i < 6; i++){
            if($(ingrid).children()[i].textContent === elem.textContent){
                ingrid.children()[i].remove();
                break;
            }
        }
    }

    function listElementSelectionDisabler(elem){
        if(elem.parentElement === document.getElementById(`basement`).children[1] || elem.parentElement === document.getElementById(`souce`).children[1]){
            for(var i =0 ; i < 4; i++){
                elem.parentElement.children[i].removeEventListener(`click`, ordinaryChoice);
                elem.parentElement.children[i].style.color = `#455a64`;
            }
            elem.addEventListener(`click`, ordinaryChoice);
            elem.style.color = `#fdd835`;
        }else{
            for(var i = 0 ; i < 4; i++){
                if(!elem.parentElement.children[i].classList.contains(`active`) || !elem){
                    elem.parentElement.children[i].removeEventListener(`click`, twiceChoice);
                    elem.parentElement.children[i].style.color = `#455a64`;
                }
            }
        }
    }

    function listElementSelectionActivator(elem){
        if(elem.parentElement === document.getElementById(`basement`).children[1] || elem.parentElement === document.getElementById(`souce`).children[1]){
            for(var i = 0 ; i < 4; i++){
                elem.parentElement.children[i].addEventListener(`click`, ordinaryChoice);
                elem.parentElement.children[i].style.color = `#000`;
            }
        }else{
            for(var i = 0 ; i < 4; i++){
                if(!elem.parentElement.children[i].classList.contains(`active`) || !elem){
                elem.parentElement.children[i].addEventListener(`click`, twiceChoice);
                elem.parentElement.children[i].style.color = `#000`;
                }
            }
        }
    }

    function ordinaryChoice(){ 
        if( $(this).hasClass(`active`) ){
            $(this).removeClass(`active`);
            listElementSelectionActivator(this);
            orderElementsDeleter(this);
            totalPrice.text(reduseSum(this));
            pizzaPartChanger(--completeStages);
        }else{
            $(this).addClass(`active`);
            listElementSelectionDisabler(this);
            pizzaPartChanger(++completeStages);
            orderElementsCreater(this);
            totalPrice.text(increaseSum(this));
        }
    }

    function twiceChoice(){
        let res = this.parentElement === document.getElementById(`meat`).children[1] ? chosenNumberMeat : chosenNumberCheese; 
        let whoIsIt = this.parentElement === document.getElementById(`meat`).children[1] ? `meat` :  `cheese`;
        if( $(this).hasClass(`active`) ){
            if(res === 1){
                $(this).removeClass(`active`);
                this.style.color = `#000`;
                res --;
                pizzaPartChanger(--completeStages);
            }else if(res > 1){
                $(this).removeClass(`active`);
                res--;
                listElementSelectionActivator(this);
            }
            orderElementsDeleter(this);
            totalPrice.text(reduseSum(this));
        }else{
            if( res === 0){
                res++;
                $(this).addClass(`active`);
                orderElementsCreater(this);
                this.style.color = `#fdd835`;
                pizzaPartChanger(++completeStages);
                totalPrice.text(increaseSum(this));
            }else if(res === 1){
                $(this).addClass(`active`);
                orderElementsCreater(this);
                this.style.color = `#fdd835`;
                listElementSelectionDisabler(this);
                res++;
                totalPrice.text(increaseSum(this));
            }
        }
        whoIsIt === `meat` ? chosenNumberMeat = res : chosenNumberCheese = res;
    }

    function listElementClickSetter(obj){
        let keysNumber = 0;
        for(var key in obj){
            keysNumber++;
            if(keysNumber === 5){
                break;
            }
            obj === baseVariants || obj === souceVariants ? obj[key].addEventListener(`click`, ordinaryChoice) :  obj[key].addEventListener(`click`, twiceChoice);
        }
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
            btn.css(`color`, `#fff`);
        }else{
            btn.prop(`disabled`, true);
            btn.css(`color`, `#455a64`);
        }
    }

    btn.click(function(){
        objectSender();
        $(`#main *`).css(`display`, `none`);
        $(`#main`).append(`<div id="succes">`);
        $(`#succes`).append(`<p>Ваша пицца скоро будет приготовлена. Спасибо за заказ!</p>`);
        $(`#succes`).append(`<div id="belissimo">`);
    })

    for(var i = 0; i < 4; i++){
        listElementClickSetter(variants[i]);
    }

})