const greetingText = document.getElementById("greeting-text");
const claimForm = document.getElementById("claim-form");
const agentInput = document.getElementById("agent-name");
const ticketNumInput = document.getElementById("ticket-number");
const prioritySelect = document.getElementById("priority-level");
const lockBtn = document.getElementById("lock-btn");

const nameError = document.getElementById("name-error");
const numError = document.getElementById("number-error");
const successMsg = document.getElementById("success-message");

const allTickets = document.querySelectorAll(".ticket-item");

const claimedTicketsLog = [];

const currentHour = new Date().getHours();

if (currentHour < 12) {
    greetingText.textContent = "Good Morning, Support Team";
} else if (currentHour < 18) {
    greetingText.textContent = "Good Afternoon, Support Team";
} else {
    greetingText.textContent = "Good Evening, Support Team";
}

function isValidName(nameParam) {
    if (nameParam.trim() === "") {
        return false; 
    } else {
        return true; 
    }
}

const isValidTicketNumber = function(numParam) {
    let num = Number(numParam);
    if (num >= 1 && num <= 5) {
        return true;
    } else {
        return false;
    }
};

claimForm.addEventListener("submit", function(event) {
    event.preventDefault();

    nameError.textContent = "";
    numError.textContent = "";
    successMsg.className = "hidden";
    let hasErrors = false;

    if (isValidName(agentInput.value) === false) {
        nameError.textContent = "Agent name is required.";
        hasErrors = true;
    }

    if (isValidTicketNumber(ticketNumInput.value) === false) {
        numError.textContent = "Please enter a valid ticket number (1-5).";
        hasErrors = true;
    }

    if (hasErrors === false) {
       
        let targetIndex = Number(ticketNumInput.value) - 1;
        let priority = prioritySelect.value;
        
        let targetedElement = allTickets[targetIndex];

        targetedElement.textContent = "Ticket " + ticketNumInput.value + ": Claimed by " + agentInput.value;

        targetedElement.classList.remove("priority-high", "priority-medium", "priority-low");

        switch (priority) {
            case "High":
                targetedElement.classList.add("priority-high");
                break;
            case "Medium":
                targetedElement.classList.add("priority-medium");
                break;
            case "Low":
                targetedElement.classList.add("priority-low");
                break;
        }

        claimedTicketsLog.push("Ticket " + ticketNumInput.value);

        successMsg.className = "visible-success";
        agentInput.value = "";
        ticketNumInput.value = "";
    }
});

lockBtn.addEventListener("click", function() {
    let i = 0;
    
    while (i < allTickets.length) {

        allTickets[i].classList.add("locked");
        i = i + 1;
    }

    console.log("Day Complete! Total tickets claimed: " + claimedTicketsLog.length);
    console.log("Claim Log: ", claimedTicketsLog);
});