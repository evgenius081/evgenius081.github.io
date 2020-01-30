// ES7

let str = `Hello world`;
// console.log(str.startsWith("He"));
// console.log(str.startsWith(`llo), 2);
// console.log(str.includes(`world`, 5));
// console.log(str.repeat(4)); // повторяет строку 4 раза

let num = 2;
// console.log(Math.pow(num, 2));
// console.log(num**5);

let obj = {
    a:1,
    b:99// перекроется при объединении
}
let obj2 = {
    b:2,
    c:3
}
// let newObj = Object.assign({},obj, obj2)    // изменяет первый объект если не указывать фигурные скобки
// console.log(newObj);

let arr = [1, 2245, 2453, 42, 599];
// console.log(arr.find( x=>x>3 )); // возвращает первый элемент массива который попадает под описание



// ES8
let str2 = `Hello`;
// console.log(str2.padStart(10));
// console.log(str2.padEnd(10)+`!`);
// for(letter of str2){
//     console.log(letter)
// }

let obj3 = {
    a:1,
    b:2,
    c:3
}
// console.log(Object.values(obj3));
// console.log(Object.entries(obj));

let arr2 = [1, 2245, 2453, 42, 599];
// for(item of arr2 ){
//     console.log(item)
// }



//ES9
let str3 = "     Hello world    ";
// console.log(str3.trim())




// ES10

// console.log(str3.trimStart());
// console.log(str3.trimEnd());


let arr3 = [3, [9, 99], [7,4], 8, [3, [4,8], 23] ,,,,,];
// console.log(arr3.flat(3)) //на сколько уровней выравивать массив и чистит пустые ячейки
// console.log(`result`, arr3.flatMap( x=>x+`@` ))

let arr4 = [[`a`, 3], [`b`, 4], [`c`, 9]];
console.log(Object.fromEntries(arr4))