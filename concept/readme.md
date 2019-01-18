# Javascript scope and hoisting.

A scope in JavaScript defines what variables you have access to. Type of scope:
1. global scope
2. local scope
    * function scope - variable declared inside function
    * block scope - variable inside `{}` with `const` and `let` keyword

Functions, when declared with a function declaration, are always hoisted to the top of the current scope.
When declared with a function expression, functions are not hoisted to the top of the current scope.
Varaible declared with `var` keyword are hoisted to the top of scope current scope.
When a function is defined in another function, the inner function has access to the outer function's variables. 
This behavior is called **lexical scoping**.

# Closures
A function within another function is called closures. It is used to access outer functions variable at a later time 
and used to *control side effect* and create *private variable*.

# Bottom-up algorithm
Going bottom-up is a way to avoid recursion, saving the *memory cost* that recursion incurs when it builds up the *call stack*.

# Dynamic Programming
dynamic programming problems, which are problems where the solution is composed of solutions to the same problem with 
smaller inputs. The other common strategy for dynamic programming problems is **memoization**.

# Big O Notation
With big O notation we express the runtime in terms of 
1. how quickly it grows 
2. relative to the input
3. as the input gets arbitrarily large.

**big O analysis** is sometimes called **asymptotic analysis**.
1. O(1) - Constant time
2. O(n) - Linear time
2. O(n^2) - Quadratic time

- N could be the actual input, or the size of the input.
- Drop the constants i.e `O(2n) = O(n); O(1 + n/2 + 1000) = O(n)`
- Drop the less significant terms i.e `O(n + n^2) = O(n^2); O(n^2/2 + 100n) = O(n^2)`

We usually talk about the **worst case**

In **space Complexity** we look at the total size (relative to the size of the input) of any new variables we're allocating.
Usually when we talk about space complexity, we're talking about additional space, so we don't include space taken up by 
the inputs.

# Logarithms
# Triangular Series
# Binary Search
# Breadth-First Search
# Depth-First Search
# Brute Force Algorithms
# Greedy Algorithms
# Bottom-Up Algorithms
# Overlapping Subproblems
# Memoization
# Short Circuit Evaluation
# Garbage Collection
# Closure
# Array Slicing
# Hashing
# Mutable vs Immutable
# In-Place Operation
# Data Structures Overview
# Array
# Dynamic Array
# Hash Table
# Linked List
# Queue
# Stack
# Binary Tree
# Graph
# Binary Numbers
## Bitwise AND
## Bitwise OR
## Bitwise XOR
## Bitwise NOT
## Bit Shifting
## Integer Overflow




