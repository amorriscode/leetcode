
const mergeTwoLists = (l1, l2) => {
  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }

  let head = new ListNode();
  let left = l1;
  let right = l2;

  if (l1.val <= l2.val) {
    head = l1;
    left = l1.next;
  } else {
    head = l2;
    right = l2.next;
  }

  let tail = head;

  while (left && right) {
    if (left.val <= right.val) {
      tail.next = left;
      left = left.next;
    } else {
      tail.next = right;
      right = right.next;
    }

    tail = tail.next;
  }

  tail.next = left ? left : right;

  return head;
};