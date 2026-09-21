/*
CSS Combinators are used when we want to select an element based on its relationship with another element.

page: home page
website: https://www.amazon.in/
url: https://www.amazon.in/


HTML:

<div class="login">
    <label>Username</label>
    <input type="text">

    <label>Password</label>
    <input type="password">

    <button>Login</button>
</div>

Find the input inside .login.

1. Descendant Combinator — Space

parent child
Ex1: .login input: Meaning- Find all input elements somewhere inside .login.
                            Here input is descendent of login

Ex2: homeKitchenProducts: span.dcl-truncate.dcl-product-title span
Ex3: fashionProducts: div.sl-sobe-carousel-sub-card-footer span
Ex3: sellItems: div#category_all_image  div  img


2. Child Combinator — >

parent > child : Find the element that is a direct child of the parent.
Ex1: fashionMenu: div.subnav-div>a>span
                Here div is directly inside div, a is directly inside div and span is directly inside a.
Ex2: giftCardMenu: div.subnav-div a span


3. Adjacent Sibling — +
+ means: Select the element that comes immediately after another element.

Html: <label>Username</label>
     <input type="text">

     <label>Password</label>
     <input type="password">

Ex1: label + input: means Find an input that comes immediately after a label.
Ex2: a+button


4. General Sibling — ~
~ means: Select matching siblings that appear anywhere after the first element.

Html: <label>Username</label>
      <div>Message</div>
      <input type="text">
      <button>Login</button>

Ex1: label ~ input
Ex2: NewReleaseProducts: div ~ span


sumary:

| Selector         | Meaning                       |
| ---------------- | ----------------------------- |
| `.login input`   | input anywhere inside login   |
| `.login > input` | input directly inside login   |
| `label + input`  | input immediately after label |
| `label ~ input`  | input anywhere after label    |


*/