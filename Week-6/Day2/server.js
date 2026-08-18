const express = require('express');
const app = express();
const PORT = 3000;

const employees = [
    { id: 1, name: "Toseef", department: "Engineering", role: "Developer" },
    { id: 2, name: "Zahoor", department: "Management", role: "Project Manager" },
    { id: 3, name: "Ali", department: "Engineering", role: "QA Tester" }
];

app.get('/api/employees', (req, res) => {
    
    const deptQuery = req.query.department;

    if (deptQuery) {

        const filteredEmployees = employees.filter(emp => 
            emp.department.toLowerCase() === deptQuery.toLowerCase()
        );
        
        return res.json(filteredEmployees);
    }

    res.json(employees);
});

app.get('/api/employees/:id', (req, res) => {
    
    const targetId = Number(req.params.id);

    const foundEmployee = employees.find(emp => emp.id === targetId);

    if (foundEmployee) {
    
        res.json(foundEmployee);
    } else {
    
        res.status(404).json({ error: "Employee not found." });
    }
});

app.listen(PORT, () => {
    console.log(`Employee API running on http://localhost:${PORT}`);
});