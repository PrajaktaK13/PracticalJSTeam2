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
console.log(reverse);                                // tpircSavaJ

// find shortest word

let stri= "JavaScript is good language"; 

let words= stri.split(" ");
let shortest=words[0];
for(let i=0; i<words.length; i++){
    if(words[i].length<shortest.length){
        shortest=words[i];
    }
}
console.log(shortest);                                // is

// find the first repeated character

let str5 = "programming";
let result="";

for(let i=0; i<str5.length; i++){
    if(result.includes(str5[i])){
    console.log("First duplicate:", str5[i]);          // First duplicate: r
        break;
    }else{
        result=result+str5[i];
    }
}

// first non repeated character

let str6 = "programming"; 

for(let i=0; i<str6.length; i++){
    if(str6.indexOf(str6[i])==str6.lastIndexOf(str6[i])){
        console.log("first non repeated character is ",str6[i]);  // first non repeated character is  p
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
/* o/p: 
Non repeated charcaters are: 
p
o
a
i
n           */

// remove spaces

let str8 = "JavaScript is very easy";
let newstr1="";
for(let i=0; i<str8.length; i++){   
     if(str8[i]!=" "){
        newstr1= newstr1+str8[i];
     }
}
console.log(newstr1);                 // JavaScriptisveryeasy

// replace space with "-"

str8 = "JavaScript is very easy";
let newstr2="";
for(let i=0; i<str8.length; i++){   
     if(str8[i]==" "){
        newstr2= newstr2 + "-";
     }else{
        newstr2=newstr2+str8[i];
     }
}
console.log(newstr2);                 // JavaScript-is-very-easy


// Extract first name and last name

let fullName = "Hi Prajakta Kawade";

let firstName= fullName.slice(3,11);     // Start at index 3 and stop BEFORE index 11. 
console.log(firstName);       // Prajakta
console.log(fullName.slice(12)); // Kawade



let fullName1 = "Hi Prajakta Kawade";

let firstName1= fullName1.substring(3,11);  
console.log(firstName1);       // Prajakta
console.log(fullName1.substring(12)); // Kawade

// Get first and last character

let word = "Automation";
console.log(word.charAt(0), word.charAt(9));

// whether text contains a word

let message = "Login successful";

console.log(message.includes("successful"));       // true

// Replace text

let message1 = "Login failed";

// Change "failed" to "successful"

console.log(message1.replace("failed","successful"));

let text = "Java is good. Java is powerful. Java is popular.";

// Replace every "Java" with "JavaScript"

console.log(text.replaceAll("Java","JavaScript"));

// split sentence in to words

let sentence = "I am learning JavaScript";

let result1 = sentence.split(" ");
console.log(result1);               // [ 'I', 'am', 'learning', 'JavaScript' ]
console.log(result1.length);        // 4

// Extract username from email

let email = "prajakta@gmail.com";

console.log(email.slice(0,email.indexOf("@")));  // prajakta

// extract domain

console.log(email.slice(email.indexOf("@")+1)); // gmail.com


// validate file extension

let fileName = "testReport.pdf";

// Check whether the file is a PDF.

if(fileName.endsWith(".pdf")){
    console.log("File is valid");            //File is valid
}

// Validate page title
let actualTitle = "Login - WoodWing Assets";
let expectedTitle = "Login";

// Check whether actual title contains expected title.

if(actualTitle.includes(expectedTitle)){
    console.log("Title is correct");            // Title is correct
}

// Extract file name without extension

let fileName2 = "automation_test.pdf";

console.log(fileName2.slice(0,fileName2.lastIndexOf(".")));   // automation_test


// Practice

let email1 = "  PRAJAKTA.KAWADE@GMAIL.COM  ";

// Expected output:
// Username: prajakta.kawade
// Domain: gmail.com

email1= email1.trim();
email1= email1.toLowerCase();

let username= email1.slice(0,email1.lastIndexOf("@"));
let domain= email1.slice(email1.indexOf("@")+1);

console.log(username,domain);

// mask the email id

let email2 = "prajakta@gmail.com";
let emailPart1 = email2.slice(1,email2.indexOf("@"));
let emailPart3="";
console.log(emailPart1);       // rajakta
let emailPart2= email2.slice(email2.indexOf("@"));

console.log(emailPart2);     // @gmail.com
for(let i=0; i<emailPart1.length; i++){
    //console.log(emailPart1.charAt);
   emailPart3 = emailPart3+"*";
}
console.log(emailPart1); // rajakta

console.log(email2.charAt(0)+emailPart3+emailPart2);       // p*******@gmail.com

// count each character

let text2 = "automationna";
let result2 = "";

for(let i = 0; i < text2.length; i++) {      

    if(!result2.includes(text2[i])) {          // include means its already processed.

         let count1 = 1; 

        for(let j = i+1; j < text2.length; j++) {

        if(text2[i] == text2[j]) {
            count1++;
       }
        
    }
    result2 = result2 + text2[i];

    console.log(text2[i], "=", count1);
    
    }        
    
}
console.log(result2);
/* a = 3
u = 1
t = 2
o = 2
m = 1
i = 1
n = 2
automin   */

// duplicate characters without nested loop

let text3 = "automationna";
let result3 = "";

for(let i=0; i < text3.length ; i++){
    if(text3.indexOf(text3[i])!= text3.lastIndexOf(text3[i])){
        if(!result3.includes(text3[i])){
            result3 = result3 + text3[i];
        }
    }
}
console.log(result3);    // aton