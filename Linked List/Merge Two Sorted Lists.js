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
    let resultDummy = new ListNode();
    let cur = resultDummy;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            cur.next = new ListNode(l1.val);
            l1 = l1.next;
        } else {
            cur.next = new ListNode(l2.val);
            l2 = l2.next;
        }
        cur = cur.next;
    }
    let l = l1 ? l1 : l2;
    while (l) {
        cur.next = new ListNode(l.val);
        cur = cur.next;
        l = l.next;
    }
    
    return resultDummy.next;
};