const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")

const todo_form = document.getElementById("todo-form");
const todo_list = document.getElementById("todo-list");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function showGreeting(username){
    greeting.innerText = `Hello, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);  
}

function loginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    todo_form.classList.remove(HIDDEN_CLASSNAME);
    todo_list.classList.remove(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    showGreeting(username);  
}



const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    todo_form.classList.add(HIDDEN_CLASSNAME);
    todo_list.classList.add(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", loginSubmit);
}else{
   showGreeting(savedUsername);
}


