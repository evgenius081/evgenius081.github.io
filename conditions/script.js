//conditions
//      if (condition) {
//          to do if condition is true
//      }

// var a = 12;
// var b = 12;
// if(a>b){
//     console.log(b);
// }
// else if(a<b) {
//     console.log(a);
// }
// else{
//     console.log('equal');
// }



// var a = 'five';
// switch (a) {
//     case 'zero':
//         console.log(0);
//         break;
//     case 'one':
//         console.log(1);
//         break;
//     case 'two':
//         console.log(2);
//         break;
//     case 'three':
//         console.log(3);
//         break;
//     case 'four':
//         console.log(4);
//         break;
//     default :
//         console.log('i don`t know such a big number');
// }



// var a = 5;
// var b = 3;
// console.log(a>b ? a : b>a ? b : 'equal');

// var a = +prompt("age");
//     // alert( a>=18 ? "hello" : 'goodbye');

//     if(a<=60){
//         if(a>=18){
//             alert('hello');
//     }
// }
//     else{
//         alert('goodbye');
//     }



// AND - &&
// OR - ||

// var a = prompt('age');

// if (a>=18 && a<=60){
//     console.log('hello');
// }
// else {
//     alert('goodbye');
// }

// var a = prompt('s');
// a = a || "Max";

// var a  = +prompt('enter number');
// var b  = +prompt('enter number');
// var c  = +prompt('enter number');
// var max = a;
// if(b>max && b>=c){
//     max = b;
// }
// else if(c>max && c>=b){
//     max=c;
// }
// alert(max);





// var a = +prompt('enter number');
// var b = +prompt('enter number');
// var c = +prompt('enter number');
// var d = +prompt('enter number');
// if(((a+b+c+d)/4)>100){
//     alert("ok");
// }
// else{alert("not ok")};
// alert( ((a+b+c+d)/4)>100 ? "ok" : 'not ok');



// var a = +prompt('enter number');
// var b = +prompt('enter number');
// if(a>b){
//     alert('число ' + a + " больше чем число " + b + " на " + (a-b)); 
// }
// else if(a<b){
//     alert('число ' + b + " больше чем число " + a + " на " + (b-a));
// }
// else {alert('они равны');}

//  var a = +prompt('enter number')%2;
//  var b = +prompt('enter number')%2;
//  var c = +prompt('enter number')%2;
//  var d = +prompt('enter number')%2;
//  var k = 0;
// if(a==0){
//     k++;
// }

// if(b==0){
//     k++;
// }

// if(c==0){
//     k++;
// }

// if(d==0){
//     k++;
// }

// alert(k);


// var a = +prompt('enter number');
// var b = +prompt('enter number');
// var c = +prompt('enter result');
// if(a*b===c){
//     alert('Ur good in math');
// }
// else{
//     alert('correct answer is ' + a*b);
// }

// var a = prompt('enter name of finger');
// switch(a){
//     case 'большой' :
//     console.log(1);
//     break;
//     case 'указательный' :
//     console.log(2);
//     break;
//     case 'средний' :
//     console.log(3);
//     break;
//     case 'безымянный' :
//     console.log(4);
//     break;
//     case 'мизинец' :
//     console.log(5);
//     break;
//     default : 
//     console.log('i don`t know that finger');
// }

 var a = +prompt('enter number a');
 var b = +prompt('enter number b');
 var c = +prompt('enter number c');
 var x = +prompt('enter number x');
 var x1 = 0;
 var x2 = 0;
 var g = b**2-4*a*c;
 if(g>0){
      x1 = ((-b)+Math.sqrt(g))/2*a;
 x2 = ((-b)-Math.sqrt(g))/2*a;
 alert(x1 + ' and ' + x2);
 }else if(g===0){
     x1 = -b/2*a;
     alert(x1);
 }else{
     alert('error');
 }


