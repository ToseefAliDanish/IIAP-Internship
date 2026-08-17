const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    
    res.send("Hello From IIAP! My Express backend is running without any error.");
});

app.listen(PORT, () => {
    console.log(`Server is running and listening on http://localhost:${PORT}`);
});