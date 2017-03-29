/*
Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

var sortedArrayToBST = function(nums) {
    if (nums === null) return null;
    return buildTree(nums, 0, nums.length - 1);
};

var buildTree = function(nums, start, end) {
    if (start > end) return null;
    let mid = parseInt((start + end) / 2);
    let node = new TreeNode(nums[mid]);
    node.left = buildTree(nums, start, mid - 1);
    node.right = buildTree(nums, mid + 1, end);
    return node;
};
