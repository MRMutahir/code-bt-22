# JavaScript Middle Level Assignment — 10 Questions


## Q1 — Do Arrays ko Merge Karna

Given:

```js
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
```

`for` loop use karke `arr2` ke sare items `arr1` mein add karo (naya combined array banao).

**Expected:**

```
[1, 2, 3, 4, 5, 6]
```

**Hint:** `concat()` use na karo. Loop + `push()` se try karo.

## Q2 — Second Largest Number

Given:

```js
var numbers = [45, 12, 89, 33, 89, 20];
```

`for` loop use karke array ka second largest number find karo.

**Expected:**

```
45
```

**Hint:** pehle largest find karo (jaise Q23 mein kiya tha), phir dobara loop chala kar us se chota sab se bara number dhoondo.

## Q3 — Number Kitni Baar Aya

Given:

```js
var numbers = [10, 20, 10, 30, 10, 40, 20];
var searchNumber = 10;
```

Loop use karke check karo `searchNumber` array mein kitni baar mojood hai.

**Expected:**

```
10 appears 3 times
```

**Hint:** ek `count` variable banao, loop ke andar if se match check karo aur count barhao.

## Q4 — Sirf Even Numbers ka Sum

Given:

```js
var numbers = [5, 12, 7, 20, 15, 8];
```

`for` loop use karke sirf even numbers ka sum nikalo (odd numbers ko skip karo).

**Expected:**

```
40
```

**Hint:** Q12 (even numbers) aur Q15 (sum) ki logic ko combine karo.

## Q5 — Positive aur Negative Alag Karna

Given:

```js
var numbers = [10, -5, 20, -8, 0, 15, -3];
```

Loop use karke do naye arrays banao — ek positive numbers ke liye aur ek negative numbers ke liye.

**Expected:**

```
Positive: [10, 20, 15]
Negative: [-5, -8, -3]
```

**Hint:** Q17 ki logic use karo lekin do alag arrays mein `push()` karo (0 ko dono mein skip kar sakte ho).

## Q6 — Array Sorted Hai ya Nahi

Given:

```js
var numbers = [10, 20, 25, 40, 55];
```

`for` loop use karke check karo array ascending (chote se bare) order mein sorted hai ya nahi.

**Output:**

```
Array is sorted
```

ya

```
Array is not sorted
```

**Hint:** loop mein current item ko agle item se compare karo. Agar kahin bhi current item agle se bara mila to "not sorted".

## Q7 — Grades Count Karna

Given:

```js
var marks = [85, 72, 91, 60, 45, 78, 55];
```

Har student ke marks ke liye grade nikalo (Q21 wali grading logic use karo) aur count karo kitne students ne "A Grade" liya.

**Expected:**

```
A Grade students: 2
```

**Hint:** loop ke andar if/else if se grade check karo, jab bhi "A Grade" mile to ek counter barhao.

## Q8 — Duplicates Remove Karke Sum Nikalna

Given:

```js
var numbers = [10, 20, 10, 30, 20, 40, 10];
```

Pehle duplicate values remove karo (Q27 ki logic), phir unique numbers ka sum calculate karo.

**Expected:**

```
Unique array: [10, 20, 30, 40]
Sum: 100
```

**Hint:** `includes()` se duplicate check karo aur `push()` se unique array banao, phir dusre loop se sum nikalo.

## Q9 — Multiple Discount Tiers

Given:

```js
var prices = [150, 300, 80, 220];
```

`for` loop use karke total bill calculate karo, phir:

- Agar total 700 se zyada ho to `"20% discount"`
- Agar total 400 se zyada ho (lekin 700 se kam) to `"10% discount"`
- warna `"No discount"`

**Hint:** Q29 ki logic ko extend karo, if/else if/else se multiple tiers check karo.

## Q10 — Average se Bare Numbers

Given:

```js
var numbers = [12, 45, 23, 67, 34, 89, 10];
```

`for` loop use karke array ka average nikalo, phir dobara loop chala kar count karo array mein kitne numbers average se bare hain.

**Expected:**

```
Average: 40
Numbers above average: 3
```

**Hint:** pehle sum + `.length` se average nikalo (Q15 ki logic), phir dusre loop mein har number ko average se compare karo.
