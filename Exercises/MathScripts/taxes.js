//sample inputs
var hoursWorkedPerWeek = Math.random() * (60 - 40) + 40;
var hourlyPay = Math.random() * (60 - 25 + 25) + 25;

//calculations
var salaryWeekly = hoursWorkedPerWeek * hourlyPay;
var salaryYearly = salaryWeekly * 52;
var salaryMonthly = salaryYearly / 12;

var withholdings = salaryYearly * .23;

//output
console.log("The amount withheld for taxes is $" + taxes.toFixed(2));