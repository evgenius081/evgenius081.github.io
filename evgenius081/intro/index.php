<?php
echo 'sbn<br>';
echo 124;
echo '<input type="text">';



echo '<br>';
$d = 'hello';
$g = $d.' world';
echo $g;
echo "<br>";
$g  .= " !!!";
echo $g;



echo "<br>";
define('Constant', 'windows'); //объявление константы
if (defined("Constant")) echo "Константа была объявлена";
echo "<br>";
echo Constant;


echo "<br>";
$speed = 1000;
if($speed > 60)
    echo "Speed limit was broken";
elseif($speed === 40)
    echo "Speed is in limit";
elseif($speed === 20)
    echo "Ur to slow";



// switch case и тернарный оператор как в JS



$array = array(
    "foo" => "bar",
    "bar" => "foo"
);

echo "<br>";
$array = array('red', 'green', 'blue');
foreach($array as $key => $value){
    echo $key." Color of mood ".$value."<br>";
};


echo "<br>";
for($i = 0; $i<100 && $i>6; $i/2){
    echo "<br>".$i;
}

$array = array(1,2,3,4,5,6,7,8,9,10);
$b = count($array);//оптимизация
for($i = 0; $i < $b; $i++){
    echo "<br>".$array[$i];
}

echo "<br>";
foreach($array as $value){
    echo "<br>".$value;
}


echo "<br>";
$counter = 0;
$a = count($array);
while($counter<$a){
    echo "<br>".$array[$counter];
    $counter+=1;
}

?>