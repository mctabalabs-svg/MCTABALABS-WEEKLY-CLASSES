// variables -> global ,local
let  full_name = "Rodah";//global variable

function greet() {
    let number = 90;
    console.log(full_name);
    function bye(){
        console.log(number);
    }
    bye();
}

greet();
  

function vote () {
   let age =60; 
   return function(){
    console.log(age);
   }
}

const Ken = vote();
Ken();


function makeCounter() {
    let count = 0;
    return function () {
        count+= 1;
        return count;
    }
}

//console.log(ctr()); 
//console.log(ctr()); 

function once(fn) {
    let called = false;
    let result;
    return function() {
        if (!called) {
            result = fn.apply(this);
            called = true;
        }
        return result;
    };
}
function greet() { console.log('Hello!'); return 'done'; }
const greetOnce = once(greet);
greetOnce(); 
greetOnce(); 

// callback
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Alice", sayGoodbye);

