<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
</head>
<?php
    //if use [] array in php will gain 1 more index in array
    //1D Array
    // $days=array("Mon","Tue","Wed","Thu","Fri","Sat","Sun");
    // //Display single element 
    // echo $days[0]."<br>";
        //for loop
    // for($i=0;$i<count($days);$i++){
    //     echo $days[$i]."<br>";
    // }
        //foreach loop
    // foreach($days as $day){
    //     echo $day."<br>";
    // }
        //while loop
    // $i=0;
    // while($i<count($days)){
    //     echo $days[$i]."<br>";
    //     $i++;
    // }
        //do while loop
    // $j=0;
    // do{
    //     echo $days[$j]."<br>";
    //     $j++;}
    //     while($j<count($days));
    //Display all elements

    //2D Array
    $students=[
    ["id","name"],
    ["1","Apple"],
    ["2","Banana"],
    ["3","Lemon"],];
    
    print "\n".$students[2][1]."<br>";
    for($i=0;$i<4;$i++){
        for($j=0;$j<2;$j++){
            echo $students[$i][$j]."-";
        }
        print "<br>";
    }   
    
     
    ?>
<body>
    
</body>
</html>