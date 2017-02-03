/*
Given a binary tree, return all root-to-leaf paths.

For example, given the following binary tree:

   1
 /   \
2     3
 \
  5
All root-to-leaf paths are:

["1->2->5", "1->3"]
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    var res=[];
    if(root!==null) helper(root,"",res);
    return res;
};
var helper = function(root,path,res){
   if(root.left===null && root.right===null) res.push(path+root.val);
   if(root.left!==null) helper(root.left,path+root.val+"->",res);
   if(root.right!==null) helper(root.right,path+root.val+"->",res);
};
