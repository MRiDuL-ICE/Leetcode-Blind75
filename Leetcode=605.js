/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let canPlant = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    let pre = flowerbed[i - 1];
    let curr = flowerbed[i];
    let post = flowerbed[i + 1];
    if (!pre && !curr && !post) {
      canPlant++;
      flowerbed[i] = 1;
    }
  }
  return canPlant >= n;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));
