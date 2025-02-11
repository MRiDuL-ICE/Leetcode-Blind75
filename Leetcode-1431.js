/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let res = [];
  let max = Math.max(...candies);
  for (let i = 0; i < candies.length; i++) {
    candies[i] += extraCandies;
    if (max > candies[i]) {
      res.push(false);
    } else {
      res.push(true);
    }
  }
  return res;
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
