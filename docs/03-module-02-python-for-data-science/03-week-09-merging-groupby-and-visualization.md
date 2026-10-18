---
title: "Week 9: Merging, GroupBy and Visualization"
sidebar_label: "Week 9: Merging, GroupBy and Visualization"
---

# Week 9: Merging, GroupBy and Visualization

## Merging and GroupBy

Combine datasets and run aggregations for analysis.

:::info Roman Urdu
Datasets ko jorna aur aggregation (jaise group wise total/average) nikalna.
:::

```python
merged = orders.merge(customers, on="customer_id")
print(merged.groupby("city")["amount"].sum())
```

## Data Visualization (Matplotlib, Seaborn, Plotly)

Create charts, plots and interactive visualizations to explore and present data.

:::info Roman Urdu
Charts, plots aur interactive visualizations bana kar data ko samajhna aur pesh karna.
:::

```python
import matplotlib.pyplot as plt
plt.plot([1, 2, 3], [2, 4, 9])
plt.title("My first chart")
plt.show()
```

:::tip Have a doubt?
Click the round chat icon in the corner of the screen and ask the AI tutor. You can ask in English or Roman Urdu, for example: "Is topic ko example ke sath samjhao".
:::
