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

function likes(array_of_names) {
    const total_names = array_of_names.length;
    let known_names = 2;
    let remaining_names = total_names - known_names;
    if (total_names === 0) {
        return "no one likes this";
    } else if (remaining_names > 0 && total_names === 3) {
        return `${array_of_names[0]}, ${array_of_names[1]} and ${array_of_names[2]} like this`;
    } else if (remaining_names > 0) {
        let message = `${array_of_names[0]}, ${array_of_names[1]} and ${remaining_names} others like this`;
        return message;
    } else if (total_names === 1) {
        return `${array_of_names[0]} like this`;
    }

}

console.log(likes([]));
console.log(likes(["Peter"]));
console.log(likes(["Max", "John", "Mark"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));


