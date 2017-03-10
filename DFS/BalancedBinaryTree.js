/*
Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as a binary tree 
in which the depth of the two subtrees of every node never differ by more than 1.
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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (root === null) return true;
    return helper(root) !== -1;
};
var helper = function(node) {
    if (node === null) return 0;
    var lH = helper(node.left);
    if (lH === -1) return -1;
    var rH = helper(node.right);
    if (rH === -1) return -1;
    
    if (lH-rH>1 || rH-lH>1) return -1;
    return Math.max(lH, rH) + 1;
};
