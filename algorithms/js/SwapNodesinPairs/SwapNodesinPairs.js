/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function(head) {
    let fast = head, slow = head;
    if (!fast || !fast.next) return head
    else fast = fast.next;
    while (fast) {
        let val = slow.val;
        slow.val = fast.val;
        fast.val = val;
        fast = fast.next;
        if (!fast) break;
        fast = fast.next;
        slow = slow.next.next;
    }
    return head;
};