/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let res = false;
  for (let j = 0; j < s.length; ++j) {
    res = t.includes(s[j]);
  }
  return res;
};

// console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));
