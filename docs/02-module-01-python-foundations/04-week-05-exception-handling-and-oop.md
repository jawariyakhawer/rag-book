---
title: "Week 5: Exception Handling and OOP"
sidebar_label: "Week 5: Exception Handling and OOP"
---

# Week 5: Exception Handling and OOP

## Exception Handling

Handle errors gracefully with try, except and finally instead of letting the program crash.

:::info Roman Urdu
try, except aur finally se errors ko saleeqay se handle karein taake program crash na ho.
:::

```python
try:
    x = int(input("Number: "))
    print(10 / x)
except ZeroDivisionError:
    print("Cannot divide by zero")
except ValueError:
    print("Please enter a number")
finally:
    print("Done")
```

## Object-Oriented Programming

Classes, objects, inheritance and encapsulation: model real-world things as code.

:::info Roman Urdu
Classes, objects, inheritance aur encapsulation: real duniya ki cheezon ko code mein model karna.
:::

```python
class Student:
    def __init__(self, name, marks):
        self.name = name
        self.marks = marks

    def grade(self):
        return "Pass" if self.marks >= 50 else "Fail"

print(Student("Ali", 72).grade())
```

:::tip Have a doubt?
Click the round chat icon in the corner of the screen and ask the AI tutor. You can ask in English or Roman Urdu, for example: "Is topic ko example ke sath samjhao".
:::
