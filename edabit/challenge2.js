/*
Convert Hours into Seconds
Write a function that converts hours into seconds.

Examples
howManySeconds(2) ➞ 7200

howManySeconds(10) ➞ 36000

howManySeconds(24) ➞ 86400
Notes
60 seconds in a minute, 60 minutes in an hour
Don't forget to return your answer.
*/

function howManySeconds(hours) {
	return hours * 3600;
}

console.log(howManySeconds(2));
console.time(howManySeconds(2))