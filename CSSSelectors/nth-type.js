/*

1. :first-of-type

This selects the first element of that particular tag type among its siblings.

Ex: searchBar:input:first-of-type


2. :last-of-type

This selects the last element of that perticular tag type among its siblings.

Ex: input:last-of-type


3. :nth-of-type

This is a CSS pseudo-class used when you want a particular occurrence of an element 
among its siblings of the same HTML tag.

Ex: input:nth-of-type(2)

4. :nth-child

This selects an element based on its position among ALL its sibling elements.

Ex: input:nth-child(2)


difference between nth-of-type and nth-child:

suppose HTML is:

<div>
    <h2>Products</h2>
    <h3>Fruits</h3>
    <p>Apple</p>
    <p>Banana</p>
    <p>Mango</p>
</div>

p:nth-child(2)

Count all elements:

h2 → 1
h3 → 2  ← not a <p>
p  → 3
p  → 4
p  → 5

Therefore: p:nth-child(2): ❌ Nothing is selected.

p:nth-of-type(2)

Count only <p>:

p Apple  → 1
p Banana → 2  ← selected
p Mango  → 3

Therefore: p:nth-of-type(2) ✅ Selects Banana.

*/