/*
Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
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
var levelOrder = function(root) {
    var res=[];
    if(root===null) return res;
    var queue=[];
    queue.push(root); // use queue[] to store each level node
    while(queue.length!==0){
       let size=queue.length; 
       let level=[]; //use level[] to store each level's node value
       for(let i=0;i<size;i++){
           let temp=queue.shift();
           level.push(temp.val);
           if(temp.left!==null) queue.push(temp.left);
           if(temp.right!==null) queue.push(temp.right);
       }
       res.push(level);
    }
    return res;
};
