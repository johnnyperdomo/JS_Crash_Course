//Dom - way to communicate with other files such as html elements

//Selectors

//Single element
console.log(document.getElementById("my-form"));
console.log(document.querySelector("h1"));

//Multiple
console.log(document.querySelectorAll(".item")); //nodelist; like array

const items = document.querySelectorAll(".item");
items.forEach(item => console.log(item));

const ul = document.querySelector(".items");

//ul.remove(); //remove list elements
//ul.lastElementChild.remove(); //remove last list element
ul.firstElementChild.textContent = "Hello"; //change text of first list element
ul.children[1].innerHTML = "Brad";
ul.lastElementChild.innerHTML = "<h1>Bold</h1>"; //change html text

const btn = document.querySelector(".btn");
btn.style.background = "red"; //change color css

// btn.addEventListener("mouseover", e => {
//   //event listener, get the type of event, create a function
//   e.preventDefault();
//   console.log(e);
//   document.querySelector("#my-form").style.background = "#ccc";
//   document.querySelector("body").classList.add("bg-dark"); //css style

//   document.querySelector(".items").lastElementChild.innerHTML =
//     "<h1>Hello</h1>";
// });

// # is for ids
//. is for classes
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  console.log(nameInput.value);

  if (nameInput.value == "" || emailInput.value == "") {
    msg.classList.add("error"); //add css style from the style class
    msg.innerHTML = "Please enter all fields";

    setTimeout(() => msg.remove(), 3000); //remove error message after 3 seconds
  } else {
    const li = document.createElement("li"); //create element and insert into dom
    li.appendChild(
      document.createTextNode(`${nameInput.value}: ${emailInput.value}`)
    );

    userList.appendChild(li);

    //clear fields

    nameInput.value = "";
    emailInput.value = "";
  }
}
