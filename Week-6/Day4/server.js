const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
e
const inventory = [
    { id: 1, name: "Wireless Mouse", price: 25.99, stock: 150 },
    { id: 2, name: "Mechanical Keyboard", price: 89.00, stock: 45 }
];

app.get('/api/gadgets', (req, res) => {
    res.status(200).json({
        success: true,
        count: inventory.length,
        data: inventory
    });
});

app.get('/api/gadgets/:id', (req, res) => {
    const targetId = Number(req.params.id);
    const gadget = inventory.find(item => item.id === targetId);

    if (!gadget) {
        return res.status(404).json({
            success: false,
            error: `Gadget with ID ${targetId} not found in inventory.`
        });
    }

    res.status(200).json({
        success: true,
        data: gadget
    });
});

app.post('/api/gadgets', (req, res) => {
    const { name, price, stock } = req.body;

    if (!name || !price || !stock) {
        return res.status(400).json({
            success: false,
            error: "Validation failed. Please provide name, price, and stock."
        });
    }

    const newGadget = {
        id: Date.now(),
        name: name,
        price: Number(price),
        stock: Number(stock)
    };

    inventory.push(newGadget);

    res.status(201).json({
        success: true,
        message: "Gadget successfully added to inventory.",
        data: newGadget
    });
});

app.listen(PORT, () => {
    console.log(`Inventory API running on http://localhost:${PORT}`);
});