/*
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
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
 * @return {number}
 */
var minDepth = function(root) {
    if (root === null) return 0;
    var queue = [];
    queue.push(root);
    var level = 1;
    while (queue.length !== 0) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let temp = queue.shift();
            if (temp.left === null && temp.right === null) return level;
            if (temp.left !== null) queue.push(temp.left);
            if (temp.right !== null) queue.push(temp.right);
        }
        level++;
    }
    return level;
};
