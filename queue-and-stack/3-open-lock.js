

// You have a lock in front of you with 4 circular wheels. Each wheel has 10 slots: '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'. The wheels can rotate freely and wrap around: for example we can turn '9' to be '0', or '0' to be '9'. Each move consists of turning one wheel one slot.

// The lock initially starts at '0000', a string representing the state of the 4 wheels.

// You are given a list of deadends dead ends, meaning if the lock displays any of these codes, the wheels of the lock will stop turning and you will be unable to open it.

// Given a target representing the value of the wheels that will unlock the lock, return the minimum total number of turns required to open the lock, or -1 if it is impossible

/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    const dead = new Set(deadends);
    const visited = new Set(['0000']);
    const queue = [['0000', 0]]; // [current_combination, turns]

    // If starting point is a deadend, we can't move
    if (dead.has('0000')) return -1;

    while (queue.length > 0) {
        const [current, turns] = queue.shift();

        if (current === target) return turns;

        // Generate all 8 possible next states (4 wheels * 2 directions)
        for (let i = 0; i < 4; i++) {
            const digit = parseInt(current[i]);
            
            // Directions: +1 (up) and -1 (down)
            for (let move of [1, -1]) {
                // (digit + move + 10) % 10 handles the wrap-around (9->0 and 0->9)
                const nextDigit = (digit + move + 10) % 10;
                const nextState = current.slice(0, i) + nextDigit + current.slice(i + 1);

                if (!dead.has(nextState) && !visited.has(nextState)) {
                    visited.add(nextState);
                    queue.push([nextState, turns + 1]);
                }
            }
        }
    }

    return -1;
};

// Explanation of the Logic
// 1. The State Space
// Think of the lock as a graph where each string is connected to 8 others. For example, 0000 is connected to:

// Up: 1000, 0100, 0010, 0001

// Down: 9000, 0900, 0090, 0009

// 2. Why BFS?
// In a graph where every edge has a weight of 1 (one turn), BFS is guaranteed to find the shortest path first. As soon as we dequeue the target string, we know the turns associated with it is the absolute minimum.