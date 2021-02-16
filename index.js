var elUlList = document.getElementById("uList");
var btn = document.getElementById("btn");
const elInput = document.getElementById("input");
const footer = document.querySelector("footer");
const message = document.getElementById("message");

function createListItems() {

  var inputValue = elInput.value;
  var newLi = document.createElement("li");
  var newText = document.createTextNode(inputValue);
  newLi.appendChild(newText);
  elUlList.appendChild(newLi);
  if(inputValue === "") {
    message.innerHTML = "field can't be left empty"

  }
  inputValue = ""
  var elCounter = document.getElementById("counter");
  var counter = document.querySelectorAll("li");
  elCounter.innerHTML = counter.length;
}

function emptyField() {
  this.value = "";
}

elUlList.addEventListener("dblclick", function(e){
  var target = e.target;
  var parent = target.parentNode;
  parent.removeChild(target)
});

elUlList.addEventListener("click", function(e){
  var child = e.target;
  var container = child.parentNode;
  container.setAttribute("class", "lineThrough");

})

btn.addEventListener("click", createListItems, false)
elInput.addEventListener("mouseover", emptyField, false)

var date = new Date().toLocaleDateString("en-US")

footer.innerHTML = date
console.log(date)
