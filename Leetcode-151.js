/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let x = s.split(" ");
  let rev = x.reverse();
  let res = rev.toString().replace(/,/gi, " ");
  console.log(res.trim().replace(/\s\s+/gi, " "));
};

reverseWords("a good   example");
