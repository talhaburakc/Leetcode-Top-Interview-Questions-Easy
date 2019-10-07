/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let visitedArr = [];
    let cur = head;
    while (cur != null && !(visitedArr.includes(cur)) ) {
        visitedArr.push(cur);
        cur = cur.next;
    }
    return cur != null;
};