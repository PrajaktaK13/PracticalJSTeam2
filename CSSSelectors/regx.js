/*
What is Regex?

Regex = a pattern used to find matching text.

URL: https://login.yahoo.com/

Ex: next: page.getByRole('button' , {name: /Next/});

- Find a button whose name matches the pattern Next.


Exact text vs Regex:

page.getByText('Login'): This looks for the exact text Login.

page.getByText(/Login/):  

This can match text containing Login, such as:

Login
Login Now
User Login
Login to Account


Most important Regex patterns:

1. Match/Contains:
 page.getByText(/Search Amazon.in/);

2. Case insensetive:
page.getByText(/Search Amazon.in/i); : The i means case-insensitive.
   
 It can match:
 SEARCH AMAZON.IN
 SEARCH amazon.in
 etc.


3. ^ — Starts with:

page.getByText(/^Search/);: Text should start with Search


4. $ — Ends with:

page.getByText(/Amazon.in$/);


5. Combination:

page.getByRole('button', { name: /^Next$/i });

This means: Find a button whose name is exactly Next, ignoring uppercase/lowercase.


6. Regex with dynamic text:

Suppose the application displays:

Order ID: 12345
Order ID: 67891
Order ID: 45678

The number changes every time.

Instead of:

page.getByText('Order ID: 12345')

we can use:

page.getByText(/Order ID:/)

Now the changing number doesn't matter.

Ex: orderID: page.getByText(/403 /)



1. . — Any single character

In Regex, a dot .- 
a.c -  means: Any one character between a and c.

Ex: returns: page.getByText('Ret.rns');


2. .* — Any number of characters           */

//    /a.*/ - This means: a followed by zero or more characters 
//     Ex: returns: page.getByText('Ret.*/');      




/*   4. + — One or more same characters.

/a+/ - means: One or more a characters.(here a)


5. *  - zero or more same characters

/a*/    // - means : zero or more same chacarcters(here a)


/*   6: \d — Digit

/\d/- means: Find one digit: 0–9

EX: Order 5
    User 2
    Product 9


7. \d+ — One or more digits

Suppose your application displays:

Order ID: 45892

We can use:

page.getByText(/Order ID: \d+/)

Break it down:

Order ID: → fixed text
\d+       → one or more digits

So it can match:

Order ID: 1
Order ID: 25
Order ID: 45892
Order ID: 123456789

This is extremely useful when the ID changes every test execution.

Ex:  orderID: page.getByText(/403 \d+/)




8. Let's combine what we learned

Suppose the application shows:

Order ID: 45892

We could write:

page.getByText(/^Order ID: \d+$/)

Breakdown:

^           → start
Order ID:   → fixed text
\d+         → one or more digits
$           → end

So:

Order ID: 45892       ✅
Order ID: 123         ✅
Your Order ID: 45892  ❌
Order ID: ABC         ❌



| Regex | Meaning                  |
| ----- | ------------------------ |
| `.`   | Any single character     |
| `.*`  | Any number of characters |
| `+`   | One or more              |
| `*`   | Zero or more             |
| `\d`  | One digit                |
| `\d+` | One or more digits       |
| `^`   | Start                    |
| `$`   | End                      |
| `i`   | Ignore case              |

*/

//with test function , problems

//1. ^ — Starts with

let regex1 = /^Hello/;

console.log(regex1.test("Hello World")); // true
console.log(regex1.test("Hi Hello"));    // false

//2. $ — Ends with

let regex2 = /World$/;

console.log(regex2.test("Hello World")); // true
console.log(regex2.test("World Hello")); // false


//3. Starts AND ends

let regex3 = /^Hello World$/;

console.log(regex3.test("Hello World")); // true
console.log(regex3.test("Hi Hello World")); // false
console.log(regex3.test("Hello World Test")); // false


//4. Contains:

let regex4 = /Playwright/;

console.log(regex4.test("I am learning Playwright")); // true
console.log(regex4.test("Playwright automation"));    // true
console.log(regex4.test("I am learning Selenium"));   // false

//5. [^ ] — NOT

let regex5 = /[^0-9]/; 

console.log(regex5.test("123"));  // false
console.log(regex5.test("123a")); // true

// ⚠️ Notice that ^ has two meanings:

// ^abc       → starts with abc
// [^0-9]     → NOT a number

// 6. . — Any character

let regex6 = /c.t/;              // . means almost any single character.

console.log(regex6.test("cat")); // true
console.log(regex6.test("cot")); // true
console.log(regex6.test("cut")); // true


//7. * — Zero or more

let regex7 = /ab*c/;  // Means a, followed by zero or more b, followed by c.

console.log(regex7.test("ac"));    // true
console.log(regex7.test("abc"));   // true
console.log(regex7.test("abbbc")); // true


//8. + — One or more

let regex8 = /ab+c/;      // Now at least one b is required.

console.log(regex8.test("ac"));    // false
console.log(regex8.test("abc"));   // true
console.log(regex8.test("abbbc")); // true


//9. ? — Zero or one

let regex9 = /colou?r/;     // The u is optional.

console.log(regex9.test("color"));  // true
console.log(regex9.test("colour")); // true



//10. {n} — Exact number

let regex10 = /^\d{4}$/;  // exactly 4 digits

console.log(regex10.test("1234")); // true
console.log(regex10.test("123"));  // false
console.log(regex10.test("12345")); // false



//11. {n,m} — Range

let regex11 = /^\d{6,10}$/;   // Between 6 and 10 digits.(min 6 max 10)

console.log(regex11.test("12345"));       // false → 5 digits
console.log(regex11.test("123456"));      // true  → 6 digits
console.log(regex11.test("1234567"));     // true  → 7 digits
console.log(regex11.test("12345678"));    // true  → 8 digits
console.log(regex11.test("123456789"));   // true  → 9 digits
console.log(regex11.test("1234567890"));  // true  → 10 digits
console.log(regex11.test("12345678901")); // false → 11 digits



//12. \d — Digit

let regex12 = /^\d+$/;     // only numbers

console.log(regex12.test("12345")); // true
console.log(regex12.test("123a"));  // false



//13. \w — Word character 

let regex13 = /^\w+$/;         // Matches letters, numbers and underscore.(A-Z, a-z, 0-9, _ underscore)

console.log(regex13.test("Test123")); // true
console.log(regex13.test("Test_123")); // true
console.log(regex13.test("Test@123")); // false



//14. \s — Whitespace

let regex14 = /\s/;

console.log(regex14.test("Hello World")); // true
console.log(regex14.test("HelloWorld"));  // false


// 15. | — OR

let regex15 = /Chrome|Firefox/;

console.log(regex15.test("Chrome browser"));  // true
console.log(regex15.test("Firefox browser")); // true
console.log(regex15.test("Safari browser"));  // false

// 16. \W — NOT a word character

// \W → anything that is NOT a word character

// ex: space, @ , # , -, . , !     

let regex16 = /\W/;

console.log(regex16.test("QA Engineer")); // true  → space
console.log(regex16.test("QA@123"));      // true  → @
console.log(regex16.test("QA-123"));      // true  → -
console.log(regex16.test("QA_123"));      // false
console.log(regex16.test("QA123"));       // false

// \D: not a digit
// \S: not a white space.






