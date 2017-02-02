/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if(nums===null || nums===undefined || nums.length===0) return -1;
    var left=0,
        right=nums.length-1;
    while(left+1<right){
        let mid=parseInt(left+(right-left)/2);
        if(nums[mid]===target) return mid;
        if(nums[left]<nums[mid]){
            if(target>=nums[left] && target<=nums[mid]) right=mid;
            else left=mid;
        }else{
            if(target>=nums[mid] && target<=nums[right]) left=mid;
            else right=mid;
        }
    }
    return nums[left]===target?left:nums[right]===target?right:-1;
};
