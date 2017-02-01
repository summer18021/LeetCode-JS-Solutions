/*
A peak element is an element that is greater than its neighbors.

Given an input array where num[i] ≠ num[i+1], find a peak element and return its index.

The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

You may imagine that num[-1] = num[n] = -∞.

For example, in array [1, 2, 3, 1], 3 is a peak element and your function should return the index number 2.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if(nums.length===1) return 0;
    if(nums[0]>nums[1]) return 0;
    var len=nums.length;
    if(nums[len-2]<nums[len-1]) return len-1;
    var left=1,
        right=len-2;
    while(left+1<right){
        let mid=parseInt(left+(right-left)/2);
        if(nums[mid]<nums[mid-1]) right=mid;
        else if(nums[mid]<nums[mid+1]) left=mid;
        else right=mid;
    }
    return nums[left]<nums[right]?right:left;
};
