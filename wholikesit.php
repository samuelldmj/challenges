<?php
/*
//Problem
You probably know the "like" system from Facebook and other pages.
people can "like" blog posts, pictures or other items.
We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item.
It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

Note: For 4 or more names, the number in "and 2 others" simply increases.

*/

//solution
function likes( $names){
    $totalNames = count($names);
    $knownNames = 2;
    $remainingNamesCount = $totalNames - $knownNames; 

    if($remainingNamesCount > 0 && $totalNames === 3){
        return $message = "{$names[0]}, {$names[1]} and {$names[2]} like this";
    }    
    else if($remainingNamesCount > 0){
        return $message = "{$names[0]}, {$names[1]} and {$remainingNamesCount} others like this";
    }
    else if(empty($totalNames)){
        return "no one likes this";

    } elseif($totalNames === 1){
        return  $message = "{$names[0]} likes this";
    }
    else{
       return  $message = "{$names[0]} and {$names[1]} like this";
    }

}

echo likes([]) .  PHP_EOL;
echo likes(["Peter"]) . PHP_EOL;
echo likes(["Alex", "Jacob"]) . PHP_EOL;
echo likes(["Alex", "Jacob", "Max"]) . PHP_EOL;
echo likes(["Alex", "Jacob", "Mark", "Max"]);




?>