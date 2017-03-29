/*
Given two strings s and t, write a function to determine if t is an anagram of s.

For example,
s = "anagram", t = "nagaram", return true.
s = "rat", t = "car", return false.

Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // 1. sorting
    // if (s.length !== t.length) return false;
    // var str1 = s.split('').sort().join('');
    // var str2 = t.split('').sort().join('');
    // return str1===str2;
    
    // 2. use arry with 26 alphabets
    var len1 = s.length;
    var len2 = t.length;
    if (len1 !== len2) return false;
    var res = [];
    for(let j=0; j<26; j++){
        res[j]=0;
    }
    for(let i=0; i<len1; i++){
        res[s.charCodeAt(i)-97]++;
        res[t.charCodeAt(i)-97]--;
    }
    for(let k=0; k<26; k++){
        if(res[k]!==0) return false;
    }
    return true;
};
