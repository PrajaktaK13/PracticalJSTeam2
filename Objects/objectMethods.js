// Object Methods:

// Object.keys():It gives us an array containing all the property names.

let person = {
    name: "Rahul",
    age: 25,
    city: "Mumbai"
};
console.log(Object.keys(person));               // ["name", "age", "city"]

// Object.values():It gives us an array containing all the values.

console.log(Object.values(person));             // [ 'Rahul', 25, 'Mumbai' ]

// Object.entries() :This gives us key-value pairs as arrays.

console.log(Object.entries(person));
/* o/p: [
    ["name", "Rahul"],
    ["age", 25],
    ["city", "Mumbai"]
]        is particularly useful when you want to loop through both the key and value.
      */

// Loop through object
//Ex1:

let student = {
    name: "Rahul",
    age: 25,
    city: "Mumbai"
};

let keys = Object.keys(student);

for (let i = 0; i < keys.length; i++) {
    //console.log(keys[i]);   
    /* name
       age
       city */
    console.log(keys[i], student[keys[i]]);  
    /* name Rahul
       age 25
       city Mumbai */
}
for (let key in student) {
    console.log(key);
}
/* name
   age
   city */


   


