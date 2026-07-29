const expenseForm = document.getElementById("expense-form");
const expenseList = document.getElementById("expense-list");
const totalBalance = document.getElementById("total-balance");
const filterButtons = document.querySelectorAll(".filter-btn");

let expensesArray = [
    { id: 1, details: { name: "Server Hosting", category: "Software" }, amount: 15.00 },
    { id: 2, details: { name: "Client Lunch", category: "Food" }, amount: 45.50 }
];

const updateTotal = (arrayToCalculate) => {
    let sum = 0;
    
    arrayToCalculate.forEach((item) => {
        sum = sum + item.amount;
    });
    
    totalBalance.textContent = `Total: $${sum.toFixed(2)}`;
};

const renderExpenses = (arrayToRender) => {
    const htmlStringsArray = arrayToRender.map((item) => {
        const { amount, details } = item;
        const { name, category } = details; 
        
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
    });

    expenseList.innerHTML = htmlStringsArray.join('');
    updateTotal(arrayToRender);
};

expenseForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const nameInput = document.getElementById("expense-name").value;
    const amountInput = document.getElementById("expense-amount").value;
    const catInput = document.getElementById("expense-category").value;

    const newExpense = {
        id: Date.now(),
        details: { name: nameInput, category: catInput },
        amount: Number(amountInput)
    };

    expensesArray = [...expensesArray, newExpense];
    
    renderExpenses(expensesArray);
    expenseForm.reset();
});

filterButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        const selectedCategory = event.target.textContent;

        if (selectedCategory === "All") {
            renderExpenses(expensesArray);
        } else {
            const filteredArray = expensesArray.filter((item) => {
                const { category, ...otherDetails } = item.details;
                return category === selectedCategory;
            });
            
            renderExpenses(filteredArray);
        }
    });
});

renderExpenses(expensesArray);