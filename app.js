//Selectors
const todoInput=document.querySelector(".todo-input");
const todoButton=document.querySelector(".todo-button");
const todoList=document.querySelector(".todo-list");
const filterOption=document.querySelector(".todo-filter");
//EventListeners
todoButton.addEventListener("click",todoAdd);
todoList.addEventListener("click",deleteCheck);
filterOption.addEventListener("click",filterToDo);

//Functions
function todoAdd(event){
//Preventing from submitting
event.preventDefault();
//todo div
const todoDiv=document.createElement("div");
todoDiv.classList.add("todo");
//create li
const newToDo=document.createElement("li");
newToDo.innerText=todoInput.value;
newToDo.classList.add("todo-item");
todoDiv.appendChild(newToDo);
//check mark button
const check=document.createElement("button");
check.innerHTML='<i class="fas fa-check"></i>';
check.classList.add("check");
todoDiv.appendChild(check);
//trash mark button
const trash=document.createElement("button");
trash.innerHTML='<i class="fas fa-trash"></i>';
trash.classList.add("trash");
todoDiv.appendChild(trash);
//append to list
todoList.appendChild(todoDiv);
//clear todoInputValue
todoInput.value="";
}

function deleteCheck(e){
  const item=e.target;
  if(item.classList[0]==="trash") {
 const todo=item.parentElement;
   todo.remove();
}
if(item.classList[0]==="check"){
    const todo=item.parentElement;
    todo.classList.toggle("completed");
}
}

function filterToDo(e){
    const todos=todoList.childNodes;
    todos.forEach(function(todo){
    switch(e.target.value){
        case "all": 
          todo.style.display="flex";
          break;
        case "completed":
            if(todo.classList.contains('completed')){
                todo.style.display="flex";
            }else{
                todo.style.display="none";
            }
            break;
        case "uncompleted":
            if(!todo.classList.contains('completed')){
                todo.style.display="flex";
            }else{
                todo.style.display="none";
            }
            break;
    }
    });
}