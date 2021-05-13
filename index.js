var tasksTodo = document.getElementById("uList");
var btn = document.getElementById("btn");
const elInput = document.getElementById("input");
const footer = document.querySelector("footer");
const message = document.getElementById("message");
const elCounter = document.getElementById("counter");
const taskCompleted = document.getElementById("taskCompleted");
var elements = document.getElementsByTagName("li");
var input = document.getElementsByTagName("input")

function createTask(input) {
  let title = elInput.value;
  if(!title) return false;
  let task = document.createElement("li");
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  task.appendChild(checkbox);
  task.appendChild(document.createTextNode(title));


  checkbox.addEventListener("change", function(e) {
    if (checkbox.checked) {
      completedTask(task);
    } else {
      undoTask(task)
    }
  });

  tasksTodo.appendChild(task);

  task.addEventListener("dblclick", e => {checkbox.click()});
  title = "";
}

  function completedTask(task) {
    task.classList.add("lineThrough");
    taskCompleted.appendChild(task);
  }

  function undoTask(task) {
    task.classList.remove("lineThrough");
    tasksTodo.appendChild(task);
  }

  btn.addEventListener("click", e=>{createTask(elInput)}, false);
  elInput.addEventListener("keyup", function(e) {
    if(e.keyCode === 13) {
      e.preventDefault();
      btn.click()
    }
  });

var date = new Date().toLocaleDateString("en-US")

footer.innerHTML = date
