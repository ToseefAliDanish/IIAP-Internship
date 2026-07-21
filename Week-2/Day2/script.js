let userName = "Toseef Ali Danish";
const greetingElement = document.getElementById("greeting-title");
const dayMessageElement = document.getElementById("day-message");
const alltasks = document.querySelectorAll(".tasks");

const currentHour = new Date().getHours();

if (currentHour >= 5 && currentHour < 12) {
    greetingElement.textContent = "Good Morning, " + userName + "!";
} else if (currentHour >= 12 && currentHour < 18) {
    greetingElement.textContent = "Good Afternoon, " + userName + "!";
} else {
    greetingElement.textContent = "Good Evening, " + userName + "!";
}

const currentdaynumber = new Date().getDay();
let dayName = "";

switch (currentdaynumber) {
    case 1:
        dayName = "Monday: Let's start the week!";
        break;

    case 2:
        dayName = "Tuesday: Keep the momentum going.";
        break;

    case 3:
        dayName = "Wednesday: We are halfway there!";
        break;

    case 4:
    case 5:
        dayName = "Thursday/Friday: Finish up those projects!";
        break;

    case 6:
    case 0:
        dayName = "Weekend: Time to recharge or code for fun.";
        break;

    default:
        dayName = "Have a great day!";
}

dayMessageElement.textContent = dayName;

for (let i = 0; i < alltasks.length; i++) {
    alltasks[i].classList.add("highlighted-task");
}
