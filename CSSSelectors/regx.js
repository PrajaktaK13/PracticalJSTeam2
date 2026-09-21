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