/*   CSS Attribute Selectors: 

[attribute]
[attribute="value"]
[attribute^="value"]
[attribute$="value"]
[attribute*="value"]  


1. [attribute] — Attribute exists

[attribute]: Find the elemnets that have this attribute.

Ex1: input[type]: This means- Find input elements that have a type attribute.
Ex2: a[class]: Find the a elements that have class attribute.
Ex3: div[id] : Find the div elements that have id attribute.


2. [attribute="value"] — Exact match

Ex1: span[id='glow-ingress-line2']- Meaning: Find an span whose id is exactly glow-ingress-line2.
Ex2: helloSignin: span[id="nav-link-accountList-nav-line-1"]
Ex3: a[class='hmenu-item']


3. [attribute^="value"] — Starts with

Ex1: input[id^="user"]- Meaning: Find the element whose id starts with user.
Ex2: a[class^='hmenu']- Meaning: Find the element whose class starts with hmenu.
Ex3: span[class^='nav']


4. [attribute$="value"] — Ends with

Ex1: span[class$='content']- Meaning Find the element whose class ends with content.
Ex2: menuItems: span[class$='card-title']
Ex3: items: span[class$='product-title']


5. [attribute*="value"] — Contains

Ex1: woodenItems: span[class*='a-truncate-cut']
Ex2: todaysDealItems: span[class*='a-truncate-cut']
Ex3: electronicsItems: span[class*='sl-sobe-carousel-sub-card-title']

*/