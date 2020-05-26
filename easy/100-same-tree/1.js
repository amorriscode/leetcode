/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = (p, q) => {
  if (p && !q || !p && q) {
    return false;
  }

  if (!p && !q) {
    return true;
  }

  if (p.left && !q.left || !p.left && q.left) {
    return false;
  }

  if (p.right && !q.right || !p.right && q.right) {
    return false;
  }

  return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

const testTreeOne = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const testTreeTwo = new TreeNode(1, new TreeNode(2, 2), new TreeNode(3, 4));

const tests = [
  {
    expect: true,
    answer: isSameTree(testTreeOne, testTreeOne),
  },
  { 
    expect: false,
    answer: isSameTree(testTreeOne, testTreeTwo),
  },
];

tests.forEach(test => {
  console.assert(test.answer === test.expect, `Expected ${test.answer} to equal ${test.expect}`);
});