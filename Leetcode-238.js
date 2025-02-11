/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let product = 1;
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    product *= Math.abs(nums[i]);
  }
  for (let i = 0; i < nums.length; i++) {
    res.push(product / Math.abs(nums[i]));
  }
  return res;
};

console.log(productExceptSelf([-1, 1, 0, -3, 3]));
