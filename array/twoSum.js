/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numsSize = nums.length;
  for (let i = 0; i < numsSize; i++) {
    for (let j = 0; j < numsSize; j++) {
      if (i !== j && nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
