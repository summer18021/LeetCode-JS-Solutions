/*
Given a binary tree, find the leftmost value in the last row of the tree.

Example 1:
Input:

    2
   / \
  1   3

Output:
1
Example 2: 
Input:

        1
       / \
      2   3
     /   / \
    4   5   6
       /
      7

Output:
7
Note: You may assume the tree (i.e., the given root node) is not NULL.
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
var findBottomLeftValue = function(root) {
    var queue = []; //store nodes in each level 
    queue.push(root);
    var res = root.val;
    while (queue.length !== 0) {
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let temp = queue.shift();
            if (i === 0) res = temp.val; //use res to store the first node value of each level
            if (temp.left !== null) queue.push(temp.left);
            if (temp.right !== null) queue.push(temp.right);
        }
    }
    return res;
};
