$(function(){
    const creater = $(`#create`);
    const changer = $(`#change`);
    const deleter = $(`#delete`);
    const userText = $(`#userText`);
    const userColor = $(`#userColor`);
    const toDoList = $(`#toDoList`);
    const select = $(`#userStyleType`);
    creater.click(function(){
        if(userText.val()){
            let item = $(`<li>${userText.val()}</li>`);
            item.appendTo(toDoList).css(`color`, userColor.val()).click(clickElementHandler);
            userText.val('');
            userColor.val('');
        }
    })

    function clickElementHandler(){
        if( $(this).hasClass(`active`) ){
            $(this).removeClass(`active`);
        }else{
            if( $(`li`).hasClass(`active`) ){
                $(`.active`).removeClass(`active`);
                $(this).addClass(`active`);
                userText.val( $(this).text() );
                userColor.val( $(this).css(`color`) ); 
                userStyle.type.val( $(this).css(`list-style-type`))
            }else{
                $(this).addClass(`active`);
                userText.val( $(this).text() );
                userColor.val( $(this).css(`color`) );
                userStyleType.val( $(this).css(`list-style-type`)) 
            }
        }
    }

    changer.click(function(){
        $(`.active`).css(`color`, userColor.val());
        $(`.active`).text(userText.val());
        userColor.val('');
        userText.val('')
    })

    deleter.click(function(){
        $(`.active`).detach();
    })
});