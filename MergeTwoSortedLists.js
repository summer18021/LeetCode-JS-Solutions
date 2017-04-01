/*
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
 
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var dummy = new ListNode(0),
        curr = dummy;
    while (l1 !== null && l2 !== null) {
        if (l1.val > l2.val) {
            curr.next = l2;
            l2 = l2.next;
        }else {
            curr.next = l1;
            l1 = l1.next;
        }
        curr = curr.next;
    }
    curr.next = l1 === null ? l2 : l1;
    return dummy.next;
};
