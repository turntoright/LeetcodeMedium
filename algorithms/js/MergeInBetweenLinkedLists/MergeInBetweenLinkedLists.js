/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeInBetween = function(list1, a, b, list2) {
    let headA = list1, headB = list1;
    for (let i = 0; i < a - 1; i++) {
        headA = headA.next;
    }
    for (let i = 0; i < b; i++) headB = headB.next;
    headA.next = list2;
    while (list2 && list2.next) list2 = list2.next;
    list2.next = headB.next;
    return list1;
};