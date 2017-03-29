/*
Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

This is case sensitive, for example "Aa" is not considered a palindrome here.

Note:
Assume the length of given string will not exceed 1,010.

Example:

Input:
"abccccdd"

Output:
7

Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.
*/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    var len = s.length;
    var hash = {};
    var count = 0;
    for(let i=0; i<len; i++){
        let temp = s.charAt(i);
        if(!hash[temp]) hash[temp]=1;
        else hash[temp]++;
    }
    for(let j in hash){
        count += parseInt(hash[j]/2)*2;
    }
    return count===len? count: count+1;
};
