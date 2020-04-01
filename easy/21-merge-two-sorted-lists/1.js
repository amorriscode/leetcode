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
function ListNode(val) {
  this.val = val;
  this.next = null;
}

var mergeTwoLists = (l1, l2) => {
  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }

  let head = new ListNode(l1.val <= l2.val ? l1.val : l2.val);
  let tail = head;
  let left = l1.val <= l2.val ? l1.next : l1;
  let right = l1.val <= l2.val ? l2 : l2.next;

  while (left && right) {
    if (left.val <= right.val) {
      tail.next = left;
      tail = left;
      left = left.next;
    } else {
      tail.next = right;
      tail = right;
      right = right.next;
    }
  }

  if (left || right) {
    tail.next = left ? left : right;
  }

  return head;
};