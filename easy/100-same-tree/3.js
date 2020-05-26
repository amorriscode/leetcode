/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

const check = (p, q) => {
  if (p === null && q === null) {
    return true;
  }

  if (p === null || q === null) {
    return false;
  }

  return p.val === q.val;
}


/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = (p, q) => {
  if (p === null && q === null) {
    return true;
  }

  if (!check(p, q)) {
    return false;
  }

  const pQueue = [];
  const qQueue = [];

  pQueue.push(p);
  qQueue.push(q);

  while(pQueue.length) {
    let currP = pQueue.shift();
    let currQ = qQueue.shift();

    if (!check(currP, currQ)) {
      return false;
    }

    if (currP !== null) {
      if (!check(currP.left, currQ.left)) {
        return false;
      }

      if (currP.left !== null) {
        pQueue.push(currP.left);
        qQueue.push(currQ.left);
      }

      if (!check(currP.right, currQ.right)) {
        return false;
      }

      if (currP.right !== null) {
        pQueue.push(currP.right);
        qQueue.push(currQ.right);
      }
    }
  }

  return true;
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