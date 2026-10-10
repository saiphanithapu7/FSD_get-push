const express = require("express");
const app = express();

let port = 4000;

// Middleware to read JSON request bodies
app.use(express.json());

// Existing API 1: Home
app.get("/", (req, res) => {
    res.send("Server is running successfully");
});

// Existing API 2: Fruit
app.get("/fruit", (req, res) => {
    const r = {
        msg: "fruits api",
        status: "200 ok",
        data: "🍏🍎🍑🥭🫐",
    };

    res.json(r);
});


// ==================================================
// GET API ENDPOINTS
// ==================================================

// 1. GET - Factorial
app.get("/factorial", (req, res) => {
    const n = Number(req.query.n);

    if (
        req.query.n === undefined ||
        !Number.isInteger(n) ||
        n < 0 ||
        n > 170
    ) {
        return res.status(400).json({
            error: "Enter an integer between 0 and 170",
        });
    }

    let result = 1;

    for (let i = 1; i <= n; i++) {
        result = result * i;
    }

    res.json({
        operation: "Factorial",
        number: n,
        result: result,
    });
});


// 2. GET - Sum of N natural numbers
app.get("/sum", (req, res) => {
    const n = Number(req.query.n);

    if (
        req.query.n === undefined ||
        !Number.isInteger(n) ||
        n < 1 ||
        n > 1000000
    ) {
        return res.status(400).json({
            error: "Enter a positive integer",
        });
    }

    const result = (n * (n + 1)) / 2;

    res.json({
        operation: "Sum of N natural numbers",
        number: n,
        result: result,
    });
});


// 3. GET - Reverse String
app.get("/reverse", (req, res) => {
    const text = req.query.text;

    if (typeof text !== "string") {
        return res.status(400).json({
            error: "Please provide a string using the text parameter",
        });
    }

    const result = Array.from(text).reverse().join("");

    res.json({
        operation: "Reverse String",
        original: text,
        result: result,
    });
});


// ==================================================
// POST API ENDPOINTS
// ==================================================

// 4. POST - Factorial
app.post("/factorial", (req, res) => {
    const n = req.body?.n;

    if (
        typeof n !== "number" ||
        !Number.isInteger(n) ||
        n < 0 ||
        n > 170
    ) {
        return res.status(400).json({
            error: "Enter an integer between 0 and 170",
        });
    }

    let result = 1;

    for (let i = 1; i <= n; i++) {
        result = result * i;
    }

    res.json({
        operation: "Factorial",
        number: n,
        result: result,
    });
});


// 5. POST - Sum of N natural numbers
app.post("/sum", (req, res) => {
    const n = req.body?.n;

    if (
        typeof n !== "number" ||
        !Number.isInteger(n) ||
        n < 1 ||
        n > 1000000
    ) {
        return res.status(400).json({
            error: "Enter a positive integer",
        });
    }

    const result = (n * (n + 1)) / 2;

    res.json({
        operation: "Sum of N natural numbers",
        number: n,
        result: result,
    });
});


// 6. POST - Reverse String
app.post("/reverse", (req, res) => {
    const text = req.body?.text;

    if (typeof text !== "string") {
        return res.status(400).json({
            error: "Please provide a string in the request body",
        });
    }

    const result = Array.from(text).reverse().join("");

    res.json({
        operation: "Reverse String",
        original: text,
        result: result,
    });
});
// Start the server
app.listen(port, () => {
    console.log(`Server started successfully at http://localhost:${port}`);
    });