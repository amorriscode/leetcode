/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const whichDirection = (currRow, maxRow, direction) => {
  if (currRow === 0 && direction === 'backward') {
    return 'forward';
  }

  if (currRow === maxRow) {
    return 'backward';
  }

  return direction;
}

const convert = (s, numRows) => {
  if (numRows === 1) {
    return s;
  }

  const grid = [];
  for (let i = 0; i < numRows; i++) {
    grid.push([]);
  }

  let currRow = 0;
  let direction = 'forward';
  for (let i = 0; i < s.length; i++) {
    grid[currRow].push(s[i]);
    direction = whichDirection(currRow, numRows - 1, direction);
    currRow = direction === 'forward' ? currRow + 1 : currRow - 1;
  }

  return grid.flat().join('');
};

const example1 = convert('PAYPALISHIRING', 3);
console.log(example1 === 'PAHNAPLSIIGYIR');

const example2 = convert('PAYPALISHIRING', 4);
console.log(example2 === 'PINALSIGYAHRPI');