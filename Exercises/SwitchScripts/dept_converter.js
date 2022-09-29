// 1  Marketing
// 5  Human Resources
// 10  Accounting
// 2  Legal
// 3  IT
// 20  Customer Relations



// if (departmentCode == 1) {
//     console.log("Marketing");
// } else if (departmentCode == 5) {
//     console.log("Human Resources");
// } else if (departmentCode == 10) {
//     console.log("Accounting");
// } else {
//     console.log("Invalid Code");
// }

let departmentCode = 10;
switch (departmentCode) {
    case 0:
    case 1:
        console.log("Marketing");
        break;
    case 5:
        console.log("Human Resources");
        break;
    case 10:
        console.log("Accounting");
        break;
    case 2:
        console.log("Legal");
        break;
    case 3:
        console.log("IT");
        break;
    case 20:
        console.log("Customer Relations");
        break;
    default:
        console.log("Invalid Code");
        break;
}