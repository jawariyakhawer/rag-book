---
title: "Week 7: NumPy and Pandas Basics"
sidebar_label: "Week 7: NumPy and Pandas Basics"
---

# Week 7: NumPy and Pandas Basics

## NumPy Core Operations

Numerical computing with arrays, vectorized operations and mathematical functions for efficient data handling.

:::info Roman Urdu
Arrays, vectorized operations aur mathematical functions ke sath tez aur asaan numerical computing.
:::

```python
import numpy as np
a = np.array([1, 2, 3, 4])
print(a * 2, a.mean(), a.sum())
print(np.arange(0, 10, 2))
```

## Pandas DataFrames

An introduction to tabular data: create, index and manipulate DataFrames.

:::info Roman Urdu
Tabular data ka taaruf: DataFrame banana, index karna aur us mein tabdeeli karna.
:::

```python
import pandas as pd
df = pd.DataFrame({"name": ["Ali", "Sara"], "marks": [72, 88]})
print(df[df.marks > 80])
```

:::tip Have a doubt?
Click the round chat icon in the corner of the screen and ask the AI tutor. You can ask in English or Roman Urdu, for example: "Is topic ko example ke sath samjhao".
:::
