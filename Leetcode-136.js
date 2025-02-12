/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  return [...new Set(nums)].filter(
    (num) => nums.indexOf(num) === nums.lastIndexOf(num)
  );
};

console.log(singleNumber([4, 1, 2, 1, 2, 5, 8]));
console.log(singleNumber([1, 2]));
