---
title: "Week 3: Loops, Functions, Lambda and Modules"
sidebar_label: "Week 3: Loops, Functions, Lambda and Modules"
---

# Week 3: Loops, Functions, Lambda and Modules

## Loops and Iterations

Repeat tasks with for and while loops, and control them with break and continue.

:::info Roman Urdu
for aur while loops se kaam dohraein, aur break/continue se loop ko control karein.
:::

```python
for i in range(1, 6):
    if i == 3:
        continue
    print(i)

n = 3
while n > 0:
    print(n)
    n -= 1
```

## Functions, Lambda, Modules

Create reusable blocks of code with functions, write small anonymous functions with lambda, and import Python modules.

:::info Roman Urdu
Functions se dobara istemal hone wala code banayein, lambda se chhote anonymous functions likhein aur Python modules import karein.
:::

```python
import math

def area(r):
    return math.pi * r ** 2

square = lambda x: x * x
print(area(3), square(4))
```

:::tip Have a doubt?
Click the round chat icon in the corner of the screen and ask the AI tutor. You can ask in English or Roman Urdu, for example: "Is topic ko example ke sath samjhao".
:::
