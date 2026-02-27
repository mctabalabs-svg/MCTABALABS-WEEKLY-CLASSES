// constructors
//const person ={
 //   name: "Rodah",
 //   age: 20,
 //   role: Developer
//};

//const person1 ={
 //   name: "Kemuma",
  //  age: 18,
  //  role: Doctor
//};

//const person2 ={
 //   name: "Ogeto",
   // age: 30,
   // role: CEO
//};

//Aconstructor function is a blueprint that helps us create
//many object with the same structure but different value without repeating the code

//function Person (name, age, role) {
//    this.name = name               //this means "the object is currently using this code" this,name-----person.name 
//    this.age = age
//    this.role = role

//    this.introduce = function () {
//        return "Hey, l am" + this.name;
//    }
//}

    
//const person1 = new Person ("Rodah", 20 , "Developer");

//console.log(person1.introduce())


//prototype--- an object that other object can inherit from --- is where shared method lives


function Person (name, role) {
    this.name = name;              
    this.role = role;
}    
Person.prototype.greet = function(){
    return "Hi l am " + this.name;
}
const pl = new Person ("Beth", 20);
console.log(pl.greet())



//const person1 = new Person ("Rodah","20","Developer");
//const person2 = new Person ("Kemuma","18","Doctor");
//const person3 = new Person ("Ogeto","30","CEO");
//const person4 = new Person ("Freddy","21","Manager");

//console.log(person3);

