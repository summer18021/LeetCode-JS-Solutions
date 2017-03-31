/*
Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Here are few examples.
[1,3,5,6], 5 → 2
[1,3,5,6], 2 → 1
[1,3,5,6], 7 → 4
[1,3,5,6], 0 → 0
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (nums === null || nums.length === 0) return 0;
    var left = 0,
        right = nums.length-1;
    while (left+1 < right) {
        let mid = left + Math.floor((right-left)/2);
        if(nums[mid]<target) left = mid;
        else if(nums[mid]>target) right = mid;
        else return mid;
    }
    if (nums[left] >= target) return left;
    if (nums[right] >= target) return right;
    return right+1;
};
