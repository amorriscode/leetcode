/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const combineLinkedList = (node) => {
  return node.next
    ? `${node.val}${combineLinkedList(node.next)}`
    : node.val;
}

const linkedListToNumberArray = (list) => {
  const combinedLinkedList = combineLinkedList(list);
  return combinedLinkedList.length > 1
    ? combinedLinkedList.split('')
    : [combinedLinkedList];
}

const numberArrayToLinkedList = (numberArray) => {
  // Turn every number into a ListNode
  // then reduce to a single list
  return numberArray
    .map(number => new ListNode(number))
    .reduce((prevNode, currNode) => {
      if (!prevNode) {
        return currNode;
      }

      let traverseNode = prevNode;

      while (traverseNode.next) {
        traverseNode = traverseNode.next;
      }

      traverseNode.next = currNode;

      return prevNode;
    });
}

const addNumberArraysByIndex = (numberOne, numberTwo) => {
  let smaller = numberOne;
  let larger = numberTwo;

  if (+numberOne.join('').length > +numberTwo.join('').length) {
    smaller = numberTwo;
    larger = numberOne;
  }

  const addedArray = larger.map((number, index) => {
    return smaller[index]
      ? +number + +smaller[index]
      : number;
  });

  addedArray.forEach((number, index) => {
    if (number.toString().length > 1) {
      addedArray[index + 1] = addedArray[index + 1]
        ? +addedArray[index + 1] + 1
        : 1;
      addedArray[index] = number % 10;
    }
  });

  return addedArray;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  const numberOne = linkedListToNumberArray(l1);
  const numberTwo = linkedListToNumberArray(l2);

  const addedNumber = addNumberArraysByIndex(numberOne, numberTwo);

  return numberArrayToLinkedList(addedNumber);
};
