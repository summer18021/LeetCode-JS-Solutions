/*
You need to find the largest value in each row of a binary tree.

Example:
Input: 

          1
         / \
        3   2
       / \   \  
      5   3   9 

Output: [1, 3, 9]
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
var largestValues = function(root) {
    var res = [];
    if (root === null) return [];
    var queue = []; // store nodes in each level
    queue.push(root);
    while (queue.length !== 0) {
        let size = queue.length;
        let level = []; // store node value of each level
        for (let i = 0; i < size; i++) {
            let temp = queue.shift();
            level.push(temp.val);
            if (temp.left !== null) queue.push(temp.left);
            if (temp.right !== null) queue.push(temp.right);
        }
        let largest = helper(level);
        res.push(largest);
    }
    return res;
};

var helper = function(arry) {
    var len = arry.length;
    var large = arry[0];
    for (let i = 1; i < len; i++) {
        if (arry[i] > large) large = arry[i];
    }
    return large;
};
