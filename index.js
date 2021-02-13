var elUlList = document.getElementById("uList");
var btn = document.getElementById("btn");
const elInput = document.getElementById("input");


console.log(elUlList)

function createListItems() {

  var inputValue = elInput.value;
  var newLi = document.createElement("li");
  var newText = document.createTextNode(inputValue);
  newLi.appendChild(newText);
  elUlList.appendChild(newLi);
  inputValue = ""
  var elCounter = document.getElementById("counter");
  var counter = document.querySelectorAll("li");
  elCounter.innerHTML = counter.length;
}

function emptyField() {
  this.value = "";
}

btn.addEventListener("click", createListItems, false)
elInput.addEventListener("mouseover", emptyField, false)
