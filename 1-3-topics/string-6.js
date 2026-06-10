//1
let month = "July";
let result;

if (month === "July" || month === "August") {
    result = "approved";
} else {
    result = "denied";
}

console.log(result);

//2
let month1 = "June";
let vacation = "";

switch (month1) {
    case "January":
        vacation = "denied";
        break;
    case "February":
        vacation = "denied";
        break;
    case "March":
        vacation = "denied";
        break;
    case "April":
        vacation = "denied";
        break;
    case "May":
        vacation = "denied";
        break;
    case "June":
        vacation = "denied";
        break;
    case "July":
        vacation = "approved";
        break;
    case "August":
        vacation = "approved"
        break;
    case "September":
        vacation = "denied";
        break;
    case "October":
        vacation = "denied";
        break;
    case "November":
        vacation = "denied";
        break;
    case "December":
        vacation = "denied";
        break;
}

console.log(vacation);