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

for(let i=1; i<=5; i++){
    let row= "";
    // spaces
    for(let j=1; j<6-i; j++){
        row= row + " ";
    }
    // stars
    for(let j=1; j<=i; j++){
        row= row +"* ";
    }
    console.log(row);
}

// Ex4:
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
for(let i=2; i<=5; i++){
    let row= "";
    // spaces
    for(let j=1; j<7-i; j++){
        row= row + " ";
    }
    // stars
    for(let j=1; j<=i; j++){
        row= row +"* ";
    }
    console.log(row);
}
      
// Ex:5
         
for (let i = 1; i <= 5; i++) {

    let row = "";

    // spaces
    for (let j = 1; j <= 6 - i; j++) {
        row = row + " ";
    }

    // stars
    for (let j = 1; j <= i; j++) {
        row = row + "* ";
    }

    console.log(row);
}
for(let i = 4; i >= 1; i--){
    let row="";

    // spaces
    for (let j = 1; j <= 6 - i; j++) {
        row = row + " ";
    }

    //stars
    for(let j = 1 ; j<=i; j++){
        row= row +"* ";
    }
     console.log(row);
}

// ex: 6: print alphabets in pyaramid

for(let i=1; i<=5; i++){
    let row=""; 
    let k=1;       
    // spaces
    for(let j=1; j<6-i; j++){
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
    //let count=1;

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

// Print numbers in reverse order

let count1=0;
for(let i=5; i>=1; i--){
    count1= count1+i;
    let l=count1;
    let row = "";

    for(let j=1; j<=i; j++){
        row= row + l;
        l--;
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
let l=0;
for(let i = 5; i>=1; i--){    
    l=l+i;
    let c=l;
    let row="";   
    //alphabets
    for(let j=1; j<=i; j++){
        row= row + String.fromCharCode(64 + c);
        c--;
    }
    console.log(row);
    
}

// print aphabets in reverse and increasing order

let m=6;
for(let i = 1; i<=6; i++){    
    let row="";   
    //alphabets
    for(let j=1; j<=i; j++){
        row= row + String.fromCharCode(64 + m);
        
    }
    console.log(row);
    m--;     
}


// print alphabets in pyramid
let g=1;
for(let i=1; i<=5; i++){
    let row="";     
    // spaces
    for(let j=1; j<=6-i; j++){
        row= row + " ";
    }
    // alphabets
    for(let j=1; j<=i; j++){
        row= row + String.fromCharCode(64 + g) + " ";
        g++;
    }
    console.log(row);
}
for(let i=4; i>=1; i--){
    row="";
    // spaces
    for(let j=1; j<=6-i; j++){
        row= row + " ";
    }
    // alphabets
    for(let j=1; j<=i; j++){
        row= row + String.fromCharCode(64 + g) + " ";
        g++;
    }
    console.log(row);
}

// Mixed pattern: alphabets and stars
let t=1;
for(let i=1; i<=5; i++){
    let row= "";
    for(let j=1; j<=i; j++){

        if(j==1){
            row= row + String.fromCharCode(64 + t);
            t++;
        }
        else{
            row=row+"*";
        }
    }
    console.log(row);
}

// Mixed pattern2


for(let i=1; i<=6; i++){
    let row="";
    let h=1;
    for(let j=1; j<=i; j++){
        if (i%2 != 0){
            row= row+"*";
        }else{
            row= row + String.fromCharCode(64 + h);
            h++;
        }
    }
    console.log(row);
}

// hollow rectangle

for(let i=1; i<=6; i++){

    let row = "";

    for(let j=1; j<=6; j++){

        if(i==1 || i==6){
            row = row + "*";

        }else  {
            if(j == 1 || j == 6){
                row = row + "*";
            }
            else {
                row = row + " ";
            }

        }
            
        }
        console.log(row);
    }

    // hollow traiangle

    for(let i=1; i<=6; i++){
        let row= "";
        for (let j=1; j<=6; j++){
            if(i==6){
                row=row + "*";
            }
            else{
                if(j==1 || j==i){
                    row = row + "*";
                }
                else{
                    row = row +" ";
                }
            }
        }
        console.log(row);
    }

    // hollow traingle in reverse pattern
    for(let i=6; i>=1; i--){
        let row= "";
        for (let j=1; j<=6; j++){
            if(i==6){
                row=row + "*";
            }
            else{
                if(j==1 || j==i){
                    row = row + "*";
                }
                else{
                    row = row +" ";
                }
            }
        }
        console.log(row);
    }






 

