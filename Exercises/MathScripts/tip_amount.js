//sample inputs
var totalCheck = 56.37;
var people = 1;
var tipPercentage = 0.20;

//calculations
var tipTotal = (people + tipPercentage) * totalCheck;

//output
console.log("The tip on a $" + totalCheck + " food bill is $" + tipTotal.toFixed(2));