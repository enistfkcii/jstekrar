

let tasks = []
function addTask(){
    let taskInput = document.getElementById("input")
    let taskText = taskInput.value.trim()
    console.log(taskText);
    if(taskText) {
        tasks.push({text:taskText , done:false})
        taskInput.value = ""
        displayTasks()
        
    }
}
function displayTasks(){
    var ul = document.getElementById("ul")
    ul.innerHTML = ""
    tasks.forEach((task,index) => {
         let li = document.createElement("li")
         li.textContent = task.text
         li.style.textDecoration = task.done ? "line-through" : "none"
         li.addEventListener("click",function(){
            toggleTask(index)
         })
         let deleteBtn = document.createElement("button")
         deleteBtn.textContent = "Kaldır"
         deleteBtn.style.marginLeft = "10px"
         deleteBtn.addEventListener("click",function(){
            deleteTask(index)
         })
         li.appendChild(deleteBtn)
         ul.appendChild(li)
    })
}

function toggleTask(index){
    tasks[index].done = !tasks[index].done
    displayTasks()
}

function deleteTask(index){
    tasks.splice(index,1)
    displayTasks()
}
displayTasks()