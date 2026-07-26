const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const formError = document.getElementById("form-error");
const urgentBtn = document.getElementById("urgent-btn");

const domSlots = document.querySelectorAll(".task-slot");

const maxCapacity = 5;
const tasksArray = [];

const isInputValid = function(textInput) {
    let cleanText = textInput.trim();
    if (cleanText === "") {
        return false;
    } else {
        return true;
    }
};


function updateBoard() {
    let i = 0;
    
    while (i < domSlots.length) {
        
        if (tasksArray[i] !== undefined) {
            domSlots[i].textContent = (i + 1) + ". " + tasksArray[i];
            domSlots[i].style.color = "#2c3e50";
        } 
        
        i = i + 1;
    }
}

taskForm.addEventListener("submit", function(event) {
    event.preventDefault(); 
    formError.textContent = ""; 

    if (tasksArray.length >= maxCapacity) {
        formError.textContent = "Task board is full! Complete tasks first.";
        return; 
    }

    
    let isValid = isInputValid(taskInput.value);

    if (isValid === false) {
        formError.textContent = "Task cannot be empty.";
    } else {
        
        tasksArray.push(taskInput.value);
        updateBoard(); /
        taskInput.value = ""; 
    }
});


urgentBtn.addEventListener("click", function() {
    let i = 0;
    
    
    while (i < domSlots.length) {
        
        if (tasksArray[i] !== undefined) {
            domSlots[i].classList.add("urgent-task");
        }
        i = i + 1;
    }
});