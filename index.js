var elUlList = document.getElementById("uList");
var btn = document.getElementById("btn");
const elInput = document.getElementById("input");
const footer = document.querySelector("footer");
const message = document.getElementById("message");
const elCounter = document.getElementById("counter");
const taskCompleted = document.getElementById("taskCompleted");
var elements = document.getElementsByTagName("li");
var input = document.getElementsByTagName("input")

function createListItems() {
  var inputValue = elInput.value;
  if(inputValue === "" || inputValue === null) return
  // var elements = document.getElementsByTagName("li");
  var newLi = document.createElement("li");
  newLi.id = Date.now().toString();
  var input = document.createElement("input");
  input.type = "checkbox";
  input.name = "to-do-input";
  // var toDoInput = document.getElementsByTagName("to-do-input")
  var newText = document.createTextNode(inputValue);
  newLi.appendChild(input);
  newLi.appendChild(newText);
  elUlList.appendChild(newLi);
  elCounter.innerHTML =+ elements.length;

  var toDoInput = document.getElementsByTagName("to-do-input");

  for(var i = 0; i < toDoInput.length; i++) {
    toDoInput[i].addEventListener("change", function(e) {
      if(e.target.checked == true) {
        e.target.parentNode.remove();
      }
    })
  }



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

elUlList.addEventListener("change", function(e){
  var target = e.target;
  var parent = target.parentNode;
  console.log(parent)
  console.log(target)

  alert("are you sure you want to remove this item to completed task");
  taskCompleted.appendChild(parent);

  elCounter.innerHTML =+ elements.length;
});


elUlList.addEventListener("click", strikeOutElement, false);


function strikeOutElement(e) {
  var target = e.target;
  if(target.matches("input[type=checkbox]")){
  target.closest("li").classList.toggle("lineThrough", target.checked);
  }
}

var date = new Date().toLocaleDateString("en-US")

footer.innerHTML = date
console.log(date)
