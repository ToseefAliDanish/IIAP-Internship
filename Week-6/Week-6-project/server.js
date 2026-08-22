const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

const flights = [
    { id: 1, flightNo: "PK-301", destination: "Karachi", type: "domestic", status: "On Time" },
    { id: 2, flightNo: "EK-615", destination: "Dubai", type: "international", status: "Delayed" },
    { id: 3, flightNo: "PA-110", destination: "Jeddah", type: "international", status: "Boarding" }
];

app.get('/api/flights', (req, res) => {
    const typeQuery = req.query.type;

    if (typeQuery) {
        const filteredFlights = flights.filter(f => f.type.toLowerCase() === typeQuery.toLowerCase());
        return res.status(200).json({
            success: true,
            count: filteredFlights.length,
            data: filteredFlights
        });
    }

    res.status(200).json({
        success: true,
        count: flights.length,
        data: flights
    });
});

app.get('/api/flights/:id', (req, res) => {
    const targetId = Number(req.params.id);
    const flight = flights.find(f => f.id === targetId);

    if (!flight) {
        return res.status(404).json({
            success: false,
            error: `Flight ID ${targetId} not found in PAA system.`
        });
    }

    res.status(200).json({ success: true, data: flight });
});

app.post('/api/flights', (req, res) => {
    const { flightNo, destination, type, status } = req.body;

    if (!flightNo || !destination || !type || !status) {
        return res.status(400).json({
            success: false,
            error: "PAA System Error: Please provide flightNo, destination, type, and status."
        });
    }

    const newFlight = {
        id: Date.now(),
        flightNo,
        destination,
        type,
        status
    };

    flights.push(newFlight);

    res.status(201).json({
        success: true,
        message: "New flight successfully registered with PAA.",
        data: newFlight
    });
});

app.listen(PORT, () => {
    console.log(`PAA Server running on http://localhost:${PORT}`);
});