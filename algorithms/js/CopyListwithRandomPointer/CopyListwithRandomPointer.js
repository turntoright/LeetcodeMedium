/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
 var copyRandomList = function(head) {
    if (!head) return null;
    const clones = new Map();
    let node = head;
    while (node) {
        clones.set(node, new Node(node.val));
        node = node.next;
    }
    node = head;
    while (node) {
        clones.get(node).next = clones.get(node.next) || null;
        clones.get(node).random = clones.get(node.random) || null;
        node = node.next;
    }
    return clones.get(head);
};