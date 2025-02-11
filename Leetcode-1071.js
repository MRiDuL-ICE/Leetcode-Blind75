/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 === str2 + str1) {
    let x = str1.length;
    let y = str2.length;
    const gcd = (m, n) => {
      if (n === 0) return m;
      else return gcd(n, m % n);
    };
    let div = gcd(x, y);
    return str1.slice(0, div);
  }
};

console.log(gcdOfStrings("ABCABC", "ABC"));
