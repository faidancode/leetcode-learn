// The Logic
// Main Stack: Stores all the elements as a normal LIFO structure.

// Min Stack: Stores the minimum value encountered up to that point.

// When pushing a new value x, the new minimum is Math.min(x, currentMin).

// When popping, we pop from both stacks to keep them synchronized. This ensures the top of the minStack always reflects the minimum value of the elements remaining in the mainStack.

var MinStack = function () {
  this.stack = []; // To store actual values
  this.minStack = []; // To store the minimum at each level
};

/** * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);

  // If minStack is empty, the new val is the minimum.
  // Otherwise, compare val with the current minimum at the top of minStack.
  if (this.minStack.length === 0) {
    this.minStack.push(val);
  } else {
    const currentMin = this.minStack[this.minStack.length - 1];
    this.minStack.push(Math.min(val, currentMin));
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  // Keep stacks synchronized by popping from both
  this.stack.pop();
  this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  // The top of minStack always holds the minimum value of the current stack state
  return this.minStack[this.minStack.length - 1];
};
