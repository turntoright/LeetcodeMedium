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
 var detectCycle = function(head) {
    const map = new Map();
    while (head) {
        if (!head.next) return null;
        if (map.has(head.next)) return head.next;
        map.set(head, 1);
        head = head.next;
    }
    return null;
};