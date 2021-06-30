const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "toDos";

let toDoAry = [];


function saveToDo(newToDo){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDoAry));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDoAry = toDoAry.filter((todo) => todo.id !== parseInt(li.id))
    saveToDo(toDoAry);
}

function printToDo(newToDo){
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.todo;
    const button = document.createElement("button");
    button.innerText = "X";
    li.appendChild(span);
    li.appendChild(button); 
    button.addEventListener("click", deleteToDo); 
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    const toDoObject = {
        id: Date.now(),
        todo: newToDo,
    }
    toDoAry.push(toDoObject);
    toDoInput.value = "";
    printToDo(toDoObject);
    saveToDo(toDoObject);    
  }

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDoAry = localStorage.getItem(TODOS_KEY);

if(savedToDoAry !== null){
    parsedToDoAry = JSON.parse(savedToDoAry);
    toDoAry = parsedToDoAry;

    parsedToDoAry.forEach(printToDo);

}