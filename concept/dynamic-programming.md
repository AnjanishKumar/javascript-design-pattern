# Dynamic Programming
dynamic programming problems, which are problems where the solution is composed of solutions to the same problem with 
smaller inputs. The other common strategy for dynamic programming problems is **memoization**.
DP -> `careful brute force`
DP -> `subproblem + reuse`

> Any optimal policy has the property that, whatever the current state and decision, the remaining decisions
> must constitute an optimal policy with regard to the state resulting from the current decision.


**Backward Induction** starts at the right and moves back one stage at a time.
**Forward Induction** starts at the left and moves forward one stage at a time

characteristics of dynamic-programming problems:
1. Stages: The essential feature of the dynamic-programming approach is the structuring of optimization problems
into multiple stages, which are solved sequentially one stage at a time.
2. States: Associated with each stage of the optimization problem are the states of the process. The states reflect
the information required to fully assess the consequences that the current decision has upon future actions.
3. Recursive Optimization: 
