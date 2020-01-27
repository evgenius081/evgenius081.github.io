$();// = jQuery();
// $(document).ready(function(){
//     alert(`it works`);     

// });

$(function(){
    // let text = document.getElementById(`text`);
    // console.dir(text);



    // let text = $(`#text`);
    // console.log( text.text("some new text").text() );



    // const test = $(`#test`);
    // console.log( test.html(`<ul class="test2"><li>Hello there</li></ul>`) );



    const btn = $(`#btn`);
    const test = $(`#test`);
    const userInput = $(`#userInput`);
    const btns = $(`button`);

    // btn.click(function(){
    //     // const elem = $(`<p>its a new info</p>`);
    //     // test.append(elem);
    //     // test.prepend(elem);
    //     // elem.appendTo(test);
    //     // elem.prependTo(test);

    //     // console.log( userInput.val() );
        
    //     // btn.remove();

    // });

    btns.click(function(){
        // $(this).addClass(`red`);
        // $(this).toggleClass(`red`);
        // $(this).removeClass(`red`);
        // $(this).hasClass(`red`);

        $(this).attr(`class`, ``);
        console.log($(this).attr(`class`));
        btns.eq(2).addClass(`red`);
    })



    // Animation

    btns.click(function(){
        $(this).fadeOut(2000);
        //.slideIn
        //.slideUp
        //.slideDown
        //.show
        //.hide
    })

})



