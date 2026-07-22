const clickbtn = document.getElementById("click-btn");
const displaycount = document.getElementById("display-count");
const historylog = document.getElementById("history-log");
const setupfrom = document.getElementById("setup-form");
const startinput = document.getElementById("start-input");

let currentCount = 0;
const clickhistoryarray = [];

clickbtn.addEventListener("click", function() {
    currentCount = currentCount + 1;
    displaycount.textContent = currentCount;

    clickhistoryarray.push(currentCount);

    let historystring = "History: ";
    let i = 0;

    while (i< clickhistoryarray.length) {
        historystring = historystring + clickhistoryarray[i] + ", ";
        i = i + 1;
    }
    historylog.textContent = historystring;
});

setupfrom.addEventListener("submit", function(event) {
    event.preventDefault();
    
    currentCount = Number(startinput.value);
    displaycount.textContent = currentCount;

    clickhistoryarray.length = 0;
    historylog.textContent = "history: reset";
});