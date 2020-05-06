/**
 * @param {number} num
 * @return {string}
 */
const romanSymbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
const romanValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

const intToRoman = (num) => {
  let roman = '';

  let i = 0;

  while (num > 0) {
    while (num >= romanValues[i]) {
      num -= romanValues[i];
      roman += romanSymbols[i];
    }

    i++;
  }

  return roman;
};

const example1 = intToRoman(3);
console.log(example1 === 'III', example1);

const example2 = intToRoman(4);
console.log(example2 === 'IV', example2);

const example3 = intToRoman(9);
console.log(example3 === 'IX', example3);

const example4 = intToRoman(58);
console.log(example4 === 'LVIII', example4);

const example5 = intToRoman(1994);
console.log(example5 === 'MCMXCIV', example5);

const example6 = intToRoman(10);
console.log(example6 === 'X', example6);

const example7 = intToRoman(20);
console.log(example7 === 'XX', example7);

const example8 = intToRoman(30);
console.log(example8 === 'XXX', example8);

const example9 = intToRoman(60);
console.log(example9 === 'LX', example9);

const example10 = intToRoman(70);
console.log(example10 === 'LXX', example10);
