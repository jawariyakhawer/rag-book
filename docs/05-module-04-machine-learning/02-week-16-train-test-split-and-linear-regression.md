---
title: "Week 16: Train/Test Split and Linear Regression"
sidebar_label: "Week 16: Train/Test Split and Linear Regression"
---

# Week 16: Train/Test Split and Linear Regression

## Train/Test Split and Cross Validation

Divide data to evaluate your model fairly and avoid overfitting.

:::info Roman Urdu
Data ko taqseem kar ke model ko insaaf se parakhna aur overfitting se bachna.
:::

```python
from sklearn.model_selection import train_test_split, cross_val_score
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
```

## Linear Regression

Predict continuous outcomes using a linear relationship between variables.

:::info Roman Urdu
Variables ke linear taalluq se continuous values (jaise price) predict karna.
:::

```python
from sklearn.linear_model import LinearRegression
model = LinearRegression().fit(X_train, y_train)
print(model.score(X_test, y_test))
```

:::tip Have a doubt?
Click the round chat icon in the corner of the screen and ask the AI tutor. You can ask in English or Roman Urdu, for example: "Is topic ko example ke sath samjhao".
:::
