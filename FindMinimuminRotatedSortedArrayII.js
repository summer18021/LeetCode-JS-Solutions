/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

Find the minimum element.

The array may contain duplicates.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if(nums===undefined) return undefined;
    if(nums.length===0) return undefined;
    var left=0,
        right=nums.length-1;
    while(right-left>1){
        let mid=parseInt(left+(right-left)/2);
        if(nums[mid]>nums[right]) left=mid;
        else if(nums[mid]<nums[right]) right=mid;
        else right--;
    }
    return nums[left]>nums[right]?nums[right]:nums[left];
};
