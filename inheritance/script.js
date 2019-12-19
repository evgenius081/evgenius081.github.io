// var person = {
//     name: "John",
//     age: 23,
//     city: "Homel",
//     salary: {
//         dol: 1000,
//         rub: 500,
//         tenge: 2500
//     },
//     isOboltus: false,
//     tech: ["HTML", "CSS", "JS"]
// };

// var person2 = {};
// for ( var key  in person){
//     person2[key] = person[key];       тоже копирование объекта
// }
// console.log(person2) 

// var person2 = JSON.parse(JSON.stringify( person));  // копирование объекта(фигово работает с функциями)
// console.log( person2)

// Вывести поштучно умения
// for(var i  = 0; i < person.tech.length; i++){
// console.log("John knows " + person.tech[i])
// }

// Выести желаемый заработок
// for(var key in person){
//     if(key === "salary"){
//        for(var key2 in person.salary){
//         console.log("John wants salary in " + key2 + " " + person.salary[key2])
//     } 
//     }
// }



//inheritence
// function Person(name, age, city){
//     this.name = name;
//     this.age = age;
//     this.city = city;
// }

// Person.prototype.run = function(){
//     console.log(this.name + " runs")
// }

// var pers1 = new Person("Peter", 34, "Homel");
// var pers2 = new Person("John", 23, "Boston");
// var pers3 = new Person("Jiorno", 45, "Venice");
// var pers4 = new Person("Maks", 4, "New-York");
// // console.log(pers1);
// // console.log(pers2);
// // console.log(pers3);
// // console.log(pers4);
// pers2.run();
// this is how mafia works:
// 1. функция создаёт объект
// 2. назначает объекту поле 
// 3. возвращает объект



var obj = Object.create({x:2, y:3});// Object.create создаёт пустой объект, которому в скобках можно задать __proto__(не в сам массив!!!)
// obj.x = 33;
// console.log(obj.x);

obj.name = "Name";
obj.age = 15;
// console.log(obj.hasOwnProperty("name"));
// console.log(obj.hasOwnProperty("x"));

// for(var key in obj){
//     if( obj.hasOwnProperty(key)){
//         console.log(key);
//     }
// }



// var arrKeys = Object.keys(obj); //формирует массив из названий полей объекта
// console.log(arrKeys);
// arrKeys.forEach(function(keyName){
//     console.log(obj[keyName]);
// })



// console.log(obj instanceof Object); //является ли чтото слева отпрыском того что слева



//Programmer является производным от Person
// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.walk = function(){
//     console.log(this.name + " walks");
// };

// var pers = new Person("John", 23);

// pers.walk();

// function Programmer(name, age,tech){
//     Person.apply(this, arguments);// 1
//     this.tech = tech;
// };

// Programmer.prototype = Object.create(Person.prototype);// 2
// Programmer.prototype.constructor = Programmer;// 3


// Programmer.prototype.writeCode = function(){
//     console.log(this.name + " is coding...");
// }

// var proger = new Programmer("Simon", 45, ["HTML", "CSS"]);
// console.log(proger);
// proger.writeCode();
// proger.walk();
// pers.writeCode();


//создаём it-нацию(все беларусы - программисты)
// function BelarusianCitizen(name, age, tech, city){
//     Programmer.apply(this, arguments);
//     this.city = city;
// }

// BelarusianCitizen.prototype = Object.create(Programmer.prototype);

// BelarusianCitizen.prototype.constructor = BelarusianCitizen;

// BelarusianCitizen.prototype.makeDraniks = function(){
//     console.log("draniks has been made in " + this.city);
// }

// var belPers = new BelarusianCitizen("Ales", 30, ["HTML", "CSS", "JS"], "Homel");

// console.log(belPers);
// belPers.makeDraniks();
// belPers.writeCode();
// belPers.walk();



// 1.
//  Создать конструктор объектов Car, который создает
//  новый объект с полями model, color, whoAmI, где
//  model – марка авто(строка), color – цвет(строка),
//  whoAmI – функция которая выводит на экран цвет и
//  модель.
// function Car(model, color){
//     this.model = model;
//     this.color = color;
// }

// Car.prototype.whoAmI = function(){
//     return "I am " + this.color + " " + this.model;
// }

// var car = new Car("nissan", "black");
// console.log(car.whoAmI());



// 2.
//     Существует массив(длина: 4) футболистов (каждый
//     футболист – это объект). Напишите функцию
//     addAbility(array), которая добавляет к каждому
//     объекту массива функцию run(), при запуске которой
//     выводится сообщение (“ИМЯ_ФУТБОЛИСТА is
//     running”)
// var footballers = [{name: "John"}, {name: "Jiorno"}, {name: "Michael"}, {name: "Simon"}];
// function addAbility(footballers){
//     footballers.forEach(function (footballer){
//     footballer.run = run;
//     })
// }

// function run (){
//     console.log(this.name + " is running");
// }

// addAbility(footballers);
// console.log(footballers);
// footballers[0].run();



// 3.
// Напишите функцию isEmptyObj(), которая проверяет пуст
// объект или нет. Если объект пуст, функция вернет true, если в
// объекте есть хотя бы одно поле, функция вернет false.

// function isEmptyObj (obj){
//     if(Object.keys(obj).length > 0){
//         return true
//     }else{
//         return false
//     }

// }

// var fruits = {
//     // item: "banana"
// }

// console.log(isEmptyObj(fruits));



// 4.
// Создать конструктор Book, с помощью этого конструктора
// создать массив из 8 книг (объектов). Каждая книга должна
// представлять из себя объект, в котором есть три поля:
// author, bookName, pageAmount.
// Создать функцию getBiggerBook(), которая принимает
// массив книг и возвращает ОДНУ книгу с наибольшим
// количеством страниц.
var books = []
function Book (author, bookName, pageAmount){
    this.author = author;
    this.bookName = bookName;
    this.pageAmount = pageAmount;
}
for(var i = 0; i<4; i++){
    books.push(new Book(prompt("Enter author of the book"), prompt("Enter name of the book"), +prompt("Enter number of pages")));
}
function getTheBiggestBook (arr){
    var arr2 = [];
    var max = 0;
    index = 0;
    for(var i = 0; i<arr.length; i++){
        arr2.push(arr[i].pageAmount);
    }
    for(var i = 0; i<arr2.length; i++){
        if(arr2[i]>max){
            max = arr2[i];
        }
    }
    return arr[arr2.indexOf(max)]
}

console.log(getTheBiggestBook(books));



// 5.
// Дан объект:
// student { math: 5, biology: 3, language: 2, isOboltus: ‘yes’ }.
// Напишите программу, которая умножит все ЧИСЛОВЫЕ (и
// только числовые) значения на 2 и перезапишет каждое
// свойство объекта (числового типа).
var student = { math: 5, 
                biology: 3, 
                language: 2, 
                isOboltus: 'yes' }
function mult(obj){
    for(var key in obj){
        if(typeof(obj[key]) === "number"){
            obj[key]*=2;
        }
    }
    return obj
}

console.log(mult(student));