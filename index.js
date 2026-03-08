const express = require('express');
const app = express();
const port = 3000;

// Serve static file from the "public" folder 
app.use(express.static('public'));

app.use(express.json()); // Middleware to pase JSON bodies

// Define a route for the home page
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/about', (req, res) => {
    res.send('About us');
});

app.post('/submit', (req, res) => {
    const data= req.body;
    res.send(`Received: ${JSON.stringify(data)}`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
