/*
Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.

Example 1:
Input: "abab"

Output: True

Explanation: It's the substring "ab" twice.
Example 2:
Input: "aba"

Output: False
Example 3:
Input: "abcabcabcabc"

Output: True

Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    var len = s.length;
    for(let i=0; i < Math.floor(len/2); i++) {
        let temp = '';
        if(i===0) {
            temp = s.substring(1,len).concat(s.charAt(0));
        }else if (len%(i+1) === 0) {
            temp = s.substring(i+1,len).concat(s.substring(0,i+1));
        }
        if(temp === s) return true;
    }
    return false;
};
