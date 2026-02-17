// Callback
// synchronous - asynchronous

console.log("this will execute immeditely")
setTimeout(() => {
    console.log("this will execute after 3 second")
})


function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Alice", sayGoodbye);

