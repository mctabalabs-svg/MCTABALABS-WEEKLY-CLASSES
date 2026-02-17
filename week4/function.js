// DAY 1
function addition() {
    let resuits = 4 + 7;
    return resuits;
}

//console.log(addition());

function square(num) {
    let resuit = 3 * 4;
    return resuit;
}

//console.log(square());

function multiplication(number) {
    let resuit = number * number;
    return resuit;
}
let number=prompt("enter the number:")
//console.log(multiplication(number));


function sumoftwonumbers(x,y) {
    let resuit = x + y;
    return resuit;
}

// console.log(sumoftwonumbers(5,7));

// hoisting -> the function can be called before it appers in code

// function expression - annonymous function assigned to a variable
const hello = function (name) {
    return `hello ${name}`;
}

//console.log(hello("Rodah"));

// arrow function

const greet =  () => {
    return "Hey!"
}

//console.log(greet());

const squarenumber = (number) => {
    return number * number;
}
//console.log(squarenumber(number));

// Function to get even numbers using if statement
function getEvenNumbers(list) {
  let evens = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i] % 2 === 0) {   
      evens.push(list[i]);     
    }
  }
  return evens;
}

//console.log(getEvenNumbers([40,23,78,90,56])); 

const multiples = (numbers) => {
    let multipleslist = [];
    for(let num = 0;num < number.length;num++)
        if (number[num] % 5 ===0){
            multipleslist.push(number[num]);
        }
        return multipleslist;
}

console.log(multiples(numbers));


