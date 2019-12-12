// var user = {
//     name = "John",
//     age = 30
// }
// alert(user.name); // "John"

// function classNameEditorParent(){
//     var className = "";
//     return function(newClassName, isAdding){

//         return className;
//     }
// }

// var classNameEditor = classNameEditorParent();
// classNameEditor("test", true);//  "test"
// classNameEditor("bla", true);//  "test bla"



// this - ссылка на объект, который вызывает функцию
// var person = {
//     name: "John",
//     age: 23,
//     run: personRun
// }

// var person2 = {
//     name: "Finn",
//     age: 34,
//     run: personRun
// }

// function personRun(){
//         console.log(this.name + " runs");
// }

// person2.run();


// setTimeOut   выполнение через время
// function func(){
//     console.log("this is func");
// }

// function clickHandler(){
//     clearTimeout(id);      //  уничтожение setTimeout
//     console.log("Timer was reset");
// }

// var id = setTimeout(func, 3000);



// SetInterval  постоянное выполнение через промежуток времени
// function func(){
//     console.log("this is func");
// }
// function clickHandler(){
//     clearInterval(id);      //  уничтожение setInterval
//     console.log("Timer was reset");
// }
// var id = setInterval(func, 1000);



// Методы функций

var person = {
    name: "John",
    age: 23,
}
var cat = {
    name: "Boris",
    age: 2
}
function runTo(place, speed){
    console.log(this.name + " runs to " + place + " on " + speed + " km/h");
}    

//call для this  .call(who, what)
// runTo.call(person, "bar", 100);


//apply  = call, тллько массив вместо остальных аргументов
// runTo.apply(cat, ["bar", 120]);


// отдалживание функции
// var person = {
//     name: "John",
//     age: 23,
//     eat: function(){
//         console.log(this.name + " eats");
//     }
// }
// person.eat.call(cat);


//.bind возвращает новую фнукцию, в которой this заменяется на то, что передали в скобках
// var catRun = runTo.bind(cat);
// catRun("bar", 100);


// Напишите функцию, которая вычисляет длину линий в стандартной двухмерной системе координат. Координаты начала и конца линий должны храниться в объектах.  Создайте три линии.    Вычислите их длины с помощью функции  Проверьте, могут ли три линии сформировать треугольник Помните: Длину линии можно найти по теореме Пифагора.   Стороны могут сформировать треугольник если длина каждой стороны треугольника должны быть меньше суммы длин остальных сторон. 

// var line1 = {
//     x0:12,
//     y0:5,
//     x1:3,
//     y1:1,
//     length: getLineLength
// }
// var line2 = {
//     x0:3,
//     y0:1,
//     x1:4,
//     y1:10,
//     length: getLineLength
// }
// var line3 = {
//     x0:4,
//     y0:10,
//     x1:12,
//     y1:5,
//     length: getLineLength
// }
// function getLineLength(){
//     return Math.sqrt(Math.pow((this.x1-this.x0), 2)+Math.pow((this.y1-this.y0), 2))
// }
// function isTriangleCanExsist(line1, line2, line3){
// if((line1.length+line2.length) > line3.length && (line1.length+line3.length) > line2.length && (line2.length +line3.length) > line1.length){
//     console.log("this triangle is real");
    
// }else{
//     console.log("error");
// }
// }
// isTriangleCanExsist(line1, line2, line3);



// Напишите функцию isEmptyObj(), которая проверяет пуст объект или нет. Если объект пуст, функция вернет true, если в объекте есть хотя бы одно поле, функция вернет false. 
// var bla = {
// }
// function isEmptyObj(obj){
//     if(Object.keys(obj).length === 0){
//         return true;
//     }else{
//         return false;
//     }
//  }
// console.log(isEmptyObj(bla));

// Создайте объект pupyrki (пупырки). Внутри объекта должны быть поля blue: 120, red: 250, orange: 23, purple: 231. Напишите программу, которая выведет на экран сумму всех пупырок (при подсчете, данные обязательно брать из объекта).  
//  var pupyrki = {
//     blue:120,
//     red:250,
//     orange: 23,
//     purple: 231
//  }
//  function sum(obj){
//     return obj.blue+obj.red+obj.orange+obj.purple;
//  }
//  console.log(sum(pupyrki));

// Создайте объект shtuchki. Добавьте в объект поля shtuchka1: 200, shtuchka2: 521, shtuchka3: 113, shtuchka4: 314, shtuchka5: 871. Напишите программу, которая выведет на экран наибольшую штучку (программа должна быть универсальна и выводить наибольшую штучку даже если поменяются значения).  
// var shtuchki = {
//     shtuchka1: 200,
//     shtuchka2: 521,
//     shtuchka3: 113,
//     shtuchka4: 314,
//     shtuchka5: 871
// }
// alert(shtuchki.max);