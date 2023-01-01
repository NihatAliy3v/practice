const addBtn = document.querySelector(".btn-add");
const addInput = document.querySelector("#addInput");
const ul = document.querySelector(".list");
const searchInput = document.querySelector("#searchInput");
const listItem = document.getElementsByClassName(".list-item");
const checkInput = document.querySelectorAll(".check-input");

const deleteBtn = document.getElementsByClassName("btn-delete");

const display = document.querySelector("#display");

const darkMode = document.querySelector(".dark-mode");

const list = [];


addBtn.addEventListener("click",newTask)

taskAdd();

function taskAdd(){
    addInput.value = "";
    ul.innerHTML = "";
    for(let task of list){
        ul.innerHTML += `
        <li class="list-item">
            <div class="left-group">
                <input type="checkbox" id="${task.id}" class="check-input">
                <label for="${task.id}">${task.taskName}</label>
            </div>
            <div class="delete">
                <button class="btn btn-delete" onclick="deleteTask(${task.id})">delete</button>
            </div>

        </li>
    ` 
    }
    
}

function newTask(e){
    e.preventDefault();
    if(addInput.value==""){
        alert("Doldurun");
        
    }else{
        list.push({taskName:addInput.value,id:list.length});
    }

    taskAdd();
}

searchInput.addEventListener("keyup",search);

function search(){
    for(let key in list){
        if(!list[key].taskName.toLowerCase().includes(searchInput.value.toLowerCase())){
            ul.children[key].classList.add("hidden");
        }else{
            ul.children[key].classList.remove("hidden");
        }
    }
}

let deletedId;

function deleteTask(id){
    for(index in list){
        if(list[index].id==id){
            deletedId = index;
        }
    }
    list.splice(deletedId,1)
    taskAdd();
}


display.addEventListener("click",function(event){
    if(event.target.checked){
        ul.style.display = "none"
    }else{
        ul.style.display = "flex"

    }

})

//dark mode



darkMode.addEventListener("click",function(e){
    e.preventDefault();

    document.body.classList.toggle("dark")
})









