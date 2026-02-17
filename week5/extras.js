const sum = (a, b, c) => a + b + c;
console.log(sum(5, 7, 2)); 

// lexical this
// this
function Timer() {
    this.seconds = 0;
    setInterval(() => {
        this.seconds++;
        console.log("Hello")
    },4000);
}
 let test = new Timer();
 console.log(test);

 //when not to use arrow functions

 // parameters
 function greet(name ="Rodah kem") {
    return`Hello,${name}`;
 };

 console.log(greet());

 ///rest parameters
 let numbers = [1,2,3,4,5,6,7,8,9];
 function sumAll(...numbers) {
    let total = 0
    for (let num = 0; num < numbers.length; num++){
        total+= numbers[num];
    }
    console.log(total);
 }
 sumAll(numbers)

 // spread operators
 const ages = [1,5,7,9];

 sumAll(...ages);
 console.log(...ages, 89,78,67,56);

 const defaults = { a: 1, b: 2 };
const overrides = { b: 42, c: 3 };
// result: { a: 1, b: 42, c: 3 }

console.log(mergeOptions(defaults,overrides));