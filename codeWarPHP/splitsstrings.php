<?php
/*
Complete the solution so that it splits the string into pairs of two characters.
If the string contains an odd number of characters then it should replace the missing second character
of the final pair with an underscore ('_').

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

//solution
// function solution($str) {
//     $underScore = '_';
//     $merging = $str.$underScore;
//     $split = strlen($str) % 2 !== 0 ? str_split($merging, 2) : str_split($str, 2);
//     return $split;
//   }

// echo '<pre>';
// print_r(solution('abc'));
// echo '</pre>';


// function splitStringIntoPairs($str) {
//     // Check if the length of the string is odd, if so, add an underscore
//     if (strlen($str) % 2 != 0) {
//         $str .= '_';
//     }

//     // Use str_split to split the string into an array of characters
//     $chars = str_split($str, 2);

//     return $chars;
// }

// // Test cases
// $str1 = 'abc';
// $str2 = 'abcdefg';

// echo '<pre>';
// print_r(splitStringIntoPairs($str1));
// print_r(splitStringIntoPairs($str2));
// print_r(splitStringIntoPairs(""));
// echo '</pre>';

function splitStringIntoPairs($str) {
    // Check if the length of the string is odd, if so, add an underscore
    if (strlen($str) % 2 != 0) {
        $str .= '_';
    }

    // Use str_split to split the string into an array of characters
    $chars = str_split($str, 2);

    // Output intermediate result for debugging
    echo '<pre>';
    echo "Input string: $str\n";
    echo "Intermediate result: ";
    print_r($chars);
    echo '</pre>';

    return $chars;
}

// Test cases
$str1 = 'abc';
$str2 = 'abcdef';

echo '<pre>';
print_r(splitStringIntoPairs($str1));
print_r(splitStringIntoPairs($str2));
echo '</pre>';















?>