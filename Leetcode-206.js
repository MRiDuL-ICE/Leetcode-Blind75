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
var reverseList = function (head) {
  let reversed = null;
  let current = head;
  if (current !== null) {
    let forward = current.next;
    current.next = reversed;
    reversed = current;
    current = forward;
  }
  return reversed;
};

head = [1, 2, 3, 4, 5];
console.log(reverseList(head));
