/*

Given a function fn, return a memoized version of that function.

A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

You can assume there are 3 possible input functions: sum, fib, and factorial.

sum accepts two integers a and b and returns a + b. Assume that if a value has already been cached for the arguments (b, a) where a != b, it cannot be used for the arguments (a, b). For example, if the arguments are (3, 2) and (2, 3), two separate calls should be made.
fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.
 

Example 1:

Input:
fnName = "sum"
actions = ["call","call","getCallCount","call","getCallCount"]
values = [[2,2],[2,2],[],[1,2],[]]
Output: [4,4,1,3,2]
Explanation:
const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);
memoizedSum(2, 2); // "call" - returns 4. sum() was called as (2, 2) was not seen before.
memoizedSum(2, 2); // "call" - returns 4. However sum() was not called because the same inputs were seen before.
// "getCallCount" - total call count: 1
memoizedSum(1, 2); // "call" - returns 3. sum() was called as (1, 2) was not seen before.
// "getCallCount" - total call count: 2
Example 2:

Input:
fnName = "factorial"
actions = ["call","call","call","getCallCount","call","getCallCount"]
values = [[2],[3],[2],[],[3],[]]
Output: [2,6,2,2,6,2]
Explanation:
const factorial = (n) => (n <= 1) ? 1 : (n * factorial(n - 1));
const memoFactorial = memoize(factorial);
memoFactorial(2); // "call" - returns 2.
memoFactorial(3); // "call" - returns 6.
memoFactorial(2); // "call" - returns 2. However factorial was not called because 2 was seen before.
// "getCallCount" - total call count: 2
memoFactorial(3); // "call" - returns 6. However factorial was not called because 3 was seen before.
// "getCallCount" - total call count: 2
Example 3:

Input:
fnName = "fib"
actions = ["call","getCallCount"]
values = [[5],[]]
Output: [8,1]
Explanation:
fib(5) = 8 // "call"
// "getCallCount" - total call count: 1
 

Constraints:

0 <= a, b <= 105
1 <= n <= 10
0 <= actions.length <= 105
actions.length === values.length
actions[i] is one of "call" and "getCallCount"
fnName is one of "sum", "factorial" and "fib"
*/

/**
 * @param {Function} fn
 * @return {Function}
 */

//using 2 methods
// function memoize(fn) {
//     let cache = new Map(); // Cache to store function results
//     let callCount = 0;     // Variable to track the number of unique calls

//     return {
//         call: function (...args) {
//             let key = JSON.stringify(args); // Create a key from the arguments

//             if (cache.has(key)) {
//                 return cache.get(key); // Return cached result if available
//             }

//             // Call the original function since the result isn't cached
//             let result = fn(...args);
//             cache.set(key, result);   // Cache the result
//             callCount++;              // Increment call count for unique call
//             return result;
//         },
//         getCallCount: function () {
//             return callCount;         // Return the total number of unique calls
//         }
//     };
// }

//another method
// function memoize(fn) {
//     let cache = new Map();  // To store results based on arguments
//     let callCount = 0;      // To track how many times the original function is called

//     return function (action, ...args) {
//         if (action === "call") {
//             let key = JSON.stringify(args); // Cache key from arguments

//             if (cache.has(key)) {
//                 return cache.get(key);  // Return cached result if available
//             }

//             // If result is not cached, call the original function
//             let result = fn(...args);
//             cache.set(key, result);  // Store result in cache
//             callCount++;             // Increment call count
//             return result;

//         } else if (action === "getCallCount") {
//             return callCount;  // Return how many times the original function was called
//         }
//     };
// }

// Example usage:
// const sum = (a, b) => a + b;
// const memoizedSum = memoize(sum);

// console.log(memoizedSum.call(2, 2));  // Output: 4 (sum called)
// console.log(memoizedSum.call(2, 2));  // Output: 4 (cached)
// console.log(memoizedSum.getCallCount()); // Output: 1

// console.log(memoizedSum.call(1, 2));  // Output: 3 (sum called)
// console.log(memoizedSum.getCallCount()); // Output: 2

// // Factorial function
// const factorial = (n) => (n <= 1) ? 1 : (n * factorial(n - 1));
// const memoFactorial = memoize(factorial);

// console.log(memoFactorial.call(2)); // Output: 2 (factorial called)
// console.log(memoFactorial.call(3)); // Output: 6 (factorial called)
// console.log(memoFactorial.call(2)); // Output: 2 (cached)
// console.log(memoFactorial.getCallCount()); // Output: 2

// // Fibonacci function
// const fib = (n) => (n <= 1) ? 1 : fib(n - 1) + fib(n - 2);
// const memoFib = memoize(fib);

// console.log(memoFib.call(5)); // Output: 8 (fib called)
// console.log(memoFib.getCallCount()); // Output: 1



function memoize(fn) {
    let cache = new Map();  // Cache to store results based on arguments
    let callCount = 0;      // To track the number of times the original function is called

    // The function returned from memoize will handle caching and counting
    return function (...args) {
        let key = JSON.stringify(args);  // Create a unique cache key from the arguments

        if (cache.has(key)) {
            return cache.get(key);  // Return cached result if available
        }

        // If result is not cached, call the original function
        let result = fn(...args);
        cache.set(key, result);  // Store result in the cache
        callCount++;             // Increment the unique call count
        return result;
    };
}

// Track call count externally
function getCallCount(memoizedFn) {
    return memoizedFn.callCount || 0;
}

const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);

console.log(memoizedSum(2, 2));  // Output: 4 (sum is called)
console.log(memoizedSum(2, 2));  // Output: 4 (cached result)
console.log(getCallCount(memoizedSum)); // Output: 1 (sum was called once with unique inputs)

console.log(memoizedSum(1, 2));  // Output: 3 (new call to sum)
console.log(getCallCount(memoizedSum));




/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */