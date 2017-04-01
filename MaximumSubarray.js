/*
Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
the contiguous subarray [4,-1,2,1] has the largest sum = 6.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var curr = nums[0];
    var temp = 0;
    nums.forEach(function(item){
        temp = Math.max(item, item+temp);
        curr = Math.max(temp, curr);
    });
    return curr;
};
