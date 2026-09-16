/*
CSS Combinators are used when we want to select an element based on its relationship with another element.

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

Ex2: homeKitchenProducts: span.dcl-truncate.dcl-product-title > span
Ex3: fashionProducts: div.grid-container > img
Ex3: sellItems: div#category_all_image > div  >img
*/