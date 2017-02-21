/*
Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

For example:
Given the following binary tree,
   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
You should return [1, 3, 4].
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    var result=[];
    helper(root,result,0);
    return result;
};
var helper = function(node, result,level){
    if(node===null) return;
    if(result.length===level) result.push(node.val);
    helper(node.right, result, level+1);
    helper(node.left, result, level+1);
};
