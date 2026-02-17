const name ="Rodah";
let age =18;
const nationality = "Kenyan";
const hobby ="playing badminton";

// template srings
console.log(`My name is ${name} l'm ${age}years old l like ${hobby} l'm a ${nationality}! `);

//datatype
let isRich = false; //boolean

let resuit =name + age;
console.log(typeof(age));

let number;
console.log(number);

let num1 = 90;
let num2 =90;

// comparison operators
console.log(num1 === num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <=num2);


// logical operators
console.log(nationality ==="Kenyan" && age >= 18);
console.log(nationality ==="Kenyan" || age >= 18);

// control structures
if (num1 === num2){
    console.log("Hello,Javascript!")
} else {
    console.log("Hello ,World!");
}

let isstudent = true;
if (isstudent){
    console.log("Welcome to Mctaba Labs");
} else if (isStudent){
    console.log("Register for the next cohort");
} else {
    console.log("visit to website")
}



// example
let score = 15;

if (score > 12) {
    console.log("you have passed")
} else if (score < 12) {
    console.log("you have not passed")
}else{
    console.log("you have met requirement")
}// Function to check if a number is odd or even
function checkOddEven(num) {
    if (num % 2 === 0) {
        console.log(num + " is even.");
    } else {
        console.log(num + " is odd.");
    }
}

// Example usage:
let exnumber = "3"; // You can change this number
checkOddEven(number);


  if (score >= 80 && score <= 100) {
    console.log("Grade: A");
  } else if (score >= 70) {
    console.log("Grade: B");
  } else if (score >= 60) {
    console.log("Grade: C");
  } else if (score >= 50) {
    console.log("Grade: D");
  } else if (score >= 0) {
    console.log("Grade: E");
  } else {
    console.log("Score out of range");
  }

// Example usage:
console.log("A");  // "Grade:A"
console.log("B");  // "Grade: B"
console.log("C");  // "Grade: C"
console.log("D");  // "Grade: D"
console.log("E");  // "Grade: E"
console.log("Invalid score"); // "Invalid score"

let primenumber =(prompt("Enter a number:"), 10)

let isPrime = true ;
if (isPrime) {
  console.log("is a prime number");
} else if (isPrime){
  console.log("not a prime number");
}

  