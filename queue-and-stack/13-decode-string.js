// Given an encoded string, return its decoded string.

// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let countStack = [];
  let stringStack = [];
  let currentString = "";
  let k = 0;

  for (let char of s) {
    if (!isNaN(char)) {
      // Handle cases where k > 9 (e.g., "100[a]")
      k = k * 10 + parseInt(char);
    } else if (char === "[") {
      // Push the current multiplier and the string built so far onto stacks
      countStack.push(k);
      stringStack.push(currentString);

      // Reset for the new context inside the brackets
      currentString = "";
      k = 0;
    } else if (char === "]") {
      // Pop the multiplier and the previous string context
      let repeatCount = countStack.pop();
      let previousString = stringStack.pop();

      // Repeat the current accumulated string and append to the previous context
      currentString = previousString + currentString.repeat(repeatCount);
    } else {
      // It's a regular character, just append to current string
      currentString += char;
    }
  }

  return currentString;
};

// This problem is a perfect use case for a Stack, as we need to handle nested structures (like in Example 2: 3[a2[c]]). When we encounter a closing bracket ], we need to "pop" back to the most recent opening bracket and repeat the string.The StrategyWe will iterate through the string and use two stacks:countStack: To keep track of the multiplier $k$.stringStack: To keep track of the characters we have accumulated before entering a new bracket.Implementation in JavaScriptJavaScript
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let countStack = [];
    let stringStack = [];
    let currentString = '';
    let k = 0;

    for (let char of s) {
        if (!isNaN(char)) {
            // Handle cases where k > 9 (e.g., "100[a]")
            k = k * 10 + parseInt(char);
        } else if (char === '[') {
            // Push the current multiplier and the string built so far onto stacks
            countStack.push(k);
            stringStack.push(currentString);
            
            // Reset for the new context inside the brackets
            currentString = '';
            k = 0;
        } else if (char === ']') {
            // Pop the multiplier and the previous string context
            let repeatCount = countStack.pop();
            let previousString = stringStack.pop();
            
            // Repeat the current accumulated string and append to the previous context
            currentString = previousString + currentString.repeat(repeatCount);
        } else {
            // It's a regular character, just append to current string
            currentString += char;
        }
    }

    return currentString;
};
// Explanation of the Logic
// Using Example 2: 3[a2[c]] as a walkthrough:
// 3[: countStack gets [3], stringStack gets ['']. currentString resets to empty.
// a: currentString becomes "a".
// 2[: countStack gets [3, 2], stringStack gets ['', 'a']. currentString resets to empty.
// c: currentString becomes "c".
// First ]:
// --- Pop repeatCount ($2$) and previousString ($"a"$).
// --- currentString becomes "a" + "c".repeat(2) $\rightarrow$ "acc".
// Second ]:
// --- Pop repeatCount ($3$) and previousString ($""$).
// --- currentString becomes "" + "acc".repeat(3) $\rightarrow$ "accaccacc".
