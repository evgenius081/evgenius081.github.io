<?php
if(file_exists('test.xml')){
    $xml = simplexml_load_string(file_get_contents('https://www.liga.net/tech/gadgets/rss.xml'));
    foreach($xml -> channel -> item  as $item){
        echo '<h1>'.$item -> title.'</h1><br />';
        echo $item -> description.'<br>';
        echo '<a href="'.$item -> link .'">link</a><br>';
    }
}else{
    exit('Can`t open file test.xml');
}
