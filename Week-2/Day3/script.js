const clickbtn = document.getElementById("click-btn");
const displaycount = document.getElementById("display-count");
const historylog = document.getElementById("history-log");
const setupform = document.getElementById("setup-form");
const startinput = document.getElementById("start-input");

let currentCount = 0;
const clickhistoryarray = [];

clickbtn.addEventListener("click", function () {

    currentCount++;
    displaycount.textContent = currentCount;

    clickhistoryarray.push(currentCount);

    let historystring = "History: ";
    let i = 0;

    while (i < clickhistoryarray.length) {
        historystring += clickhistoryarray[i] + " ";
        i++;
    }

    let message = "";

    for (let j = 1; j <= 5; j++) {
        if (currentCount === j) {
            message = "" + j + "";
        }
    }

    if (currentCount === 5) {

        let countdown = " , Countdown: ";

        let number = 3;

        do {
            countdown += number + " ";
            number--;
        } while (number > 0);

        message += countdown;
        message += " | Limit Reached!";
    }

    historylog.textContent = historystring + " | " + message;
});

setupform.addEventListener("submit", function (event) {
    event.preventDefault();

    currentCount = Number(startinput.value);
    displaycount.textContent = currentCount;

    clickhistoryarray.length = 0;
    historylog.textContent = "History: Reset";
});