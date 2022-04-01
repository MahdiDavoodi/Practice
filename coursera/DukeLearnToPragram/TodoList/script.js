function addTask() {
  var input = document.getElementById("input");
  var newTask = input.value;

  if (newTask != "") {
    var item = document.createElement("li");
    item.innerHTML =
      '<input type="button" class="remove" onclick="remove(this.parentNode)" value="Done" /> ' +
      newTask;

    document.getElementById("tasks").appendChild(item);

    input.value = "";
    input.placeholder = "Add another one...";
  }
}

function remove(item) {
  if (confirm("You are going to remove this item from your list"))
    item.remove();
}

function clearTable() {
  if (confirm("You are going to clear the table!"))
    document.getElementById("tasks").innerHTML = "";
}
