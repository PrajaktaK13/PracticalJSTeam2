for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= i; j++) {
        console.log("*");
    }
}


for (let i = 1 ; i<=5 ;i++){
    let row = "";
         for (let j = 1; j <= i ; j++){
        row= row +"*" + " ";
     }
     console.log(row);
}
// Ex:3

for(let i=5 ; i>=1; i--){
    let row= "";

    //spaces
    for(let j=1; j<=6-i; j++){
        row= row+" ";
    }

    //stars
    for(let j=1; j<=i; j++){
        row= row+ "* ";
    }
    console.log(row);

}

      
// Ex:4
         
for (let i = 1; i <= 3; i++) {

    let row = "";

    // spaces
    for (let j = 1; j <= 4 - i; j++) {
        row = row + " ";
    }

    // stars
    for (let j = 1; j <= i; j++) {
        row = row + "* ";
    }

    console.log(row);
}
for(let i = 2; i >= 1; i--){
    let row="";

    // spaces
    for (let j = 1; j <= 4 - i; j++) {
        row = row + " ";
    }

    //stars
    for(let j = 1 ; j<=i; j++){
        row= row +"* ";
    }
     console.log(row);
}

// ex: 5: print alphabets in pyaramid

for(let i=1; i<=3; i++){
    let row=""; 
    let k=1;       
    // spaces
    for(let j=1; j<4-i; j++){
        row = row + " ";
    }
    for(let j=1; j<=i; j++){
        row = row + String.fromCharCode(64 + k) + " ";
         k++;
    }
    console.log(row);
   
}

// ex6: print numbers in pyramid

let count=1;
for(let i= 1; i<=3; i++){
    row= "";
    let count=1;

    // spaces
    for(let j=1; j<=4-i; j++){
        row= row+ " ";
    }
    for(let j=1; j<=i; j++){
        row= row + count + " ";
        count++;
    }
    console.log(row);
}

// ex: 7: print characters in oppsite pyramid

let k=1;
for(let i = 5; i>=0; i--){
    let row="";
    //spaces
    for(let j=1; j<=i; j++){
        row= row + String.fromCharCode(64 + k);
        k++;
    }
    console.log(row);
}

// print alphabets in reverse

let l=5;
for(let i = 5; i>=0; i--){
    let row="";
    l=l+5;
    //spaces
    for(let j=1; j<=i; j++){
        row= row + String.fromCharCode(64 + l);
        l++;
    }
    console.log(row);
}





 

