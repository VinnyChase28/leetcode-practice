/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
  if (!prices) return 0;
  let maxProf = 0;
  let minPrice = prices[0];
  for (i in prices) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
      console.log(minPrice);
    }
    maxProf = Math.max(maxProf, prices[i] - minPrice);
  }
  if (maxProf > 0) {
    return maxProf;
  } else {
    return 0;
  }
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
