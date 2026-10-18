---
title: "Week 4: Data Structures and File Handling"
sidebar_label: "Week 4: Data Structures and File Handling"
---

# Week 4: Data Structures and File Handling

## Python Data Structures

Work with lists, tuples, dictionaries and sets to organize and manage data.

:::info Roman Urdu
Lists, tuples, dictionaries aur sets ke zariye data ko organize aur manage karna seekhein.
:::

```python
fruits = ["apple", "mango"]         # list
point = (3, 4)                      # tuple
student = {"name": "Ali", "age": 21}  # dict
unique = {1, 2, 2, 3}               # set -> {1, 2, 3}
fruits.append("banana")
```

## File Handling

Read from and write to files so your data survives after the program ends.

:::info Roman Urdu
Files se data parhna aur likhna seekhein taake program band hone ke baad bhi data mehfooz rahe.
:::

```python
with open("notes.txt", "w") as f:
    f.write("Hello file")

with open("notes.txt") as f:
    print(f.read())
```

:::tip Have a doubt?
Click the round chat icon in the corner of the screen and ask the AI tutor. You can ask in English or Roman Urdu, for example: "Is topic ko example ke sath samjhao".
:::
