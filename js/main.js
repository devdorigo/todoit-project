const todoForm = document.getElementById("form")

todoForm.addEventListener("submit", (event)=>{
    event.preventDefault()
    const task = event.target.elements['task']
    console.log(task.value) 
})

function addNewTask(){
    const newTask = document.createElement('li')
    newTask.classList.add("item")
    
}
