/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let s = [];
  for (let char of chars) {
    if (char === char) {
      s = [...s, char, char.length * char.length];
    }
  }
  return s;
};

console.log(compress(["a", "a", "b", "b", "c", "c", "c"]));
