"use strict"
window.onload = init;

function init() {
    const onGreetBtn = document.getElementById("greetButton");
    onGreetBtn.onclick = onGreetUserBtnClicked;
}

function onGreetUserBtnClicked() {
    const nameField = document.getElementById("nameField");
    alert(`hello ${nameField}`);
    
}