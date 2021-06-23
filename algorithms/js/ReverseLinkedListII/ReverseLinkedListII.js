/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
    if (left === right) return head;
    let head1 = head;
    const vals = [];
    for (let i = 0; i < left - 1; i++)
        head1 = head1.next;
    let head2 = head1;
    for (let i = 0; i <= right - left; i++) {
        vals.push(head2.val);
        head2 = head2.next; 
    }
    for (let i = vals.length - 1; i >= 0; i--) {
        head1.val = vals[i];
        head1 = head1.next;
    }
    return head;
};