const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

const link = document.querySelector("a");

const greeting = document.querySelector("#greetings");
const HIDDEN_CLASSLIST = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSLIST);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    console.log(username);
    paintGreetings(username);
}


function paintGreetings (username) {
    greeting.innerText = `Meow ${username}`;
    greeting.classList.remove(HIDDEN_CLASSLIST);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername == null) {
    // showtheform
    loginForm.classList.remove(HIDDEN_CLASSLIST);
    loginForm.addEventListener("submit", onLoginSubmit);

} else {
    loginForm.classList.add(HIDDEN_CLASSLIST);
    paintGreetings(savedUsername);
    // show the greeting
}