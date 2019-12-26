// DOM - Document Object Model
// const userName = document.getElementById(`userName`);
// console.log(userName.parentElement);

// parentElement
// previousElementSibling
// children[0]
// nextElementSibling
// firstElementChild
// LastElementChild

// const start = document.getElementById("start");
// // 1
// console.log(start.nextElementSibling);
// // 2
// console.log(start.parentElement.nextElementSibling.children[0].children[0].firstElementChild);
// // 3
// console.log(start.parentElement.previousElementSibling);



// const tests = document.getElementsByClassName(`test`)[0];
// console.log(tests);



// const tags = document.getElementsByTagName(`li`);
// console.log(tags)

// const ol = document.getElementById(`ol`);
// const lis = ol.getElementsByTagName("li");
// console.log(lis)

// const elem = document.querySelector(".test");
// console.log(elem);

// const elements = document.querySelectorAll(".test"); //статический
// console.log(elements)

// const el = document.getElementsByClassName("test"); //динамический
// console.log(el);

// const ol = document.getElementById("ol");
// const h2 = ol.getElementsByTagName("h2")[0];
// console.log(h2.innerText);
// console.log(h2.textContent); //разница в том, что innerText показывает отображаемый на экране текст, а textContent показывает весь текст
// h2.textContent = "this is Sparta";
// h2.innerText = "Smaug";
// h2.innerHTML = `
// <select>
//     <option value="one">one</option>
//     <option value="two">two</option>
//     <option>three</option>
// </select>
// `

// console.log(ol.innerHTML);


// h2.onclick = function(){
//     console.log(h2.textContent)
// }

// =

// h2.addEventListener("click", function(){
//     console.log(h2.innerText)
// })

// h2.addEventListener("click", function(){
//     console.log("another listener")
// })

// h2.onclick = function(){
//     console.log(h2.textContent);
// }

// h2.onclick = function(){
//     console.log("another listener")   // перекрывает предыдущий onclick
// }

const one = document.getElementById(`one`);
const two = document.getElementById(`two`);
const three = document.getElementById(`three`);
const four = document.getElementById(`four`);
const five = document.getElementById(`five`);

one.addEventListener("click", function(){
    console.log("I`m number one");
})

two.addEventListener("click", function(){
    console.log("I`m number two");
}, true)

three.addEventListener("click", function(){
    console.log("I`m number three");
}, true)//перехват

four.addEventListener("click", function(){
    console.log("I`m number four");
})

five.addEventListener("click", function(){
    console.log("I`m number five");
})



const btns = document.getElementsByTagName(`button`);
function func(){
    console.log(this.innerText)
}
for(let i = 0; i<btns.length; i++){
    btns[i].addEventListener("click", function);
}