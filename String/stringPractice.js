// print each character of string and count characters
let str1 = "JavaScript";
let count=0;
for(let i=0 ; i<str1.length; i++){
   //console.log(str1[i]);
   console.log(str1.charAt(i));
   count++;
}
console.log(count);

// count spaces

let str2 = "I love JavaScript";
let spceCount=0;
for (let i= 0; i<str2.length ; i++) {
    if(str2.charAt(i)== " "){
        spceCount++;
    }
    
}
console.log(spceCount);

// find duplicate characters

let str3 = "programming";
for(let i=0 ; i<str3.length; i++){
    for(let j=i+1 ; j<str3.length; j++){
        if(str3[i]===str3[j]){
             console.log("Duplicate character is ", str3[j]);
        }
    }
}

// count each character

let str4 = "programming";
let ecount;
let counted="";
for(let i=0 ; i<str4.length; i++){
    if (counted.includes(str4[i])) {
        continue;
    }
    ecount=1;      
    for(let j=i+1 ; j<str4.length; j++){                 
        if(str4[i]===str4[j]){
             ecount++;
        }         
    }
    console.log(str4[i], ecount);
    counted += str4[i];
}

// Practice ex on string coversion
let numG = 25;

let strG = String(numG);

console.log(strG + 5);                              // 255
console.log(Number(strG) + 5);                      // 30
console.log(typeof strG);                           // string

// Ex2:
let x = "10";
let y = 20;

console.log(x + y);                                 // o/p: 1020
console.log(Number(x) + y);                         // o/p: 30
console.log(String(y) + x);                         // o/p: 2010               
console.log(typeof (String(y) + x));                // o/p: string

// Examples on Number(), parseInt(), parseFloat(). NaN

console.log(Number("25.5"));                        // o/p: 25.5
console.log(parseInt("25.5"));                      // o/p: 25
console.log(parseFloat("25.5"));                    // o/p: 25.5
console.log(Number("25abc"));                       // o/p: NaN
console.log(parseInt("25abc"));                     // o/p: 25
console.log(parseFloat("25.75abc"));                // o/p: 25.75
console.log(isNaN("100"));                          // o/p: false()                     
/* : JavaScript effectively does:
"100" → 100 so isNaN(100)-> false  */
console.log(isNaN("hello"));                        // o/p: true
console.log(Number.isNaN("hello"));                 // o/p: false
/* Because "hello" is a string, not the actual NaN value. */

/*isNaN(): Converts first, then checks.
Number.isNaN():Does not convert, It returns true only if the value is actually NaN */

let value = Number("hello");                         // Number("hello")-> NaN
console.log(Number.isNaN(value));                    // o/p: true

// Practice examples on "", " ", null, undefined

console.log(Number(""));                              // o/p: 0
console.log(Number(" "));                             // o/p: 0
console.log(Number(null));                            // o/p: 0
console.log(Number(undefined));                       // o/p: NaN
console.log(Number(true));                            // o/p: 1
console.log(Number(false));                           // o/p: 0

console.log(isNaN(""));                               // o/p: false
console.log(isNaN(undefined));                        // o/p: true
console.log(Number.isNaN(undefined));                 // o/p: false

console.log(isNaN(null));                             // o/p: false
console.log(Number.isNaN(null));                      // o/p: false

// combining practice:

console.log("" + 5);                                  // o/p: 5("5" its actually string)
console.log("" - 5);                                  // o/p: -5
console.log(null + 5);                                // o/p: 5
console.log(null - 5);                                // o/p: -5
console.log(true + 5);                                // o/p: 6
console.log(false + 10);                              // o/p: 10
console.log("10" + null);                             // o/p: 10null
console.log("10" - null);                             // o/p: 10     
console.log("5" + true);                              // o/p: 5true   
console.log("5" - true);                              // o/p: 4   

// Reverse string without reverse

let str = "JavaScript";
let reverse="";

for(let i=str.length-1; i>=0; i--){
    reverse=reverse+str[i];     
}
console.log(reverse);

// find shortest word

let stri= "JavaScript is good language"; 

let words= stri.split(" ");
let shortest=words[0];
for(let i=0; i<words.length; i++){
    if(words[i].length<shortest.length){
        shortest=words[i];
    }
}
console.log(shortest);

// find the first repeated character

let str5 = "programming";
let result="";

for(let i=0; i<str5.length; i++){
    if(result.includes(str5[i])){
    console.log("First duplicate:", str5[i]);
        break;
    }else{
        result=result+str5[i];
    }
}

// first non repeated character

let str6 = "programming"; 

for(let i=0; i<str6.length; i++){
    if(str6.indexOf(str6[i])==str6.lastIndexOf(str6[i])){
        console.log("first non repeated character is ",str6[i]);
        break;
    }
}

// all non repeated characters

let str7 = "programming"; 
console.log("Non repeated charcaters are: ");
for(let i=0; i<str7.length; i++){    
    if(str7.indexOf(str7[i])==str7.lastIndexOf(str7[i])){
        console.log(str7[i]);        
    }
}

// remove spaces

let str8 = "JavaScript is very easy";
let newstr1="";
for(let i=0; i<str8.length; i++){   
     if(str8[i]!=" "){
        newstr1= newstr1+str8[i];
     }
}
console.log(newstr1);

// replace space with "-"

str8 = "JavaScript is very easy";
let newstr2="";
for(let i=0; i<str8.length; i++){   
     if(str8[i]==" "){
        newstr2= newstr2+"-";
     }else{
        newstr2=newstr2+str8[i];
     }
}
console.log(newstr2);



