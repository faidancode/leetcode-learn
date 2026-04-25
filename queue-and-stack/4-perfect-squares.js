// Given an integer n, return the least number of perfect square numbers that sum to n.

// A perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.

/**
 * @param {number} n
 * @return {number}
 */
const numSquares = function (n) {
  // Base case: if n is 0, we need 0 perfect squares
  if (n <= 0) return 0;

  // 1. Pre-calculate all perfect squares up to n
  // This optimization prevents us from calculating i * i repeatedly inside the loop
  const perfectSquares = [];
  for (let i = 1; i * i <= n; i++) {
    perfectSquares.push(i * i);
  }

  // 2. Initialize BFS tools
  // We start at 'n' and try to reach '0'
  let queue = [n];
  let visited = new Set(); // Prevents redundant work on the same remainder
  let level = 0; // Each "level" represents one perfect square used

  while (queue.length > 0) {
    // Increment level because we are about to add one more square to our sum
    level++;

    // Create a temporary array to store nodes for the next level
    let nextLevelNodes = [];

    // Process every remainder currently at this depth
    for (let remainder of queue) {
      // Try subtracting every available perfect square
      for (let square of perfectSquares) {
        let nextValue = remainder - square;

        // SUCCESS: We reached exactly 0, return the current step count
        if (nextValue === 0) {
          return level;
        }

        // VALID MOVE: If the result is positive and we haven't seen it,
        // add it to the next level's queue.
        else if (nextValue > 0 && !visited.has(nextValue)) {
          visited.add(nextValue);
          nextLevelNodes.push(nextValue);
        }

        // OPTIMIZATION: If nextValue is negative, no need to check
        // larger squares because they will also result in negative values.
        else if (nextValue < 0) {
          break;
        }
      }
    }

    // Move to the next level (depth + 1)
    queue = nextLevelNodes;
  }

  return level;
};

/**
 * @param {number} n
 * @return {number}
 */
const numSquares = function (n) {
  if (n <= 0) return 0;

  // Generate all perfect squares less than or equal to n
  const perfectSquares = [];
  for (let i = 1; i * i <= n; i++) {
    perfectSquares.push(i * i);
  }

  let queue = [n];
  let visited = new Set();
  let level = 0;

  while (queue.length > 0) {
    level++;
    let nextQueue = [];

    for (let remainder of queue) {
      for (let square of perfectSquares) {
        let nextValue = remainder - square;

        if (nextValue === 0) {
          return level;
        } else if (nextValue > 0 && !visited.has(nextValue)) {
          visited.add(nextValue);
          nextQueue.push(nextValue);
        } else if (nextValue < 0) {
          // Since perfectSquares is sorted, we can stop early
          break;
        }
      }
    }
    queue = nextQueue;
  }

  return level;
};

// Explanation
// 1. Why BFS?Unlike Depth-First Search (DFS), which might find a very long sequence of $1+1+1...$ first, BFS explores all possible 1-square sums, then all 2-square sums, etc. The first time we hit $0$, we are guaranteed the shortest path.
// 2. The Level-by-Level approach:In this version, I process the queue "level by level" using a nextQueue. This makes the level variable directly represent the number of perfect squares used.
// 3. Performance:By checking !visited.has(nextValue), we drastically prune the search tree. For $n=12$, without a visited set, you might calculate the path for $7$ multiple times (e.g., $12-4-1$ and $12-1-4$).
