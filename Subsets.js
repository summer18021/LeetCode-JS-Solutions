/*
Given a set of distinct integers, nums, return all possible subsets.

Note: The solution set must not contain duplicate subsets.

For example,
If nums = [1,2,3], a solution is:

[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    var res=[];
    if(nums.length===0) return [[]];
    helper(res,[],nums,0);
    return res;
};
var helper = function(res,temp,nums,pos){
    res.push(temp.slice()); 
    for(let i=pos;i<nums.length;i++){
        temp.push(nums[i]);
        helper(res,temp,nums,i+1);
        temp.pop();
    }
};
