const todoForm = document.getElementById("form")
const localStorageKey = 'to-do-tasks'
const tasks = JSON.parse(localStorage.getItem(localStorageKey)) || []

function validateTask(){
    let input = document.getElementById("task").value
    let exist= tasks.find(x=> x.name == input)

    return !exist ? false : true
}

function addNewTask()
{
    let input = document.getElementById("task")

    if(!input.value){
        alert("type one task to do!")
        } else if(validateTask()) {
            alert("type a task that doesn't exist")
        }
     else{
        tasks.push({
            name: input.value
        })
       localStorage.setItem(localStorageKey, JSON.stringify(tasks))
       showNewTask()
    }
    input.value = ''
}
   
function showNewTask(){
    let list = document.getElementById('list')
    list.innerHTML=''
    for(let i = 0; i < tasks.length; i++)
    { 
        list.innerHTML+= `
        <li class="item">
                            <p class="text__list">${tasks[i]['name']} </p>
                            <button class="btn__list" onclick="removeItem('${tasks[i]['name']}')">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-all" viewBox="0 0 16 16">
                                    <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"/>
                                    <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"/>
                                  </svg>
                            </button>
                        </li>`
    }
}

function removeItem(data){
    let index = tasks.findIndex(x => x.name == data)
    tasks.splice(index,1)
    localStorage.setItem(localStorageKey, JSON.stringify(tasks))
    showNewTask()
}

showNewTask()