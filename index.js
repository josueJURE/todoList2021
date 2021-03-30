var elUlList = document.getElementById("uList");
var btn = document.getElementById("btn");
const elInput = document.getElementById("input");
const footer = document.querySelector("footer");
const message = document.getElementById("message");
// const elements = document.getElementsByTagName("li");
const elCounter = document.getElementById("counter");



function createListItems() {
  var elements = document.getElementsByTagName("li");
  var inputValue = elInput.value;
  var newLi = document.createElement("li");
  var input = document.createElement("input");
  input.type = "checkbox";
  var newText = document.createTextNode(inputValue);
  newLi.appendChild(input);
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

function strikeOutElement(e) {
  var target = e.target;
  if(target.matches("input[type=checkbox]")){
    target.closest("li").classList.toggle("lineThrough", target.checked)
  }
}

elUlList.addEventListener("click", strikeOutCheckedItem, false)


var date = new Date().toLocaleDateString("en-US")

footer.innerHTML = date
console.log(date)
