var elUlList = document.getElementById("uList");
var btn = document.getElementById("btn");
const elInput = document.getElementById("input");
const footer = document.querySelector("footer");
const message = document.getElementById("message");
const elements = document.getElementsByTagName("li");
const elCounter = document.getElementById("counter");



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

  elCounter.innerHTML =+ elements.length;
}

btn.addEventListener("click", createListItems, false);

elInput.addEventListener("keyup", function(e) {
  if(e.keyCode === 13) {
    e.preventDefault();
    btn.click()
  }
})

elInput.addEventListener("mouseover", emptyField, false)

function emptyField() {
  this.value = "";
}

elUlList.addEventListener("dblclick", function(e){
  var target = e.target;
  var parent = target.parentNode;
  alert("are you sure you want to remove this item from the list")
  parent.removeChild(target)
  elCounter.innerHTML =+ elements.length;
});

elUlList.addEventListener("click", function(e){
  var elements = document.getElementsByTagName("li");
  var child = e.target;
  if(elements.length >= 1){
    var elCounter = document.getElementById("counter");
    for(var i = 0; i < elements.length; i++) {
      elements[i] === child ? elements[i].classList.toggle("lineThrough"):null;
  }
}
})


var date = new Date().toLocaleDateString("en-US")

footer.innerHTML = date
console.log(date)
