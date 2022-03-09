var searchInsert = function (nums, target) {
  let start = 0,
    end = nums.length - 1;

  //create a new array that would include the number that was not found in the numbs array
  let newArray = nums.concat(target);
  //sort the new array 
  newArray.sort((a, b) => a - b);
  // Iterate while start not meets end
  while (start <= end) {
    // Find the mid index
    let mid = Math.floor((start + end) / 2);

    // If element is present at mid, return True
    if (nums[mid] === target) {
      console.log(mid);
      return mid;
    }
    // Else look in left or right half accordingly
    else if (nums[mid] < target) {
      start = mid + 1;
    } else if (nums[mid] > target) {
      end = mid - 1;
    }
  }

  //if target is not found in nums, return the index of where the target would be if we included target in the new array 
  console.log(newArray.indexOf(target));
  return newArray.indexOf(target);
};

searchInsert([1, 3, 5, 6, 7], 8);
