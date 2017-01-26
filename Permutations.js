/*
Given a collection of distinct numbers, return all possible permutations.
For example,[1,2,3] have the following permutations:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var res=[];
    if(nums===undefined || nums.length===0) return [[]];
    helper(res,[],nums,0);
    return res;
};

var helper = function(res,temp,nums){
    if(temp.length===nums.length){
        res.push(temp.slice());
        return;
    }
    for(let i=0;i<nums.length;i++){
        if(temp.includes(nums[i])) {
            continue;
        }
        temp.push(nums[i]);
        helper(res,temp,nums);
        temp.pop();
    }
};
