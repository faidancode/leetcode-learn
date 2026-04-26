// The Logic
// 1. Initialize a Stack: We'll use an array as a stack to keep track of opening brackets.

// 2. Map the Pairs: Create a lookup table (object) that maps each closing bracket to its corresponding opening bracket.

// 3. Iterate:

// If you see an opening bracket ((, {, [), push it onto the stack.

// If you see a closing bracket (), }, ]), check the top of the stack.

// If the stack is empty or the top of the stack doesn't match the required opening bracket, the string is invalid.

// Otherwise, pop the top of the stack and continue.

// 4. Final Check: After the loop, if the stack is empty, it means all brackets were perfectly matched.

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  // 1. A stack to keep track of opening brackets
  const stack = [];

  // 2. Map closing brackets to their matching opening partners
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of s) {
    // If the character is a closing bracket
    if (map[char]) {
      // Pop the top element from stack (or use a dummy value if empty)
      const topElement = stack.length === 0 ? "#" : stack.pop();

      // If the popped element doesn't match the partner, it's invalid
      if (topElement !== map[char]) {
        return false;
      }
    } else {
      // If it's an opening bracket, push it onto the stack
      stack.push(char);
    }
  }

  // If the stack is empty, all brackets were matched correctly
  return stack.length === 0;
};
