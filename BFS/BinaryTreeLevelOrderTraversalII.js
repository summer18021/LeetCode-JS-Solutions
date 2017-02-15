/*
Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
]
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    var res=[];
    if(root===null) return res;
    var queue=[];
    queue.push(root);
    while(queue.length!==0){
        let level=[];
        let size=queue.length;
        for(let i=0;i<size;i++){
            let temp=queue.shift();
            level.push(temp.val);
            if(temp.left!==null) queue.push(temp.left);
            if(temp.right!==null) queue.push(temp.right);
        }
        res.push(level);
    }
    return res.reverse();
};
