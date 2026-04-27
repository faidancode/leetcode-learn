// You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

// Evaluate the expression. Return an integer that represents the value of the expression.

// The Logic
// 1. Iterate through the tokens.
// 2. If the token is a number: Push it onto the stack.
// 3. If the token is an operator: * Pop the top two numbers from the stack.
// --  The first number popped is the second operand ($b$), and the second number popped is the first operand ($a$).
// -- Perform the operation ($a \text{ op } b$).
// -- Push the result back onto the stack.
// 4. Final Result: After all tokens are processed, the only number remaining in the stack is the answer.

/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = function (tokens) {
  const stack = [];

  // Map operators to their calculation logic
  const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => Math.trunc(a / b), // Truncate toward zero
  };

  for (let token of tokens) {
    if (operations[token]) {
      // When an operator is found, pop the two most recent numbers
      const b = stack.pop(); // Second operand
      const a = stack.pop(); // First operand

      // Apply the operation and push the result back
      const result = operations[token](a, b);
      stack.push(result);
    } else {
      // If it's a number, convert to integer and push
      stack.push(Number(token));
    }
  }

  return stack.pop();
};
