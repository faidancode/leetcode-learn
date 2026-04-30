// Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

// Implement the MyStack class:

// void push(int x) Pushes element x to the top of the stack.
// int pop() Removes the element on the top of the stack and returns it.
// int top() Returns the element on the top of the stack.
// boolean empty() Returns true if the stack is empty, false otherwise.

/**
 * Initialize your data structure here.
 */
var MyStack = function () {
  this.q1 = []; // Primary queue to store the stack
  this.q2 = []; // Temporary queue for re-ordering
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  // 1. Add new element to q2
  this.q2.push(x);

  // 2. Move all existing elements from q1 to q2
  // This puts the new element 'x' at the front of q2
  while (this.q1.length > 0) {
    this.q2.push(this.q1.shift());
  }

  // 3. Swap the names of q1 and q2
  // Now q1 contains all elements in LIFO order
  let temp = this.q1;
  this.q1 = this.q2;
  this.q2 = temp;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  // Since push() already organized q1 in LIFO order,
  // the first element in q1 is our stack's top.
  return this.q1.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  // Return the front of the queue
  return this.q1[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  // If q1 has no elements, the stack is empty
  return this.q1.length === 0;
};
