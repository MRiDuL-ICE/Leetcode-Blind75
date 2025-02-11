/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  // sloving using regex method
  // first we'll see that the vowels are in the given string
  let vowels = s.match(/[aeiou]/gi);
  // here pop method replace the vowels order of the given string
  return s.replace(/[aeiou]/gi, () => vowels.pop());
};

console.log(reverseVowels("IceCreAm"));
