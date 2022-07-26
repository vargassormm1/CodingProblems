// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Practical Solution
const twoSumPractical = (nums, goal) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === goal) {
        return [i, j];
      }
    }
  }
  return null;
};
console.log(twoSumPractical([1, 3, 10, 11, 14], 25));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Optimal Solution
const twoSumOptimal = (nums, target) => {
  const numsMap = {};

  for (let i = 0; i < nums.length; i++) {
    const currentMapVal = numsMap[nums[i]];

    if (currentMapVal >= 0) {
      return [currentMapVal, i];
    } else {
      const numTarget = target - nums[i];
      numsMap[numTarget] = i;
    }
  }
  return null;
};
console.log(twoSumOptimal([1, 3, 10, 11, 14], 25));
