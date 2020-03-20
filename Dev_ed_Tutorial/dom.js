//use document to access html
const text = document.querySelector(".title");
const changeColor = document.querySelector(".change-color");

//text.style.color = "red";
//text.style.backgroundColor = "Black";

//access all the classes the object has
//text.classList.add("change");

changeColor.addEventListener("click", function() {
  text.classList.add("change");
  text.classList.toggle("change"); //toggle changes
});

//get multiple elements
const userListLinks = document.querySelectorAll(".name-list li");
const userList = document.querySelector(".name-list");
const listInput = document.querySelector(".list-input");
const addListBtn = document.querySelector(".add-list-button");

console.log(userListLinks);

for (user of userListLinks) {
  user.addEventListener("click", function() {
    console.log(this);
    this.style.color = "red";
  });
}

//add new list button
addListBtn.addEventListener("click", function() {
  const newLi = document.createElement("LI");
  const licontent = document.createTextNode(listInput.value);

  newLi.appendChild(licontent);
  userList.appendChild(newLi);
});
