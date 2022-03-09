var searchInsert = function (nums, target) {
  //first, lets find the index of the target integer
  let index = nums.indexOf(target);
  if (index !== -1) {
    return index;
  } else if (target > nums[nums.length - 1]) {
    console.log(nums.length);
    return nums.length;
  } else if (target < nums[0]) {
    return 0;
  } else {
    let i = 0;
    while (target > nums[i]) {
      i++;
    }
    console.log(i);
    return i + 1;
  }
};

searchInsert([1, 3, 5, 6], 2);
