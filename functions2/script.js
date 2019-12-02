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

(function(){console.log("func!")})();