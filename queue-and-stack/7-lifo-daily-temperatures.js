// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

// The Logic
// 1. Instead of comparing each day to every following day ($O(n^2)$), we iterate through the temperatures once ($O(n)$):Iterate through the array.
// 2. While the current temperature is warmer than the temperature at the index stored at the top of our stack:
// -- We've found a warmer day for that index.
// -- Pop the index from the stack.
// -- Calculate the difference between the current index and the popped index. This is the "number of days to wait."
// 3. Push the current index onto the stack and move to the next day.
// 4. Any indices remaining in the stack at the end stay as 0 because no warmer day was found.

// Key Takeaway
// Whenever a problem asks for the "next greater element" or the "distance to the next larger value," a monotonic stack is almost always the optimal tool.

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = function (temperatures) {
  const n = temperatures.length;
  const answer = new Array(n).fill(0);
  const stack = []; // This will store indices, not the temperatures themselves

  for (let i = 0; i < n; i++) {
    const currentTemp = temperatures[i];

    // Check if current temperature is warmer than the temperature
    // at the index stored at the top of the stack
    while (
      stack.length > 0 &&
      currentTemp > temperatures[stack[stack.length - 1]]
    ) {
      const prevIndex = stack.pop();
      // The wait time is the difference between current index and previous index
      answer[prevIndex] = i - prevIndex;
    }

    // Push current index onto stack to find its warmer day later
    stack.push(i);
  }

  return answer;
};
