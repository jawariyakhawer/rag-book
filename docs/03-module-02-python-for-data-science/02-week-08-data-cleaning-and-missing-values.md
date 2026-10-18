---
title: "Week 8: Data Cleaning and Missing Values"
sidebar_label: "Week 8: Data Cleaning and Missing Values"
---

# Week 8: Data Cleaning and Missing Values

## Data Cleaning and Transformation

Techniques to clean, normalize and prepare data for analysis.

:::info Roman Urdu
Data ko saaf karna, normalize karna aur analysis ke liye tayyar karna.
:::

## Handling Missing Values

Identify and manage missing or null data in datasets (drop, fill, interpolate).

:::info Roman Urdu
Dataset mein missing ya null values dhoondna aur unhein handle karna (drop, fill, interpolate).
:::

```python
df.isna().sum()          # count missing values
df["age"] = df["age"].fillna(df["age"].median())
df = df.dropna(subset=["city"])
```

:::tip Have a doubt?
Click the round chat icon in the corner of the screen and ask the AI tutor. You can ask in English or Roman Urdu, for example: "Is topic ko example ke sath samjhao".
:::
