# JavaScript Function Assignment — 20 Questions

## Part 1 — Basic Functions (Q1–Q10)

## Q1 — Simple Function (No Parameter)

Ek function banao `sayHello` naam ka jo call hone par console mein `"Hello!"` print kare.

**Expected:**

```
Hello!
```

**Hint:** function declare karo, andar `console.log` likho, phir function ko call karo.

## Q2 — Function with One Parameter

Ek function banao `greet(name)` jo naam parameter mein le aur usko greet kare.

Given:

```js
greet("Ali");
```

**Expected:**

```
Hello, Ali!
```

**Hint:** parameter ko string ke sath template literal ya `+` se jodo.

## Q3 — Function with Two Parameters

Ek function banao `addNumbers(a, b)` jo do numbers add kare aur result print kare.

Given:

```js
addNumbers(5, 10);
```

**Expected:**

```
15
```

**Hint:** function ke andar `a + b` calculate karke `console.log` karo.

## Q4 — Function with Return Value

Ek function banao `multiply(a, b)` jo multiplication ka result `return` kare (print na kare).

Given:

```js
var result = multiply(4, 6);
console.log(result);
```

**Expected:**

```
24
```

**Hint:** `return` keyword use karo, function ke bahar variable mein result store karo.

## Q5 — Function with Default Parameter

Ek function banao `greetUser(name)` jo agar koi naam pass na kiya jaye to default `"Guest"` use kare.

Given:

```js
greetUser();
greetUser("Sara");
```

**Expected:**

```
Hello, Guest!
Hello, Sara!
```

**Hint:** parameter ko `name = "Guest"` likh kar default value do.

## Q6 — Function Multiple Times Call Karna

Ek function banao `square(num)` jo number ka square return kare. Isko 3 different numbers ke sath call karo.

Given:

```js
console.log(square(2));
console.log(square(5));
console.log(square(9));
```

**Expected:**

```
4
25
81
```

**Hint:** ek hi function ko baar baar different arguments ke sath call kar sakte ho.

## Q7 — Area of Rectangle

Ek function banao `rectangleArea(length, width)` jo rectangle ka area calculate kare aur return kare.

Given:

```js
console.log(rectangleArea(10, 5));
```

**Expected:**

```
50
```

**Hint:** area = length * width.

## Q8 — Celsius to Fahrenheit

Ek function banao `celsiusToFahrenheit(celsius)` jo formula `(celsius * 9/5) + 32` use kar ke Fahrenheit return kare.

Given:

```js
console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(100));
```

**Expected:**

```
32
212
```

**Hint:** formula ko exactly usi order mein likho.

## Q9 — Function Return vs Print ka Farq

Ek function banao `addAndLog(a, b)` jo sirf print kare (return na kare), aur ek function `addAndReturn(a, b)` jo sirf return kare (print na kare).

Given:

```js
addAndLog(2, 3);
var sum = addAndReturn(2, 3);
console.log("Returned:", sum);
```

**Expected:**

```
5
Returned: 5
```

**Hint:** pehle function ke andar `console.log` use karo, dusre function mein `return` use karo — dono ka farq samjho.

## Q10 — Function with Three Parameters

Ek function banao `calculateBill(price, quantity, taxPercent)` jo total bill (with tax) calculate kar ke return kare.

Given:

```js
console.log(calculateBill(100, 2, 10));
```

**Expected:**

```
220
```

**Hint:** pehle `price * quantity` nikalo, phir usme tax percent add karo.

## Part 2 — Functions with Loop, If/Else, Date (Q11–Q20)

## Q11 — Print Numbers 1 to N

Ek function banao `printNumbers(n)` jo `for` loop use kar ke 1 se `n` tak numbers print kare.

Given:

```js
printNumbers(5);
```

**Expected:**

```
1
2
3
4
5
```

**Hint:** function ke andar `for` loop lagao, `n` parameter ko loop ki condition mein use karo.

## Q12 — Sum of Array (Function Parameter)

Ek function banao `sumArray(arr)` jo array parameter mein le aur `for` loop se sare elements ka sum return kare.

Given:

```js
console.log(sumArray([10, 20, 30, 40]));
```

**Expected:**

```
100
```

**Hint:** loop ke andar ek `sum` variable ko har item ke sath add karte jao, aakhir mein `return` karo.

## Q13 — Find Maximum in Array

Ek function banao `findMax(arr)` jo loop aur if condition use kar ke array ka sab se bara number return kare.

Given:

```js
console.log(findMax([12, 45, 3, 67, 22]));
```

**Expected:**

```
67
```

**Hint:** ek `max` variable ko pehle item se start karo, loop ke andar if se compare karo aur update karo.

## Q14 — Check Prime Number

Ek function banao `isPrime(num)` jo loop aur if/else use kar ke check kare number prime hai ya nahi.

Given:

```js
console.log(isPrime(7));
console.log(isPrime(10));
```

**Expected:**

```
7 is Prime
10 is Not Prime
```

**Hint:** 2 se lekar `num - 1` tak loop chalao, agar koi bhi number bina remainder ke divide ho jaye to prime nahi hai.

## Q15 — Positive/Negative Classify Array

Ek function banao `classifyNumbers(arr)` jo array le kar loop + if/else se count kare kitne numbers positive hain aur kitne negative.

Given:

```js
classifyNumbers([10, -5, 20, -8, 0, 15, -3]);
```

**Expected:**

```
Positive: 3
Negative: 3
```

**Hint:** do counters banao (`positiveCount`, `negativeCount`), loop ke andar if/else se decide karo (0 ko skip kar sakte ho).

## Q16 — Current Year (Date)

Ek function banao `getCurrentYear()` jo `Date` object use kar ke current year return kare.

Given:

```js
console.log(getCurrentYear());
```

**Expected:**

```
2026
```

**Hint:** `new Date()` se date object banao, phir `.getFullYear()` use karo.

## Q17 — Calculate Age from Birth Year

Ek function banao `calculateAge(birthYear)` jo current year se birth year minus kar ke age return kare.

Given:

```js
console.log(calculateAge(2000));
```

**Expected:**

```
26
```

**Hint:** `new Date().getFullYear()` se current year lo, phir `birthYear` ko minus karo.

## Q18 — Multiplication Table

Ek function banao `printTable(num)` jo loop use kar ke us number ki 1 se 10 tak table print kare.

Given:

```js
printTable(3);
```

**Expected:**

```
3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
...
3 x 10 = 30
```

**Hint:** `for` loop `i = 1` se `i <= 10` tak chalao, har baar `num * i` print karo.

## Q19 — Count Vowels in String

Ek function banao `countVowels(str)` jo loop aur if condition use kar ke string mein vowels (a, e, i, o, u) ka count return kare.

Given:

```js
console.log(countVowels("hello world"));
```

**Expected:**

```
3
```

**Hint:** string ke har character par loop chalao, if se check karo character vowel hai ya nahi (`includes()` ya manual if/else if se).

## Q20 — Check Today's Day Name

Ek function banao `isToday(dayName)` jo `Date` object se current din ka naam nikale aur if/else se check kare ke wo diye gaye `dayName` se match karta hai ya nahi.

Given:

```js
isToday("Tuesday");
```

**Expected:**

```
Yes, today is Tuesday
```

ya

```
No, today is not Tuesday
```

**Hint:** `new Date().getDay()` number return karta hai (0 = Sunday ... 6 = Saturday). Ek array banao jisme din ke names ho, us array se number ke through naam nikalo, phir if/else se compare karo.
