// var team = ['messi', 'ronaldo', 'bekham'];

// team[0] = 'fedya';

// console.log([4, 11, 92, 105][3]);

// team[4] = 'valera';

// team[team.length] = 'Olga';

// team[100] = 'Boris';


// .pop();
// .push();
// .shift();
// .unshift();
// .concat();
// .slice();
// .splice();
// .indexOf();
// .includes();
// .join();
// .split();
// .map()
// .foreach()
// .some()
// .every()
// .toLowerCase()
// .toUpperCase()
// .reduce()
// .reduceRight()


// 1.1  Создать массив из 10ти элементов и вывести на экран сумму всех элементов массива.
// var arr = [1, 99, 98, 76, 80, 35, 12,  15, 79, 82];
// var sum = 0;
// for(var i=0; i<arr.length; i++){
//     sum+=arr[i];
// }
// console.log(sum);

// 1.2  Найти среднее арифметическое значение элементов массива, которые стоят на четных местах.
// var arr = [1, 99, 98, 76, 80, 35, 12,  15, 79, 82];
// var mid = 0;
// for(var i=0; i<arr.length; i++){
//     if(i%2===0 && i!=0){
//         mid+=arr[i];
//         mid/=i;
//     }
// }
// console.log(mid);

// 1.3  Создать массив, элементы которого равны элементам исходного массива, но с противоположными знаками. (Длина исходного массива должна быть не меньше 10ти элементов). 
// var arr1 = [1, 99, 98, 76, 80, 35, 12,  15, 79, 82];
// var arr2 = [];
// for(var i = 0; i < arr1.length; i++){
//     arr2[i] = -arr1[i];
// }
// console.log(arr2);

// 2.1 Автоматически заполнить массив нулями, кроме первого и последнего элементов, которые должны быть единицами. (Количество элементов массива: 8) 
// var arr = [];
// for(var i = 0; i <= 8; i++){
//     if(i!=0 && i!=8){
//         arr[i] = 0;
//     }else{
//         arr[i]=1 ;
//     }
// }
// console.log(arr);

// 2.2  Заполнить массив нулями и единицами, при этом данные значения чередуются, начиная с нуля. 
// var arr = [];
// for(var i=0; i<8; i++){
//     if(i%2===0){
//          arr[i] = 0;
//     }else{
//         arr[i] = 1;
//     }
// }
// console.log(arr);

// 2.3 Заполнить массив последовательными нечетными числами начиная с единицы. (Количество элементов массива: 8) 
// var arr = [];
// var k = 1;
// for(var i=0; i<=8; i++){
//     arr[i] = k;
//     k+=2;
// }
// console.log(arr);
 
// 2.4 Сформировать массив из чисел, которые делятся на 3 (Количество элементов массива: 8) 
// var arr = [];
// var k = 3;
// for(var i=0; i<8; i++){
//     arr[i] = k;
//     k+=3;
// }
// console.log(arr);

// 3.1  С помощью цикла создать массив, каждый элемент которого равен квадрату своего номера. 
// var arr = [];
// for(var i = 0; i <= 10; i++){
//     arr[i] = i*i;
// }
// console.log(arr);

// 3.2  С помощью цикла создать массив, который одинаково читается как слева направо, так и справа налево (Количество элементов массива: 9). 
// var arr = [];
// for(var i = 0; i < 9; i++){
//     if(i<5){
//         arr[i] = i;
//     }else{
//         arr[i] = arr[8-i];
//     }
// }
// console.log(arr);

// 3.3 Создать массив из 10 чисел. Вывести на экран количество четных чисел из этого массива. 
// var arr = [1, 99, 98, 76, 80, 35, 12,  15, 79, 82];
// var n = 0;
// for(var i = 0; i <= 10; i++ ){
//     if(arr[i]%2===0){
//         n++;
//     }
// }
// console.log(n);

// 3.4 Создать массив из 10 чисел. Вывести на экран наибольшее число из этого массива. 
// var arr = [1, 99, 98, 76, 80, 35, 12,  15, 79, 82];
// var max = arr[0];
// for(var i = 0; i < arr.length; i++ ){
//     if(arr[i]>max){
//         max = arr[i];
//     }
// }
// console.log(max);

var arr = ["John", "Peter", "Wick", "Jiorno", "Diavolo"];

// .pop() удаляет последний элемент массива, возвращает этот элемент
// arr.pop();
// console.log(arr);
 
// .shift()  удаляет первый элемент массива, смещая весь массив влево
// arr.shift();
// console.log(arr);

// .push  добавляет элемент в конец массива
// arr.push("Clarens");
// console.log(arr.push());

// .unshift() добавляет элемент массива в начало
// arr.unshift('Greg', "Cesar");
// console.log(arr);

// var team = ["Buchelatii", "Mista", "Guido", "Narancia"];

// .concat()  объединяет массивы в новой переменной,  возвращает новый массив
// var arr2 = arr.concat(team);
// console.log(arr2);

// .slice()  копирует кусок массива от n до m
// var copy = team.slice(1,3);
// console.log(copy);
// если поставить одно число, то от n до конца
// если ничего не ставить, то скопирует весь массив

// var k=2;
// var p = 1;
// var outSpaces = "";
// var inSpaces = "";


// for(var i = 1; i<=7; i++){
//     if(i === 1 || i === 7){
//         outSpaces = "   ";
//         console.log(outSpaces, "*");
//     }else if(i<=4){
//         for(var j = 1; i<k; i++){
//         outSpaces+=" ";
//         }
//         for(var j = 1; i<p; i++){
//             inSpaces+=" "; 
//         }
//         p++;
//         k--;
//         console.log(outSpaces, "*", inSpaces, "*");
//     }else if(i>4){
//         for(var j = 1; i<=k; i++){
//             outSpaces+=" ";
//         }
//         k++;
//         for(var j = 1; i<=p; i++){
//                 inSpaces+=" ";
                
//         }
//         p--;
//         console.log(outSpaces, "*", inSpaces, "*");
//     }
// }

// "   *"
// "  * *"
// " *   *"
// "*     *"
// " *   *"
// "  * *"
// "   *"


// .splice() вырезает любое количество элементов откуда удобно
// arr.splice(2,1);
// console.log(arr);
// arr.splice(2, 0, "Kewin");
// console.log(arr);
// arr.splice(2,2, "Swen", "Jake");
// console.log(arr);
// console.log(arr.splice(2,1));

// .indexOf()  если такой элемент есть, возвращает его индекс, а если нету, вернёт -1
// console.log(arr.indexOf("Wick"));

// .includes()  возвращает true если есть и false если нет
// console.log(arr.includes("Wick"));

// .join()  превращает массив в строку
// console.log(arr.join("@"));




// для строк

// .split()  превращает строку в массив, как только он наткнётся на разделитель
// var str = "Hello, amazing world";
// console.log(str.split(' '));

// .toUpperCase()
// var str = "Hello, amazing world";
// console.log(str.toUpperCase());

// .toLowerCase()
// var str = "Hello, amazing world";
// console.log(str.toLowerCase());


// var badGuys = ["Evlampiy", "Nikodim", "Akakij", "Policarp"];
// var goodGuys = ["Lukjan", "Feofil", "Afinogen"];

// goodGuys.push(badGuys.splice(badGuys.indexOf('Nikodim'), 1)[0]);
// console.log(goodGuys);


// .map()  Действия с массивом с помощью специальной функции внутри, изменяет массив
// var res = arr.map(function(player, index, arr){
//     return "Mr. " + player;
// });
// console.log(res);
// console.log(arr);



// .forEach()    Действия с массивом, не изменяя его
// arr.forEach(function(player, index, arr){
//     console.log(player);
// })



var numbers = [2,2,2,2];
var numbers2 = [1,2,3,4,5,6]
// .every()  возвращает true, если все одинаковые
// var res = numbers.every(function(num, i, arr){
//     return num === 2
// })



// .some()  возвращает true, если в массиве найдётся хотябы один такой элемент
// var res = numbers.some(function(num, i, arr){
//     return num === 3
// })



// .reduce()
// var res = numbers2.reduce(function(acc, item, i, arr){ // acc - начальное значение
//     return acc+item;
// }, 0)
// console.log(res);



// .reduceRight()  то же, что и reduce, но и наоборот