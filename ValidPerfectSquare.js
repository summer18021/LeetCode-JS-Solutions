/*
Given a positive integer num, write a function which returns True if num is a perfect square else False.

Note: Do not use any built-in library function such as sqrt.

Example 1:

Input: 16
Returns: True
Example 2:

Input: 14
Returns: False
*/

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    // a square number is 1+3+5+7+...
    if (num < 1) return false;
    for (let i=1; num>0; i+=2) {
        num -= i;
    }
    return num===0;
};
