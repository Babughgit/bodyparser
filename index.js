const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse the body of POST requests
app.use(bodyParser.urlencoded({ extended: false }));

// Route to display the form
app.get('/add-product', (req, res) => {
    res.send(`
        <form action="/add-product" method="POST">
            <label for="productName">Product Name:</label>
            <input type="text" id="productName" name="productName" required><br><br>
            
            <label for="size">Product Size:</label>
            <input type="text" id="size" name="size" required><br><br>

            <button type="submit">Add Product</button>
        </form>
    `);
});

// Route to handle form submission
app.post('/add-product', (req, res) => {
    const { productName, size } = req.body; // Destructure the parsed form data
    console.log(`Product Name: ${productName}, Product Size: ${size}`);
    res.send('Product added successfully!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
