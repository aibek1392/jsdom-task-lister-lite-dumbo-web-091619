document.addEventListener("DOMContentLoaded", () => {
 
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskPriority = document.getElementById("new-task-priority");
  
  const newTaskUl = document.getElementById("tasks");
  
  newTaskForm.addEventListener("submit", createNewTask);
});
//////create
const createNewTask = event => {
  event.preventDefault();
  // const newTaskDescription = document.getElementById("new-task-description");
  //stop form from trying to submit
  const newTaskDescription = document.getElementById("new-task-description");
  // let dropdownMenu = document.createElement("dropdown")
  // dropdownMenu
  // newTaskPriority.appendChild(dropdownMenu)
  const newTask = document.createElement("li");
  document.getElementById("tasks").appendChild(newTask)
  newTask.innerText = newTaskDescription.value;
///////delete
  let deleteBtn = document.createElement("button")
  deleteBtn.innerText = "❌"
  newTask.appendChild(deleteBtn)


  deleteBtn.addEventListener('click', event => {
    newTask.remove()
 
  })


  event.target.reset();

  // const deleteBtn = doc

};

// const appendNewTask = task => {
//   console.log(task);
//   document.getElementById("tasks").appendChild(task);
// };