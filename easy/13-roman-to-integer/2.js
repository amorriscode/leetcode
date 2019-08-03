/**
 * @param {string} s
 * @return {number}
 */

const romanToIntMap = {
  "I": 1,
  "IV": 4,
  "V": 5,
  "IX": 9,
  "X": 10,
  "XL": 40,
  "L": 50,
  "XC": 90,
  "C": 100,
  "CD": 400,
  "D": 500,
  "CM": 900,
  "M": 1000,
}

const romanToInt = (s) => {
  let number = 0;
  const romanChars = s.split('');
  romanChars
    .forEach((romanChar, index) => {
      const hasNext = romanToIntMap[romanChar + romanChars[index + 1]];
      const hasPrevious = romanToIntMap[romanChars[index - 1] + romanChar];
      let value = hasNext ? hasNext : romanToIntMap[romanChar];

      if (!hasPrevious) {
        number += value;
      }
    });

  return number;
};