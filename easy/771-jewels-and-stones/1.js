/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  const jewels = new Map(J.split('').map(jewel => [jewel, 0]));
  
  S.split('').forEach(stone => {
    if (jewels.has(stone)) {
      jewels.set(stone, jewels.get(stone) + 1);
    }
  });
  
  let total = 0;
  
  jewels.forEach(value => {
    total += value;
  })
  
  return total;
};
