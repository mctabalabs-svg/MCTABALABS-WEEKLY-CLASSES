//inheritance - a mechanism where one object(child) acquires properties and methods
//from another object (parent) through the prototype chain


function person (name,age){
    this.name=name;
    this.age=age;
}
function Animal(name){
    this.name= name;
}

Animal.prototype.speak=function(){
    return `${this.name} makes asound`
}

function Dog(name, breed){
    Animal.call(this,name)
    this.breed=breed;
}

Dog.prototype=Object.create(Animal.prototype)
Dog.prototype.constructor=Dog

const dl=new Dog(`sally`,`beco`)

console.log(dl.speak())



class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){
        return`Hi, l am ${this.name}`
    }
}

class student extends person{
    constructor(name,admissionNumber,stream){
        super(name,age);
        this.admissionNumber=admissionNumber;
        this.stream=stream;
    }
    study(){
        return`${this.name} from ${this.stream} strea is studyig`
    }
}

const $3 = new student("bob",20,"adm001","green")

console.log($3.study());
console.log($3.greet());