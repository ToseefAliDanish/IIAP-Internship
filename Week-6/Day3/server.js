const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const employees = [
    { id: 1, name: "Toseef", department: "Engineering", role: "Developer" },
    { id: 2, name: "Zahoor", department: "Management", role: "Project Manager" }
];

app.get('/api/employees', (req, res) => {
    res.json(employees);
});

app.post('/api/employees', (req, res) => {
    
    const { name, department, role } = req.body;

    if (!name || !department || !role) {
        
        return res.status(400).json({ error: "Please provide name, department, and role." });
    }

    const newEmployee = {
        id: Date.now(), 
        name: name,
        department: department,
        role: role
    };

    employees.push(newEmployee);

    res.status(201).json({
        message: "Employee successfully added!",
        employee: newEmployee
    });
});


app.listen(PORT, () => {
    console.log(`Employee API running on http://localhost:${PORT}`);
});