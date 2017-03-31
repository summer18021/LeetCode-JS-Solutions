/*
Write a function that takes a string as input and reverse only the vowels of a string.

Example 1:
Given s = "hello", return "holle".

Example 2:
Given s = "leetcode", return "leotcede".

Note:
The vowels does not include the letter "y".
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var base=["a","e","i","o","u","A","E","I","O","U"];
    var arry=s.split('');
    var left=0,right=arry.length-1;
    while(left<right){
        let f1=base.indexOf(arry[left]);
        let f2=base.indexOf(arry[right]);
        if(f1===-1) left++;
        if(f2===-1) right--;
        if(f1!==-1 && f2!==-1){
            let temp=arry[left];
            arry[left]=arry[right];
            arry[right]=temp;
            left++;
            right--;
        }
    }
    return arry.join('');
};
