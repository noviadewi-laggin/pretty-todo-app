let tasks = JSON.parse(localStorage.getItem("tasks")) || []

function addTask() {

  let taskInput = document.getElementById("taskInput")

  let task = taskInput.value

  if (task === "") {
    return
  }

  tasks.push({
  text: task,
  completed: false
})

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
        <span 
  onclick="toggleTask(${i})"
  class="${tasks[i].completed ? 'completed' : ''}"
>
  ${tasks[i].text}
</span>
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
function toggleTask(index) {

  tasks[index].completed = !tasks[index].completed

  localStorage.setItem("tasks", JSON.stringify(tasks))

  displayTasks()
}
displayTasks()
function handleEnter(event) {

  if (event.key === "Enter") {
    addTask()
  }

}
