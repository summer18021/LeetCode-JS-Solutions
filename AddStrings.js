/*
Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

Note:

The length of both num1 and num2 is < 5100.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.
*/
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    var len1 = num1.length;
    var len2 = num2.length;
    var carry = 0;
    var res = [];
    for (let i = len1 - 1, j = len2 - 1; i >= 0 || j >= 0 || carry === 1; i--, j--) {
        let a = i<0 ? 0 : num1.charAt(i)-'0';
        let b = j<0 ? 0 : num2.charAt(j)-'0';
        let sum = a + b + carry;
        res.unshift(sum % 10);
        carry = parseInt(sum / 10);
    }
    return res.join('');
};
