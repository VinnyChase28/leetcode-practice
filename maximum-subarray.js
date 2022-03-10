// the algorith we need here is Kadane's algorithm.

// Kadane’s Algorithm is an iterative dynamic programming algorithm. It calculates the maximum sum subarray ending at a particular position by using the maximum sum subarray ending at the previous position.

var maxSubArray = function (nums) {
  //declare the maximum integer possible
  var maxint = Math.pow(2, 53);
  var max_so_far = -maxint - 1;
  console.log(max_so_far);
  var max_ending_here = 0;

  for (var i = 0; i < nums.length; i++) {
    max_ending_here = max_ending_here + nums[i];
    console.log(max_so_far);
    if (max_so_far < max_ending_here) max_so_far = max_ending_here;
    console.log(max_so_far);
    if (max_ending_here < 0) max_ending_here = 0;
  }
  // console.log(max_so_far);
  return max_so_far;
};

maxSubArray([-2, -3, 4, -1, -2, 1, 5, -3]);
