let tasks = JSON.parse(localStorage.getItem("tasks")) || []

function addTask() {

  let taskInput = document.getElementById("taskInput")

  let task = taskInput.value

  if (task === "") {
    return
  }

  tasks.push(task)

  localStorage.setItem("tasks", JSON.stringify(tasks))

  displayTasks()

  taskInput.value = ""
}

function displayTasks() {

  let taskList = document.getElementById("taskList")

  taskList.innerHTML = ""

  for (let i = 0; i < tasks.length; i++) {

    taskList.innerHTML += `
      <li>
        ${tasks[i]}
        <button onclick="deleteTask(${i})">❌</button>
      </li>
    `
  }
}

function deleteTask(index) {

  tasks.splice(index, 1)

  localStorage.setItem("tasks", JSON.stringify(tasks))

  displayTasks()
}

displayTasks()