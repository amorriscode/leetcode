/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  const jewels = new Set(J);
    
  return S.split('').reduce((total, stone) => total + jewels.has(stone), 0);
};