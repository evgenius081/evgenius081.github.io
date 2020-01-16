// const promiseTest = new Promise((resolve, reject) => {
//     if( Math.random() > 0.7){
//         resolve(`OK`);
//     }else{
//         reject(`Not OK`);
//     }
// });

// promiseTest.then((data)=>{
//     // console.log(`Resolve data`, data);
//     throw new Error(`wrong login`)
// }).catch(err=>{
//     console.log(`error message `, err
//     )
// }).finally(()=>{
//     console.log(`request finished`)
// })

// promiseTest.then((data)=>{
//     return data + ` newInfo`
// })
// .then((data)=>{
//     return data + ` blabla`
// })
// .then((data)=>{
//     console.log(data);
// });

// promiseTest.then((data)=>{
//     return new Promise((res, rej)=>{
//         setTimeout(()=>{
//             res(`new string`);
//         }, 1000);
//     })
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((data)=>{
//     console.log(data)
// })



//JSON
// JSON.stringify();
// JSON.parse();
// const person = {
//     name: `John`,
//     city:`Homel`,
//     age: 23,
//     tech: [`CSS`, `JS`],
//     size: {
//         width: 23,
//         height: 46
//     }
// };
// console.log(JSON.stringify(person));// упаковано в строку
// console.log(JSON.parse(JSON.stringify(person)));// распаковано в объект


// AJAX
// es5
const btn = document.getElementById(`btn`);
// btn.addEventListener(`click`, function(){
// const xhr = new XMLHttpRequest();
// xhr.open(`GET`, `https://reqres.in/api/users/2`);
// xhr.send();

// xhr.addEventListener(`readystatechange`, function(){
//     if(xhr.readyState === 4){
//         const div = document.createElement(`div`);
//         div.textContent = JSON.parse(xhr.responseText)[`data`][`first_name`];
//         document.body.appendChild(div);
//     }
// })
// });

const btn2 = document.getElementById(`btn2`);
const input = document.getElementById(`userInput`);
// btn2.addEventListener(`click`, function(){
//     const userName = input.value || `John`;
//     const xhr = new XMLHttpRequest();
//     const data = {
//         name: userName,
//         job: `programmer`
//     }
//     xhr.open(`POST`, `https://reqres.in/api/users`);
//     xhr.setRequestHeader(`Content-type`, `application/json`)
//     xhr.send(JSON.stringify(data));

//     xhr.onreadystatechange = function(){
//         if(xhr.readyState === 4){
//             console.log(JSON.parse(xhr.responseText))
//         }
//     }
// })



// es6
// btn.addEventListener(`click`, function(){
//     fetch(`https://reqres.in/api/users/2`)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//     })
// })

btn.addEventListener(`click`, function(){
    fetch(`https://reqres.in/api/users`, {
        method: `POST`,
        headers: {
            "Content-type" : `application/json`
        },
        body: JSON.stringify({
            name: `John`,
            job: `driver`
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
})