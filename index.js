var elUlList = document.getElementById("uList");
var btn = document.getElementById("btn");
const elInput = document.getElementById("input");
const footer = document.querySelector("footer");
const message = document.getElementById("message");
// const elements = document.getElementsByTagName("li");
const elCounter = document.getElementById("counter");



function createListItems() {
  var elements = document.getElementsByTagName("li");
  console.log(elements)
  var inputValue = elInput.value;
  var newLi = document.createElement("li");
  var input = document.createElement("input");
  input.type = "checkbox";
  var newText = document.createTextNode(inputValue);
  newLi.appendChild(input);
  newLi.appendChild(newText);
  elUlList.appendChild(newLi);
  var array = Array.from(elements);


    // elements = unique
    console.log(elements)

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

const strikeOutCheckedItem = ({target}) => {
  if(target.matches("input[type=checkbox]")) {
    target.closest("li").classList.toggle("lineThrough", target.checked)
  }
}

elUlList.addEventListener("click", strikeOutCheckedItem, false)



// checkboxes.forEach(function(checkbox) {
//   checkbox.addEventListener('change', function() {
//     enabledSettings =
//       Array.from(checkboxes) // Convert checkboxes to an array to use filter and map.
//       .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
//       .map(i => i.value) // Use Array.map to extract only the checkbox values from the array of objects.
//
//     console.log(enabledSettings)
//   })
// });







var date = new Date().toLocaleDateString("en-US")

footer.innerHTML = date
console.log(date)
