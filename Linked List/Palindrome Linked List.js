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
var isPalindrome = function(head) {
    if (head == null) {
        return true;   
    }
    let firstHead = head;
    let middleNode = getMiddleNode(head);
    //console.log('middle', middleNode);
    let secondHead = reverseList(middleNode);
    //console.log('secondhead', secondHead);
    //console.log('firsthead', firstHead);
    while (firstHead && secondHead) {
       if (firstHead.val != secondHead.val) return false;
       firstHead = firstHead.next;
        secondHead = secondHead.next;
    }
    return true;
};

var getMiddleNode = function(head) {
    let cur = head;
    let length = 0;
    while (cur) {
        length++;
        cur = cur.next;
   }
    console.log(length);
    let middle = Math.floor(length / 2);
    cur = head;
    for (let i = 0; i < middle; i++) {
        cur = cur.next;
    }
    return cur;
};

var reverseList = function(head) {
    let prev = head;
    let cur = head.next;
    while (cur) {
        let curNext = cur.next;
        cur.next = prev;
        prev = cur;
        cur = curNext;
        
    }
    head.next = null;
    return prev;
};