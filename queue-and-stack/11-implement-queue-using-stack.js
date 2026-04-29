// Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

// Implement the MyQueue class:

// void push(int x) Pushes element x to the back of the queue.
// int pop() Removes the element from the front of the queue and returns it.
// int peek() Returns the element at the front of the queue.
// boolean empty() Returns true if the queue is empty, false otherwise.

// The Logic
// The trick lies in the fact that reversing a stack twice restores the original order.

// 1. inStack: Used for all push operations.
// 2. outStack: Used for pop and peek operations.
// 3. The Shift: When we need to pop or peek but the outStack is empty, we "dump" everything from the inStack into the outStack. This reverses the order of the elements, making the oldest element (the front of the queue) the new top of the outStack.

var MyQueue = function () {
  this.inStack = []; // For pushing new elements
  this.outStack = []; // For popping/peeking elements
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  // We always push to the input stack
  this.inStack.push(x);
};

/**
 * Moves elements from inStack to outStack if outStack is empty.
 * This helper ensures the oldest element is at the top of outStack.
 */
MyQueue.prototype._prepareOutStack = function () {
  if (this.outStack.length === 0) {
    while (this.inStack.length > 0) {
      this.outStack.push(this.inStack.pop());
    }
  }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  this._prepareOutStack();
  return this.outStack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  this._prepareOutStack();
  return this.outStack[this.outStack.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  // Queue is only empty if both stacks have no elements
  return this.inStack.length === 0 && this.outStack.length === 0;
};
