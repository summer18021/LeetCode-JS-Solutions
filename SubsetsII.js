/*
Given a collection of integers that might contain duplicates, nums, return all possible subsets.

Note: The solution set must not contain duplicate subsets.

For example,
If nums = [1,2,2], a solution is:

[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    if(nums.length===0) return [[]];
    nums.sort(function(a,b){
        return a-b;
    });
    var res=[];
    helper(res,[],nums,0);
    return res;
};
var helper = function(res,temp,nums,pos){
    res.push(temp.slice());
    for(let i=pos;i<nums.length;i++){
        if(i>pos && nums[i]===nums[i-1]) continue;
        temp.push(nums[i]);
        helper(res,temp,nums,i+1);
        temp.pop();
    }
};
