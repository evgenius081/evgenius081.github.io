// Scope Functions

// var a = 2;
// function func(){
//     var a = 3;
//     console.log(a);
// }
// func();

// function func(){
//     innerFunk();
//      function innerFunk(){
//          console.log("hello");
//      }
// }

// func();





// Function Declaration
// function func(){}

// Function Expression
// var func = function(){}

// var func = function(){
//     console.log("Hello");
// }
// var func2 = func;
// func2();





// Hoisting

// func();
// func2();
// var func = function(){
//     console.log("hello");
// }

// function func2(){
//     console.log("Hello");
// }

// var func ;
//     var age = +prompt("Enter ur age");
//     if(age>=50){
//         func = function(){
//             return "OK";
//         }  
        
//     }else{
//         func = function(){
//             return "Not Ok";
//         }
//     }

// console.log(func());



// function avg(){
//     var sum = 0;
//     for(var i  =0; i<arguments.length; i++){
//         sum += arguments[i];
//     }
//     return sum/arguments.length;
// }

// console.log(avg(1,2,3,6,7,8));



// function func (num1, num2, bool){
//     if(bool === false || bool === undefined){
//         return num1 - num2;
//     }else{
//         return num2  -num1;
//     }
// }

// console.log(func(1, 5));



// function func (){
//     var sum = 0;
//     if(arguments[0] === true){
//         for(var i =1; i<arguments.length; i++){
//             sum += arguments[i];
//         }
//         return sum;
//     }else if(arguments[0] === false){
//         for(var i = 1; i<arguments.length; i++){
//             sum -= arguments[i];
//         }
//         return sum;
//     }
// }

// console.log(func(false, 1,2,3,4,5,6,7));





// callbacks

// function func (a){
//     a();
// } 
// function test (){
//     console.log("test");
// }
// function anotherFunc (){
//     console.log("this is another func");
// }
// func(anotherFunc);


// self-invoking func

// (function(){console.log("func!")})();



// var barcelona = ["Messi", "Raul", "Ronaldo", "Mitrofan"];
// function team (fbArr, getOut){
//     var fbArrCopy =fbArr.slice();
//     for(var i = 0; i < fbArrCopy.length; i++){
//         fbArrCopy[i] = "Mr. " + fbArrCopy[i];
//     }
//     getOut(fbArrCopy);
// }
// team(barcelona, showAlert);
// function showAlert(arr){
//     for(var i = 0; i < arr.length; i++){
//         alert(arr[i]);
//     }
// }
// function showWrite(arr){
//     for(var i = 0; i < arr.length; i++){
//         document.write(arr[i] + '<br/>');
//     }
// }
// function showConsole(arr){
//     for(var i = 0; i < arr.length; i++){
//         console.log(arr[i]);
//     }
// }



// function joiner (arr1, arr2, callback){
//     var arrNew = arr1.concat(arr2);
//     callback(arrNew);
// }

// joiner(["a","b","c","d"], ["e", "f", "g", "h"], callback2);

// function callback1(arr){
//     if(arr.length > 4){
//     arr.splice(3, arr.length-4);
//     }
//     console.log(arr);
// }

// function callback2 (arr){
//     if(arr.length < 8){
//         for(var i = arr.length-8; i<0; i++){
//             arr.push("Mitrofan");
//         }
//     }
//     console.log(arr);
// }



function boss (str, callback){
    var newWord = str.toUpperCase();
    callback(newWord);
}
boss("king", worker2);

function worker1(str){
    if(str.length > 5){
        console.log("Ура! Я работаю");
    }else{
        console.log("Увы! Я не работаю");
    }
} 

function worker2(str){
    console.log(str);
}