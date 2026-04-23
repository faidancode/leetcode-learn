// Key Concepts & Explanation

// 1. Circular LogicIn a standard array-based queue, once tail reaches the last index, you're stuck. In a circular queue, we use:

// $$index = (current + 1) \pmod{capacity}$$

// This allows the pointer to jump from index k-1 back to index 0, effectively reusing the "empty" slots created by previous deQueue operations.

// 2. State Management
// - Empty State: We represent this by setting both head and tail to -1.
// - Full State: The queue is full when the element immediately after the tail is the head.
// - Single Element: When head === tail (and they aren't -1), there is exactly one element. Removing it requires resetting both pointers to -1.


/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.size = k;
  this.queue = new Array(k);
  this.head = -1;
  this.tail = -1;
};

/** * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) return false;
  if (this.isEmpty()) this.head = 0;
  this.tail = (this.tail + 1) % this.size;
  this.queue[this.tail] = value;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty()) return false;
  if (this.head === this.tail) {
    this.head = -1;
    this.tail = -1;
  } else {
    this.head = (this.head + 1) % this.size;
  }
  return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  return this.isEmpty() ? -1 : this.queue[this.head];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  return this.isEmpty() ? -1 : this.queue[this.tail];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.head === -1;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return (this.tail + 1) % this.size === this.head;
};
