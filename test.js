function productExceptSelf(nums) {
  let n = nums.length;
  let answer = new Array(n).fill(1);

  // Compute prefix product
  let prefix = 1;
  for (let i = 0; i < n; i++) {
    answer[i] = prefix;
    prefix *= nums[i];
  }

  // Compute suffix product and multiply with prefix product
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= suffix;
    suffix *= nums[i];
  }

  return answer;
}

// Example usage
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // Output: [24, 12, 8, 6]
