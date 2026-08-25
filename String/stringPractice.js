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
for(let i=0 ; i<str4.length; i++){
    ecount=1;      
    for(let j=i+1 ; j<str4.length; j++){                 
        if(str4[i]===str4[j]){
             ecount++;
        }         
    }
    console.log(str4[i], ecount);
}