//var, let, const => variables, don't use var
//var => globally scoped, can cause conflicts
//always use const, unless you need to change the value, if so => use let

let age = 19;
console.log(age);

const permAge = 30; //can't be changed, has to be initialized
const rating = 4.5; //type is always a number, not a float or int
const y = undefined;

const userName = "Johnny";

//Concatenation --
console.log("My age is " + age); //old way; sucks
console.log(`My name is ${userName} and I am ${age} years old! 😝`); //template strings; use backticks

//Strings --
console.log(userName.toUpperCase());
console.log(userName.substring(0, 3).toUpperCase());
console.log(userName.split(""));

const fruits = "apple, strawberry, orange";
const fruitArray = fruits.split(", "); //creates an array from the string
console.log(fruitArray);

//Arrays
const numbers = [1, 2, 3, 4, 5];
numbers[5] = 6;
numbers.push(8); //append to end
numbers.unshift(0); //append to beginning
numbers.pop(); // remove last one

console.log(Array.isArray(numbers)); //check if is array
console.log(numbers);

//Object literals; key,value pairs, like a dictionary

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  hobbies: ["music", "movies", "sports"],
  address: {
    street: "50 main st",
    city: "Boston",
    state: "MA"
  }
};

console.log(person);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

const {
  firstName,
  lastName,
  address: { city, state }
} = person; //destructuring; pull stuff out

console.log(city, state);

person.email = "john@doe.com"; //can add properties as well
console.log(person);

//Array of objects;

const todos = [
  {
    id: 1,
    text: "Take out trash",
    isCompleted: true
  },
  {
    id: 2,
    text: "Meet with boss",
    isCompleted: true
  },
  {
    id: 3,
    text: "Dentist appointment",
    isCompleted: false
  }
];

console.log(todos);
console.log(todos[1].text);

//JSON format => used for servers, apis, accessing data, etc...
const todoJSON = JSON.stringify(todos); //turns it into json string
console.log(todoJSON);

//Loops

//For
for (let i = 0; i <= 10; i++) {
  console.log(`For loop number: ${i}`);
}

//While; you set the variable outside of the loop
let xyz = 0;
while (xyz < 10) {
  console.log(`While Loop Number: ${xyz}`);
  xyz++;
}

//loop through arrays
//forOf
for (const todo of todos) {
  console.log(todo);
}

//High order arrays; forEach, map, filter

todos.forEach(function(todo) {
  //loop through each
  console.log(todo.text);
});

const todoText = todos.map(function(todo) {
  //map creates new array from array
  return todo.text;
});
console.log(todoText);

const completedTodos = todos
  .filter(function(todo) {
    //filter through arrays
    return todo.isCompleted === true;
  })
  .map(function(todo) {
    //can add multiple functions; powerful
    return todo.text;
  });

console.log(completedTodos);

//Conditionals
//== doesn't match data type
//=== matches data type

const variableX = "10";

if (variableX == 10) {
  console.log("x is 10");
} else if (variableX > 10) {
  console.log("x is greater than 10");
} else {
  console.log("x is less than 10");
}

//ternary operator; short if statement

const ternX = 9;
const color = ternX > 10 ? "red" : "blue";
console.log(color);

//switches
switch (color) {
  case "red":
    console.log("color is red");
    break;
  case "blue":
    console.log("color is blue");
    break;
  default:
    console.log("color is not red or blue");
    break;
}

//Functions
function addNums(num1 = 1, num2 = 2) {
  //default values
  return num1 + num2;
}

console.log(addNums(5, 5));

//different way
const addNumbers = (num1, num2) => num1 + num2;
console.log(addNumbers(4, 9));

//Object oriented programming --

//Constructor function
function Person(firstName, lastName, dob) {
  //set to properties of the object itself; like "self"
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob); //can call methods

  //can create function in constructor, or use an outside prototype
  this.getAgeDay = function() {
    return this.dob.getDay();
  };
}

//prototypes - like a hidden object inside a constructor to save other code
Person.prototype.getBirthYear = function() {
  return this.dob.getFullYear();
};

Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

//Instantiate
//only with constructor patterns do you have to use "new".
const person1 = new Person("John", "Doe", "09-8-2000");
const person2 = new Person("Mary", "Poppins", "07-05-2002");

console.log(person1);
console.log(person2.getBirthYear()); //prototype
console.log(person2.getFullName()); //normal method

//Class - ES6, but basically does the same thing. cleanest way to do it

class PersonClass {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  getBirthYear() {
    return this.dob.getFullYear();
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const personClass1 = new PersonClass("Smith", "Doe", "09-8-2000");
const personClass2 = new PersonClass("Bill", "Poppins", "07-05-2002");

console.log(personClass1);
console.log(personClass2.getBirthYear());
console.log(personClass2.getFullName());
