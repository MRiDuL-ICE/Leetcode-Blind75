/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let newMap = [];
  let freq = arr.map((item, idx) => {
    newMap.push(idx);
  });
  console.log(newMap);
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));
// console.log(uniqueOccurrences([1, 2]));
// console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]));
// console.log(uniqueOccurrences([3, 5, -2, -3, -6, -6]));
