/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let firts = Infinity;
  let second = Infinity;
  for (let num of nums) {
    if (num <= firts) {
      firts = num;
    } else if (num <= second) {
      second = num;
    } else {
      return true;
    }
  }
  return false;
};

nums = [5, 4, 3, 2, 1];
console.log(increasingTriplet(nums));
