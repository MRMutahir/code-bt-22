# JavaScript Assignment — 30 Questions

## Q1 — Positive / Negative

User se ek number lo aur check karo:

- agar number 0 se bara hai to `"Positive"`
- agar 0 se chota hai to `"Negative"`
- warna `"Zero"`

**Hint:** if / else if / else use karo.

## Q2 — Even / Odd

Ek number variable mein store karo aur check karo ke number even hai ya odd.

**Hint:** `%` operator use karo.

## Q3 — Age Check

Ek age variable banao.

- Agar age 18 ya us se zyada ho to: `"You can vote"`
- warna: `"You cannot vote"`

**Hint:** if / else.

## Q4 — Greater Number

Do variables mein do numbers store karo.

Check karo kaunsa number bara hai.

**Example:**

```js
num1 = 20
num2 = 15
```

**Output:**

```
20 is greater
```

**Hint:** if / else.

## Q5 — Three Numbers

Teen numbers variables mein store karo.

Check karo:

- konsa sab se bara hai
- agar koi numbers equal hon to us case ko bhi handle karo.

**Hint:** if / else if / else.

## Q6 — Array mein Item Add Karna

Ek array banao:

```js
let fruits = ["Apple", "Banana", "Mango"];
```

Array ke end mein `"Orange"` add karo.

**Hint:** `push()`.

## Q7 — Last Item Remove

Given array:

```js
let fruits = ["Apple", "Banana", "Mango", "Orange"];
```

Array ka last item remove karo.

**Hint:** `pop()`.

## Q8 — First Item Remove

Given array:

```js
let students = ["Ali", "Ahmed", "Hamza", "Usman"];
```

First student remove karo.

**Hint:** `shift()`.

## Q9 — Beginning mein Item Add

Given array:

```js
let students = ["Ahmed", "Hamza", "Usman"];
```

Beginning mein `"Ali"` add karo.

**Hint:** `unshift()`.

## Q10 — Array Check

Given:

```js
let numbers = [10, 20, 30, 40, 50];
```

Check karo agar array mein 30 hai to:

```
30 is available
```

warna:

```
30 is not available
```

**Hint:** `includes()` method dekh sakte ho.

## Q11 — For Loop se Numbers Print

`for` loop use karke 1 se 10 tak numbers print karo.

**Expected:**

```
1
2
3
...
10
```

**Hint:** loop ke andar number print karo.

## Q12 — Even Numbers

`for` loop use karke 1 se 20 tak sirf even numbers print karo.

**Expected:**

```
2
4
6
...
20
```

**Hint:** `%` operator + if.

## Q13 — Odd Numbers

`for` loop use karke 1 se 20 tak sirf odd numbers print karo.

**Hint:** `%` operator.

## Q14 — Array ke Sare Items

Given:

```js
let fruits = ["Apple", "Banana", "Mango", "Orange"];
```

`for` loop use karke array ke sare fruits print karo.

**Expected:**

```
Apple
Banana
Mango
Orange
```

**Hint:** array ke item ko access karne ke liye:

```js
array[index]
```

## Q15 — Array mein Numbers ka Sum

Given:

```js
let numbers = [10, 20, 30, 40];
```

`for` loop use karke sab numbers ka total calculate karo.

**Expected:**

```
100
```

**Hint:** ek `sum` variable banao aur loop ke andar usmein values add karo.

## Q16 — Array mein Even Numbers Count

Given:

```js
let numbers = [10, 15, 22, 31, 40, 55];
```

Find karo array mein kitne even numbers hain.

**Expected:**

```
3
```

**Hint:** ek `count` variable banao. if ke andar count increase karo.

## Q17 — Array mein Positive Numbers

Given:

```js
let numbers = [-5, 10, -2, 20, 0, 15];
```

Loop use karke sirf positive numbers print karo.

**Expected:**

```
10
20
15
```

**Hint:** `if (number > 0)`.

## Q18 — Array se Names Search

Given:

```js
let names = ["Ali", "Ahmed", "Hamza", "Usman"];
```

Loop use karo aur check karo `"Hamza"` array mein hai ya nahi.

**Hint:** loop ke andar if use karo.

## Q19 — Specific Items Remove

Given:

```js
let fruits = ["Apple", "Banana", "Mango", "Orange"];
```

`"Mango"` ko array se remove karo.

**Hint:** `splice()` use karo.

**Extra Hint:** `splice()` mein pehle index aur phir kitne items remove karne hain specify hota hai.

## Q20 — Array ka Kuch Part Copy

Given:

```js
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
```

Sirf:

```
Banana
Mango
Orange
```

ka new array banao.

**Hint:** `slice()` use karo.

**Extra Hint:** `slice(start, end)` mein end index include nahi hota.

---

## Level 2 — Logic Building

## Q21 — Student Marks

Ek variable:

```js
let marks = 75;
```

Check karo:

- 80 ya above → `"A Grade"`
- 70 ya above → `"B Grade"`
- 60 ya above → `"C Grade"`
- 50 ya above → `"D Grade"`
- below 50 → `"Fail"`

**Hint:** multiple if / else if conditions.

## Q22 — Shopping Cart

Given:

```js
let cart = ["Laptop", "Mouse", "Keyboard"];
```

Program mein ye kaam karo:

- `"Headphones"` add karo.
- `"Mouse"` remove karo.
- Final cart print karo.

**Hint:** `push()` + `splice()`.

## Q23 — Array mein Sab se Bara Number

Given:

```js
let numbers = [10, 45, 23, 89, 34];
```

`for` loop use karke sab se bara number find karo.

**Hint:** ek variable mein starting mein pehla number store karo, phir loop mein comparison karo.

## Q24 — Array mein Sab se Chota Number

Given:

```js
let numbers = [50, 12, 80, 5, 34];
```

`for` loop use karke sab se chota number find karo.

**Hint:** Q23 wali logic ko reverse comparison ke sath use karo.

## Q25 — Name Length Check

Given:

```js
let names = ["Ali", "Ahmed", "Muhammad", "Usman"];
```

Loop chalao aur sirf woh names print karo jin ki length 5 se zyada ho.

**Hint:** string ki length check karne ke liye `.length` use hota hai.

## Q26 — Search Product

Given:

```js
let products = ["Laptop", "Mobile", "Tablet", "Mouse", "Keyboard"];
```

Ek variable:

```js
let searchProduct = "Mouse";
```

Loop use karke check karo product available hai ya nahi.

**Output:**

```
Product Found
```

ya

```
Product Not Found
```

**Hint:** if ke andar string comparison karo.

## Q27 — Array se Duplicate Value Remove

Given:

```js
let numbers = [10, 20, 10, 30, 20, 40];
```

Array ko process karo aur duplicate values remove karne ki koshish karo.

**Expected:**

```
[10, 20, 30, 40]
```

**Hint:** Abhi koi advanced method zaroori nahi. `for` loop + `includes()` + `push()` se try karo.

**New Method Hint:** `includes()` check karta hai ke value array mein already mojood hai ya nahi.

## Q28 — Reverse Array

Given:

```js
let numbers = [1, 2, 3, 4, 5];
```

Ek new array banao jisme values reverse order mein hon:

```
[5, 4, 3, 2, 1]
```

**Hint:** `for` loop ko reverse direction mein chala sakte ho.

**Important:** `reverse()` method use na karo. Logic khud banao.

## Q29 — Shopping Cart Total

Given:

```js
let prices = [100, 250, 50, 300];
```

`for` loop use karke total bill calculate karo.

Agar total 500 se zyada ho to:

```
You got a discount
```

warna:

```
No discount
```

**Hint:** pehle loop se total calculate karo, phir if / else se check karo.

## Q30 — Mini Student System

Ek array banao:

```js
let students = ["Ali", "Ahmed", "Hamza", "Usman"];
```

Program mein ye tasks perform karo:

- Beginning mein `"Bilal"` add karo.
- End mein `"Hassan"` add karo.
- `"Ahmed"` remove karo.
- Loop se sare students print karo.
- Check karo `"Hamza"` student list mein mojood hai ya nahi.
- Total students count print karo.

**Hints:**

- Beginning add → `unshift()`
- End add → `push()`
- Remove specific item → `splice()`
- Print → `for` loop
- Search → `includes()`
- Count → `.length`
