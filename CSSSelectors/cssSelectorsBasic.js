/*   CSS Selectors:

page: home page
website: https://www.amazon.in/
url: https://www.amazon.in/

A CSS selector is a pattern used to identify HTML elements on a webpage.
Ex:
HTML:
<input id="username" class="form-control" type="text">

We can identify this element using different selectors:

1. ID selector:id will be defined using '#'.

Ex1: html: <a href="/ref=nav_logo" id="nav-logo-sprites" class="nav-logo-link nav-progressive-attribute" >
    so we can write ID selector as:
        amazonLogo:[id='nav-logo-sprites']               // need to write like this

Ex2: address: [id='glow-ingress-line1']
Ex3: updateLocation: [id='glow-ingress-line2']



2. Tag selector: - tag can be used directly without any character.

if HTML is like:
<input id="glowDestinationType" name="glow-destination-type" type="hidden" value="IP2LOCATION"

Ex1: toolBar:input
Ex2: toolBar:div


3. class selector:

<input class="form-control">

css selector: .form-control  

Ex1: searchBar: [class='nav-input nav-progressive-attribute']
Ex2: languageChange: [class='icp-nav-flag icp-nav-flag-in icp-nav-flag-lop']
Ex3: helloSignin: [class='nav-line-1 nav-progressive-content']

Unlike an ID, a class can be used by multiple elements.



4. Tag + Class

We can combine them

for html: <input class="form-control">

css selctor: input.form-control: Meaning- Find an input element having the class form-control.

Ex1: accounts&List: span.nav-line-2 
Ex2: returns: span.nav-line-1
Ex3: &orders: span.nav-line-2




5. Tag + ID

For html: <input id="username">

css selector: input#username- Meaning:Find an input whose ID is username.

Imp: Usually the shorter selector is preferable when the ID is unique.

Ex1: amazonLogo: a#nav-logo-sprites
Ex2: address: span#glow-ingress-line1
Ex3: updateLocation: span#glow-ingress-line2




6. Multiple classes

html: <button class="btn primary large">Login</button>

The element has three classes:

-btn
-primary
-large

we can use css selctor as:
.btn or .primary or .large
 or with comibining classes: .btn.primary or .btn.primary.large // (no space between classes)

 Ex1: cart:.nav-cart-icon.nav-sprite
 Ex2: menu: .hm-icon.nav-sprite
 Ex3: trending: .hmenu-item.hmenu-title 




 7. Universal Selector

 * - It means: Select all elements.

 <html>
<body>
<h1>
<input>
<button>
<div>
...   Everything.

In automation: You normally won't use * to locate a specific element because it is too broad.




8. Grouping Selector:

html:
 <input>username</input>
 <input>password</input>
<button>Login</button>
<button>Cancel</button>

input, button : matches 4 elements

Ex1: input,span
Ex2: input,button
















*/