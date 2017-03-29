/*
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // 1. sorting
    nums.sort();
    return nums[parseInt(nums.length/2)];
    
    
    // 2. hashtable
    
    // var len = nums.length;
    // var flag = parseInt(len/2);
    // var hash = {};
    // var res;
    // nums.forEach(function(item) {
    //     if (!hash[item]) hash[item] = 1;
    //     else hash[item]++;
    //     if (hash[item] > flag) {
    //         res = item;
    //     } 
    // });
    // return res;
};
