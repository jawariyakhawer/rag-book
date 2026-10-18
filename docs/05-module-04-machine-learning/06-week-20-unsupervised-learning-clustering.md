---
title: "Week 20: Unsupervised Learning: Clustering"
sidebar_label: "Week 20: Unsupervised Learning: Clustering"
---

# Week 20: Unsupervised Learning: Clustering

## K-Means Clustering

Partition data into clusters based on similarity.

:::info Roman Urdu
Mushabihat ki bunyad par data ko clusters mein baantna.
:::

```python
from sklearn.cluster import KMeans
labels = KMeans(n_clusters=3, n_init=10).fit_predict(X)
```

## Hierarchical Clustering

Build a hierarchy of clusters with agglomerative or divisive methods.

:::info Roman Urdu
Agglomerative ya divisive tareeqon se clusters ka silsila (hierarchy) banana.
:::

:::tip Have a doubt?
Click the round chat icon in the corner of the screen and ask the AI tutor. You can ask in English or Roman Urdu, for example: "Is topic ko example ke sath samjhao".
:::
