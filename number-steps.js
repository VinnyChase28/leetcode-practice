// use the fibonacci sequence to find all the total number of distinct possibilities. 

// you must use memoization which is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls.

// in the code below, i am storing the result of each function call in the variable "memo" until the target n is reached, instead of having to restart the whole sequence every time.

//with memoization, time complexity for an input of 50 goes from O(2^N) (Function calls: 20.365.011.074) to O(2N) (Function calls: 99)

var climbStairs = function (n, memo) {
  memo = memo || {};

  if (memo[n]) return memo[n];
  if (n <= 1) return 1;
  console.log((memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo)));
  return (memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo));
};

climbStairs(50);