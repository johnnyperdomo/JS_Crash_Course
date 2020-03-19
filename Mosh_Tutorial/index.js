console.log("Wassaaaaa World");

let name = "Johnny";
console.log(name);

//let and var are mutable, both are variables; but 'let' is better, because let is 'block scoped'. Always use 'let' over 'var'.
//var => function-scope
//let,const => block-scoped

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

//Constants - cant change, permanent value
const permanentRate = 1.4;
console.log(permanentRate);

//Types:
let stringName = "JohnJohn"; // String literal
let age = 30; //number literal
let isApproved = false; //Boolean Literal
let firstName = undefined; //this is not common, but variables are undefined if not defined by default
let selectedFood = null; //explicitly make value null

let person = {
  name: "Billy Bob",
  age: 30
};
console.log(person);

person.name = "JamesBond";
console.log(person.name);
//or
let selectionProperty = "age";
person[selectionProperty] = 40;
console.log(person.age);

//Arrays
let selectedColors = ["red", "blue"];
selectedColors[2] = 1;
console.log(selectedColors);
console.log(selectedColors[0]); //should print red

//Functions

function greetWithName(firstName, lastName) {
  console.log("Hey " + firstName + " " + lastName + ", how are you doing?");
}

greetWithName("Ryan", "Lopez");
greetWithName("Mary"); //didn't pass in 2nd argument, logs undefined

function square(number) {
  return number * number;
}

console.log(square(2));
