<?php

// function describe(float ...$values): array
// {
//     $min = min($values);
//     $max = max($values);
//     $mean = array_sum($values) / count($values);
//     $variance = 0.0;
//     foreach ($values as $val) {
//         $variance += pow(($val - $mean), 2);
//     }
//     $std_dev = (float) sqrt($variance / count($values));
//     return [$min, $max, $mean, $std_dev];
// }
// $values = [1.0, 9.2, 7.3, 12.0];
// print_r(list($min, $max, $mean, $std) = describe(...$values));


// $a = 1;
// function example(): void
// {
//     global $a, $b;
//     echo $a . PHP_EOL;
//     $a = 2;
//     $b = 3;
// }
// example();
// echo $a . PHP_EOL;
// echo $b . PHP_EOL;


//testing
// print("Enter a number: ");
// # Reads a value and converts it
// # to the integer format:
// $number = (int)trim(fgets(STDIN));
// # The ternary operator is used:
// $word = ($number % 2 == 0) ? "even" : "odd";
// # The result of the test for even/odd:
// print("This is an $word number");
