---
title: "Week 27: Deployment Concepts and FastAPI"
sidebar_label: "Week 27: Deployment Concepts and FastAPI"
---

# Week 27: Deployment Concepts and FastAPI

## ML Deployment Concepts

How machine learning models are deployed into production environments.

:::info Roman Urdu
ML models ko production mein kaise deploy kiya jata hai.
:::

## FastAPI for ML Deployment

Build APIs that serve model predictions in real time.

:::info Roman Urdu
Aisi APIs banana jo real time mein model ki predictions dein.
:::

```python
from fastapi import FastAPI
app = FastAPI()

@app.post("/predict")
def predict(x: float):
    return {"prediction": model.predict([[x]])[0]}
```

:::tip Have a doubt?
Click the round chat icon in the corner of the screen and ask the AI tutor. You can ask in English or Roman Urdu, for example: "Is topic ko example ke sath samjhao".
:::
