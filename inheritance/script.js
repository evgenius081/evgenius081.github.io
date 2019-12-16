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
function Person(name, age, city){
    this.name = name;
    this.age = age;
    this.city = city;
}

Person.prototype.run = function(){
    console.log(this.name + " runs")
}

var pers1 = new Person("Peter", 34, "Homel");
var pers2 = new Person("John", 23, "Boston");
var pers3 = new Person("Jiorno", 45, "Venice");
var pers4 = new Person("Maks", 4, "New-York");
// console.log(pers1);
// console.log(pers2);
// console.log(pers3);
// console.log(pers4);
pers2.run();
// this is how mafia works:
// 1. функция создаёт объект
// 2. назначает объекту поле 
// 3. возвращает объект