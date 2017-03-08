/*
Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

Note: 
You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

Follow up:
What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?

Hint:

Try to utilize the property of a BST.
What if you could modify the BST node's structure?
The optimal runtime complexity is O(height of BST).
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
 * @param {number} k
 * @return {number}
 */
 // 2. DFS in-order iterative
// var kthSmallest = function(root,k){
//     var stack = [];
    
//     while(root!==null){
//         stack.push(root);
//         root=root.left;
//     }
    
//     while(k!==0){
//         var temp = stack.pop();
//         k--;
//         if(k===0) return temp.val;
//         var right = temp.right;
//         while(right!==null){
//             stack.push(right);
//             right=right.left;
//         }
//     }
//     return -1;
// };

//  1: binary search method, count the number of node in left
var kthSmallest = function(root, k) {
    var leftCount = countNodes(root.left);
    if(k<=leftCount) return kthSmallest(root.left,k);
    else if(k>leftCount+1) return kthSmallest(root.right, k-1-leftCount);
    return root.val;
};

var countNodes = function(node){
    if(node===null) return 0;
    return 1+countNodes(node.left)+countNodes(node.right);
};

