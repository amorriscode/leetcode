/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isMirror = (t1, t2) => {
  if (t1 === null && t2 === null) return true;
  if (t1 === null || t2 === null) return false;
  if (t1.val !== t2.val) return false;

  return t1.val === t2.val && isMirror(t1.right, t2.left) || isMirror(t1.left, t2.right);
}

const isSymmetric = root => {
  return isMirror(root, root);
};

const testTreeOne = new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), new TreeNode(2, new TreeNode(4), new TreeNode(3)));

const testTreeTwo = new TreeNode(1, new TreeNode(2, null, new TreeNode(3)), new TreeNode(2, null, new TreeNode(3)));

const tests = [
  {
    expect: true,
    answer: isSymmetric(testTreeOne),
  },
  { 
    expect: false,
    answer: isSymmetric(testTreeTwo),
  },
];

tests.forEach(test => {
  console.assert(test.answer === test.expect, `Expected ${test.answer} to equal ${test.expect}`);
});