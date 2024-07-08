function maxChickensProtected(n, k, positions) {
  let left = 0;
  let maxChickens = 0;

  for (let right = 0; right < n; right++) {
    // Move the left pointer to maintain the window size within k
    while (positions[right] - positions[left] >= k) {
      left++;
    }
    // Calculate the number of chickens in the current window
    const currentChickens = right - left + 1;
    // Update the maximum chickens count
    if (currentChickens > maxChickens) {
      maxChickens = currentChickens;
    }
  }

  return maxChickens;
}

// Example usage
const n = 6;
const k = 10;
const positions = [1, 11, 30, 34, 35, 37];
console.log(maxChickensProtected(n, k, positions)); // Output: 4
