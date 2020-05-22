/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = head => {
  if (!head) {
    return null;
  }

  const seen = new Set();
  let curr = head;
  let last = head;

  while (last.next) {
    if (seen.has(curr.val)) {
      last.next = curr.next;
    } else {
      seen.add(curr.val);
      last = curr;
    }

    curr = curr.next;
  }

  return head;
};

const tests = [
  {
    expect: new ListNode(1, new ListNode(2)),
    answer: deleteDuplicates(new ListNode(1,
      new ListNode(1,
        new ListNode(2)
      )
    )),
  },
  { 
    expect: new ListNode(1, new ListNode(2, new ListNode(3))),
    answer: deleteDuplicates(new ListNode(1,
      new ListNode(1,
        new ListNode(2,
          new ListNode(3, 
            new ListNode(3)
          )
        )
      )
    )),
  },
];

tests.forEach(test => {
  console.assert(
    JSON.stringify(test.answer, null, 2) === JSON.stringify(test.expect, null, 2),
    `Expected ${JSON.stringify(test.answer, null, 2)} to equal ${JSON.stringify(test.expect, null, 2)}`
  );
})