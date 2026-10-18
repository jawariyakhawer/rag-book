---
title: "Week 32: Apache Spark"
sidebar_label: "Week 32: Apache Spark"
---

# Week 32: Apache Spark

## RDDs

Resilient Distributed Datasets for fault-tolerant, parallel data processing.

:::info Roman Urdu
Resilient Distributed Datasets: ghalti bardasht karne wali parallel processing.
:::

## DataFrames and Spark SQL

Work with structured data using Spark DataFrames and query it with SQL-like operations.

:::info Roman Urdu
Spark DataFrames se structured data par kaam karna aur SQL jaisi queries chalana.
:::

```python
from pyspark.sql import SparkSession
spark = SparkSession.builder.appName("demo").getOrCreate()
df = spark.read.csv("sales.csv", header=True, inferSchema=True)
df.groupBy("city").sum("amount").show()
```

## Spark MLlib

Apply scalable machine learning algorithms with Spark's MLlib library.

:::info Roman Urdu
Spark ki MLlib library se bade data par ML algorithms chalana.
:::

:::tip Have a doubt?
Click the round chat icon in the corner of the screen and ask the AI tutor. You can ask in English or Roman Urdu, for example: "Is topic ko example ke sath samjhao".
:::
