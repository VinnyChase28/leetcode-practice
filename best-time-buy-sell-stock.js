/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  console.log(prices);
  //find smallest number
  smallestPrice = Math.min(...prices);
  //seperate into smaller chunck
  newarray = prices.splice(smallestPrice);
  //get biggest number
  largestNumber = Math.max(...newarray);
  //get profit
  profit = largestNumber - smallestPrice;
  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
