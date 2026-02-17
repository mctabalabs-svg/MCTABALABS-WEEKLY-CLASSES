//const number = 1;

//switch (number) {
   // case 2:
      //  console.log("you're number one");
       // break;
    //case 5:
        //console.log("something...");
        //break;
    //default:
      //  console.log("the number is original")
//}

// while loop
//let age = 20;
//while (age > 2) {
    //console.log("you can go to high school!")
    //age++;
//}

// prime numbers
const primeNum = (num) => {
    if (num < 2)
        return false;
    for (let r = 2; r <= Math.sqrt(num); r++){
        if(num % r === 0)
            return false;
    }
    return true;
};
// largest prime number
let largestPrime = 2;
for (let r = 2; r <= 1000; r++) {
    if (primeNum(r)) {
        largestPrime = r
    }
}

console.log(`enter the largest prime number: ${largestPrime}`);

let sum = 0;
let num = 1;

//while loop
while (num <= largestPrime) {
    sum += num;
    num++;
}

console.log(`sum until largest prime: ${sum}`)

//The Scope Chain in Action
const globalVar = '🌎';

function outer() {
  const outerVar = '🌟';

  function inner() {
    const innerVar = '🚀';
    console.log(innerVar);   
    console.log(outerVar);   
    console.log(globalVar);  
  }

  inner();
}

outer();

// closure
function makeGreeter(name) {
  const greeting = 'Hello';

  return function() {
    console.log(`${greeting}, ${name}!`);
  };
}

const greetAlice = makeGreeter('Alice');
greetAlice(); 

//Dta Privacy (Module Pattern)
function createCounter() {
  let count = 0; 

  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    getValue() {
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.increment()); 
console.log(counter.increment()); 
console.log(counter.getValue());  
// counter.count is undefined — truly private!
//Function Factories & Partial Application
function multiply(a) {
  return function(b) {
    return a * b;
  };
}

const double = multiply(2);
console.log(double(5)); 

// With ES6 Arrow Syntax
const multiplyArrow = a => b => a * b;
const triple = multiplyArrow(3);
console.log(triple(4));
// Memory Considerations
 let hugeDataHandler = createHandler(largeData);
// … later …
hugeDataHandler = null; 