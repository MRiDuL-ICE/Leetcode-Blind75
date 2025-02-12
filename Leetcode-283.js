/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let res = [];
  let zeros = [];
  for (let num of nums) {
    if (num === 0) {
      zeros = [...zeros, num];
    }
    res = [...res, num];
    res = res.filter((n) => n > 0);
  }
  return [...res, ...zeros];
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
// console.log(moveZeroes([0, 1, 0, 3, 12]));
