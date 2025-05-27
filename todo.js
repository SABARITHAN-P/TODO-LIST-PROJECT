document.getElementById("text").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    add_task();
  }
});

function add_task() {
  var input = document.getElementById("text");
  var taskText = input.value;

  if (taskText.trim() === "") return;

  // Create task container
  var taskDiv = document.createElement("div");
  taskDiv.className = "list-task";

  // Create checkbox
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "checkbox";

  checkbox.addEventListener("change", function () {
    saveTasksToLocalStorage();
  });

  // Create task paragraph
  var taskname = document.createElement("p");
  taskname.className = "task";
  taskname.textContent = taskText;

  // Create buttons container
  var buttonsDiv = document.createElement("div");
  buttonsDiv.className = "buttons-in-task";

  // Create edit button
  var editBtn = document.createElement("button");
  editBtn.className = "edit";
  editBtn.innerHTML = '<img class="edit-icon" src="todo icons/edit-icon.png">';
  editBtn.onclick = function () {
    edit_task(taskname);
  };

  // Create delete button
  var deleteBtn = document.createElement("button");
  deleteBtn.className = "delete";
  deleteBtn.innerHTML =
    '<img class="delete-icon" src="todo icons/delete-icon.png">';
  deleteBtn.onclick = function () {
    delete_task(taskDiv);
  };

  // Add buttons to buttonsDiv
  buttonsDiv.appendChild(editBtn);
  buttonsDiv.appendChild(deleteBtn);

  // Add all to taskDiv
  taskDiv.appendChild(checkbox);
  taskDiv.appendChild(taskname);
  taskDiv.appendChild(buttonsDiv);

  // Add to list
  var list = document.querySelector(".list-of-task");
  list.appendChild(taskDiv);

  // Clear input
  input.value = "";

  // Save to local storage
  saveTasksToLocalStorage();
}

function edit_task(taskname) {
  var newText = prompt("Edit your task:", taskname.textContent);
  if (newText !== null) {
    taskname.textContent = newText;
    saveTasksToLocalStorage();
  }
}

function delete_task(taskDiv) {
  taskDiv.remove();
  saveTasksToLocalStorage();
}

function all_task() {
  var allTasks = document.querySelectorAll(".list-task");
  allTasks.forEach(function (task) {
    task.style.display = "flex";
  });
}

function active_task() {
  var allTasks = document.querySelectorAll(".list-task");
  allTasks.forEach(function (task) {
    var checkbox = task.querySelector(".checkbox");
    if (checkbox.checked) {
      task.style.display = "none";
    } else {
      task.style.display = "flex";
    }
  });
}

function completed_task() {
  var allTasks = document.querySelectorAll(".list-task");
  allTasks.forEach(function (task) {
    var checkbox = task.querySelector(".checkbox");
    if (checkbox.checked) {
      task.style.display = "flex";
    } else {
      task.style.display = "none";
    }
  });
}

function saveTasksToLocalStorage() {
  var tasks = [];
  var allTasks = document.querySelectorAll(".list-task");
  allTasks.forEach(function (task) {
    var checkbox = task.querySelector(".checkbox");
    var taskname = task.querySelector(".task");
    tasks.push({
      text: taskname.textContent,
      completed: checkbox.checked,
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasksFromLocalStorage() {
  var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(function (task) {
    var input = document.getElementById("text");
    input.value = task.text;
    add_task();

    var list = document.querySelectorAll(".list-task");
    var lastTask = list[list.length - 1];
    var checkbox = lastTask.querySelector(".checkbox");
    checkbox.checked = task.completed;
  });
}

// Load tasks on page load
window.onload = function () {
  loadTasksFromLocalStorage();
};
