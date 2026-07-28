const expenseList = document.getElementById("expense-list");
const totalBalance = document.getElementById("total-balance");
const expenseForm = document.getElementById("expense-form");

const expensesArray = [
    { name: "Server Hosting", amount: 15.00, category: "Software" }
];

const appManager = {
    appName: "Expense Tracker",
    startupDelay: 1000,
    
    initialize: function() {
        setTimeout(() => {
            console.log(`[System] ${this.appName} initialized successfully.`);
        }, this.startupDelay);
    }
};

appManager.initialize();

const createExpenseCard = (name, amount, category = "General") => {
    let formattedAmount = Number(amount).toFixed(2);
    
    return `
        <li class="expense-card">
            <div class="expense-info">
                <h3>${name}</h3>
                <span class="category-badge">${category}</span>
            </div>
            <div class="expense-amount">$${formattedAmount}</div>
        </li>
    `;
};

const renderExpenses = () => {
    expenseList.innerHTML = "";
    let i = 0;
    while (i < expensesArray.length) {
        let item = expensesArray[i];
        expenseList.innerHTML += createExpenseCard(item.name, item.amount, item.category);
        i++;
    }
};

const updateTotal = () => {
    let sum = 0;
    let i = 0;
    
    while (i < expensesArray.length) {
        sum = sum + expensesArray[i].amount;
        i++;
    }
    
    totalBalance.textContent = `Total: $${sum.toFixed(2)}`;
};

expenseForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const nameInput = document.getElementById("expense-name").value;
    const amountInput = document.getElementById("expense-amount").value;
    const catInput = document.getElementById("expense-category").value;

    expensesArray.push({
        name: nameInput,
        amount: Number(amountInput),
        category: catInput
    });

    renderExpenses();
    updateTotal();

    document.getElementById("expense-name").value = "";
    document.getElementById("expense-amount").value = "";
});

renderExpenses();
updateTotal();