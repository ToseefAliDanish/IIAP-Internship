const wireframeTarget = document.getElementById("wireframe-render");
const checklistTarget = document.getElementById("checklist-render");

function renderWireframe() {
    const wireframeHTML = `
        <div class="blueprint-box blueprint-header">
            Expense Tracker & Total Balance
        </div>
        <div class="blueprint-box blueprint-input">
             Name | Amount | Category | Submit Button
        </div>
        <div class="blueprint-box blueprint-list">
             Dynamic Expense Cards
            <div class="blueprint-item">Expense Item 1</div>
            <div class="blueprint-item">Expense Item 2</div>
        </div>
    `;
    
    wireframeTarget.innerHTML = wireframeHTML;
}

function createChecklistItem(taskName, status = "Pending") {
    let statusClass = "";
    
    if (status === "Complete") {
        statusClass = "status-done";
    } else {
        statusClass = "status-pending";
    }

    const itemHTML = `
        <li class="check-item">
            <span>${taskName}</span>
            <span class="${statusClass}">${status}</span>
        </li>
    `;
    
    return itemHTML;
}

function renderChecklist() {
    let item1 = createChecklistItem("Project Planning & Wireframe", "Complete");
    let item2 = createChecklistItem("ES6 Template Literals", "Complete");
    let item3 = createChecklistItem("let/const vs var", "Complete");
    let item4 = createChecklistItem("Array Methods (map, filter)");
    let item5 = createChecklistItem("Local Storage Integration");

    checklistTarget.innerHTML = item1 + item2 + item3 + item4 + item5;
}

renderWireframe();
renderChecklist();