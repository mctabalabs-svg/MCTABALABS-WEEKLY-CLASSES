//rest parameters allows a function to accept an indefinate number of argument as an array.
//defined using ...

//function name(age,cohort="software dev",...parameter){

//}
//function that can summ any number of numbers




//spread operators -> allows us to copy all/part of an existing array/object into another array/object.
//const meanOne = [50, 70, 60, 40];
//const meanTwo = [100, 90, 39, 60];

//const meanCombo = [...meanOne.slice(2), ...meanTwo.slice(0,2)];

//console.log(meanCombo);

//const car = {
 //   brand:"Tesla",
  //  model:"Cs23",
   // colour:"white",
//}

//const car_more ={
//    model: "Maccedes",
 //   year: "2025",
  //  colour: "black",
//}
//const car_comb ={...car,year:car_more.year};
//console.log(car_comb);

//const nums = [10,19,29,30];

//console.log(Math.max(...nums));
//const more = [...nums, 99,11,200];
// console.log(more);

//const food = {
//   fruit: ["apple", "mango","orange"],
//  vegetables: ["spinach", "cabbage","carrot"],
// snacks: ["samsour","smokies","chips"],
//};
//
//
//
//console.log)healthy


function findMax(defaultValue = 0, ...numbers) {
  // Spread the rest parameter into Math.max
  const maxValue = Math.max(defaultValue, ...numbers);
  return maxValue;
}

console.log(findMax(10, 5, 20, 3)); 

//console.log(findMax(undefined, 7, 2)); 


//console.log(findMax()); 
