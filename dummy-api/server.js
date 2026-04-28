// dataset
const data = [
    { id: 1, name: "Payment A", amount: 100 },
    { id: 2, name: "Payment B", amount: 250 },
    { id: 3, name: "Payment C", amount: 75 }
];

const express = require('express');
const app = express();

// simpele test endpoint
app.get('/ping', (req, res) => {
    res.json({
        status: "ok",
        message: "Dummy API werkt"
    });
});

// endpoint data
app.get('/data', (req, res) => {
    res.json(data);
});

app.listen(3000, () => {
    console.log("Server draait op http://localhost:3000");
});