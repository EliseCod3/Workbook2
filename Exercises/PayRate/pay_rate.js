"use strict";

window.onload = function init() {
    const calculateButton = document.getElementById("calculateButton");
    calculateButton.onclick = calculatePay;
}

function calculatePay() {
    //query html elements on the page and put them into variables
    const hoursWorkedInput = document.getElementById("hoursWorkedInput");
    const payRateInput  = document.getElementById("payRateInput");
    const resultParagraph = document.getElementById("resultParagraph");
    
    //calculate something
    let hoursWorked = Number(hoursWorkedInput.value);
    let payRate = Number(payRateInput.value);
    let pay = hoursWorked * payRate;
    let message = `Pay is ${pay}`;
    
    //create your message to display
    console.log(hoursWorked * payRate);
    
    //display message
    resultParagraph.innerText = message;
}

calculatePay();