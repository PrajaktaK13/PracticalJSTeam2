//date
let today= new Date();
console.log(today);        // print current date and time.

console.log(
    today.toLocaleString("en-EN", {
    timeZone: "Asia/kolkata"
})
);

// console.log(today.getFullYear());   // returns current year
// console.log(today.getMonth()+1);    // returns current month
// console.log(today.getDate());       // returns current date
// console.log(today.getDay());        // returns current day
// console.log(today.getHours());      // returns timimg hour
// console.log(today.getMinutes());    // returns timing minutes
// console.log(today.getSeconds());    // returns timing seconds

let date = new Date("2026-08-17");   // creates specific date
console.log(date);

//let date1= new Date();
date1.setFullYear(2030);
// console.log(date1);
// date1.setMonth(4);
// console.log(date1);
// date1.setDate(1);
console.log(date1);


let currDate = new Date();
console.log(currDate);
// console.log(currDate.getDate()-10);   // returns only date(dd) 10 days ago (avoid negative date)
// console.log(currDate.setDate(currDate.getDate()-10));
// console.log(currDate);  
// currDate.setDate(currDate.getDate()-10);
// console.log(currDate);                // returns full date(yyyy-mm-dd and time) 10 days ago
            

console.log(currDate.getMonth()-5);    // returns index of current month-5
console.log(currDate.setMonth(currDate.getMonth()-5));
console.log(currDate);                 // returns full date 5 months ago


// console.log(currDate.getFullYear()-5); // returns only year, 5 years ago
// currDate.setFullYear(currDate.getFullYear()-5);
// console.log(currDate);                  // returns full date 5 years ago


let date1 = new Date("2026-08-10");
let date2 = new Date("2026-08-20");

// // Check which date is earlier
// if(date1<date2){
//     console.log("date1 is earlier");
// }else{
//     console.log("date2 is earlier");
// }

// //check the difference between dates in number of days

let difference= date2.getTime()- date1.getTime();
console.log(date1.getTime());
console.log(difference);                     //return diffrence in timestamp(millisecond)
let days= difference/ (1000 * 60 * 60 * 24); // convert timestamp(milliseconds) in to days
console.log("Days: ",days);


// //Check whether two dates are equal
// let dateX = new Date("2026-08-01");
// let dateY = new Date("2026-08-01");

// if(dateX.getTime()===dateY.getTime()){
//     console.log("Both dates are equal");    
// }else{
//     console.log("Both dates are not equal");
// }

// let newwDate = new Date();
// console.log(newwDate.toLocaleString());     //display the date and time in a locale-friendly format.
// console.log(newwDate.toString());           // display proper date: day, month name, date, years and time