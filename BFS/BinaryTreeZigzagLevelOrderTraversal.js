/*
Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:
[
  [3],
  [20,9],
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
var zigzagLevelOrder = function(root) {
    if(root===null) return [];
    var res=[];
    var queue=[]; //to store node in each level
    queue.push(root);
    var flag=true;
    while(queue.length!==0){
        let level=[]; //to store node value in each level
        let size=queue.length;
        
            if(flag){
                for(let i=0;i<size;i++){
                let temp=queue.shift();
                level.push(temp.val);  //push()
                if(temp.left!==null) queue.push(temp.left);
                if(temp.right!==null) queue.push(temp.right);
                }
            }else{
                for(let i=0;i<size;i++){
                let temp=queue.shift();
                level.unshift(temp.val);   //unshift()
                if(temp.left!==null) queue.push(temp.left);
                if(temp.right!==null) queue.push(temp.right);
                }
            }
        
        res.push(level);
        flag=!flag;
    }
    return res;
};
