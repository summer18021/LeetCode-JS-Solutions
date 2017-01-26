/*
Given a collection of numbers that might contain duplicates, return all possible unique permutations.

For example,
[1,1,2] have the following unique permutations:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    if(nums===undefined || nums.length===0) return [[]];
    nums.sort(function(a,b){
        return a-b;
    });
    var visited=[];
    for(let i=0,len=nums.length;i<len;i++){
        visited.push(false);
    }
    var res=[];
    helper(res,visited,[],nums);
    return res;
};
var helper = function (res,visited,temp,nums){
    if(temp.length===nums.length){
        res.push(temp.slice());
    }
    for(let i=0,len=nums.length;i<len;i++){
        if(visited[i]===true || (i!==0 && nums[i]===nums[i-1] && visited[i-1]===false)) continue;
        temp.push(nums[i]);
        visited[i]=true;
        helper(res,visited,temp,nums);
        temp.pop();
        visited[i]=false;
    }
};
