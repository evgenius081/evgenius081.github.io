// DOM
// let a = 2; // let нельзя объявлять дважды и имеет блочную область видимости
// console.log(a);


// const person = {
//     name: "John",
//     age: 32,
//     _city: ""
// }

// person.age = 99;
// console.log(person.age);

// // Object.freeze(person);  //запрещает изменять объект

// Object.defineProperty(person, "city", {
//     value: "gomel",
//     enumerable: true, //участвует ли в переборе свойств
//     writeable: true,  //можно ли менять значение
//     configurable: true, //можно ли изменять настройки поля(удаление)
//     get(){
//         return 1
//     },
//     set(){
//         return city + "!"
//     }
// });

// console.log(Object.getOwnPropertyDescriptor(person, "city")); // выводит все настройки поля

// console.log(person.city)//работает getter
// person.city = "Minsk"// работает setter

//стрелочная функция - в основном используется для callbackов

// const func = function(a, b){
//     console.log(a+b);
// }

// const func2 = (a,b)=>{
//     console.log(a+b)
// }

// func(2,3);
// func2(3, 4);


// значения по умолчанию
// const func = (a=0, b=0) => {
//     console.log( a+b)
// }

// func(3);

// деструктуризация
// const arr = ["John", "Peter", "Boris"];
// const[a,b] = arr;
// console.log(a);

// const person = {
//     name: "John",
//     age: 32
// }
// const {name:osobennaja, age} = person;
// console.log(osobennaja);




//rest
// const func = (a, b, ...arr) => {
//     console.log(a+b);
//     console.log(arr)
// }

// func(1,3,45,567,56,678,64,5,6,235,53,56)



// spread
// const arr = [3,1,45,45,6,236,67,85,9,65,34567]
// console.log( Math.max(...arr) );


// template strings
// var b = 143;
// var a = `
//     <h1>
//     Hello world!
//     </h1>
//     4{b}
// `
// document.write(a);



// class
// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.run = function (){
//     console.log(this.name + " runs!");
// }

// function Programmer (name, age, tech){
//     Person.apply(this, arguments);
//     this.tech = tech
// }

// Programmer.prototype = Object.create(Person.prototype);
// Programmer.prototype.costructor = Programmer;

// Programmer.prototype.code = fucntion(){
//     console.log(this.name + " is coding on " + this.tech);
// }

// var pers1 = new Programmer("John", 32, ["JS", "CSS"]);
// pers1.code();

// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     run(){
//         console.log(this.name + " runs!")
//     }
// }

// class Programmer extends Person {
//     constructor(name, age, tech){
//         super(name, age);
//         this.tech = tech;
//     }
//     code(){
//         console.log(this.name + " is coding on " + this.tech[0])
//     }

//     static sayHi(){//статический метод класса
//         console.log("Hey dude!")
//     }
// }

// var pers2 = new Programmer("Jonny", 32, ["HTML", "CSS", "JS"]);
// pers2.code();



class Mechanism {
    constructor(width, height){
        this.height = height;
        this.width  = width;
    }
    repair(){
        console.log(`Mechanism is repairing`);
    }
}

class Car extends Mechanism{
    constructor(width, height, brand, color){
        super(width, height);
        this.brand = brand;
        this.color = color;
    }
    park(){
        console.log(`${this.brand} is parking`);
    }
}

let nissan = new Car(2, 3, "Nissan", "balck");
nissan.park();
nissan.repair();