/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (head == null) return null;
    if (head.next == null) return head;
    let prev = head;
    let cur = head.next;
    let curnext = cur.next;
    while (curnext != null) {
        cur.next = prev;
        prev = cur;
        cur = curnext;
        curnext = curnext.next;
    }
    head.next = null;
    cur.next = prev;
    return cur;
};

//RECUSRISVE SOLUTINO

var reverseList = function(head) {
    if (head == null) return null;
    if (head.next == null) return head;
    return reverseListHelper(null, head);
};

var reverseListHelper = function(prev, cur) {
    if (cur == null) return prev;
    let temp = cur.next;
    cur.next = prev;
    return reverseListHelper(cur, temp);
};