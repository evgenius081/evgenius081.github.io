// 1.  Написать конструктор товара который должен принимать 3 параметра:
// название, цвет, стоимость.
// Задача конструктора возвращать новый объект с вышеперечисленными полями.
// Добавить конструктору в прототип метод showPrice который возвращает строку вида ТОВАР + " стоит " + ЦЕНА.
// запустить метод showPrice "от имени" товара.

// function Product(name, color, price){
//     this.name = name;
//     this.color = color;
//     this.price = price;
// }

// Product.prototype.showPrice = function (){
//     return this.name + ' costs ' + this.price
// }

// var car = new  Product("car", "black", 1500);
// console.log(car.showPrice());



// 2. Создать конструктор FootballPlayer с параметрами name и team
// С помощью цикла сформировать массив футболистов (8 шт.)
// Должен получится массив из 8 объектов

var teams = ["Barcelona", "Uventus", "Monreal", "Uventus", "Barcelona", "Borisov", "Monreal", "Homel"];
var players = ["John", "Messi", "Boris", "Karl", "Simon", "William", "Michael", "Sergej"]
function FootballPlayer(name, team){
    this.name = name;
    this.team = team;
}

var footballers = [];
for(var i = 0; i<8; i++){
    footballers.push(new FootballPlayer(players[i], teams[i])); //prompt("Enter name of player"), prompt("Enter name his team")
}



// 3. Создать функцию которая принимает массив футболистов (из предыдущего задания)
// Функция должна "пробегать" по массиву и выяснять какие футболисты играют в одинаковых командах.
// функция должна возвращать двумерный массив футболистов сформированный по принципу: 1 массив - 1 команда
// пример возвращаемого массива:

function teamer(arr){
    var arr2 = arr.slice();
    var teams = [];
    footballers.forEach(function(curentValue, index){
        teams.push(footballers[index].team)
    })
    var teams2 = [];
    teams.forEach(function(){
        
    })
    return 
}
console.log(teamer(footballers))