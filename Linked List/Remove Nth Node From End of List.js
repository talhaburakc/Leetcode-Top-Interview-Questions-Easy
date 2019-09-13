/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
	// if linked list contains only one node
    if (head.next == null) return null;
    let = prevToNodeToDelete = [];
	// if head needs to be removed
    let length = getLengthAndPrevToNodeToDelete(head, n, prevToNodeToDelete);
    if (n == length) {
        return head.next;
    }
    prevToNodeToDelete[0].next = prevToNodeToDelete[0].next.next;
    return head;
};

var getLengthAndPrevToNodeToDelete = function(node, n, arr) {
    if (node == null) {
        return 0;
    }
    let result = 1 + getLengthAndPrevToNodeToDelete(node.next, n, arr);
    if (result == n + 1) {
        arr.push(node);
    }
    return result;
};