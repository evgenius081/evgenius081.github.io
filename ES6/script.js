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
const arr = [3,1,45,45,6,236,67,85,9,65,34567]
console.log( Math.max(...arr) );