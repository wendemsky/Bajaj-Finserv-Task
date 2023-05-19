const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // Enable CORS for all routes
app.use(express.json());

// Route: /bfhl | Method: POST
app.post('https://testbfhl.herokuapp.com/bfhl', (req, res) => {
    // Set the CORS headers for the response
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    // Get the request data from the request body
    const { data } = req.body;

    // Rest of your route code
    // ...

    // Return the response as JSON
    res.json(response);
});

// Route: /bfhl | Method: GET
app.get('https://testbfhl.herokuapp.com/bfhl', (req, res) => {
    // Set the CORS headers for the response
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    // Rest of your route code
    // ...

    // Return the response as JSON
    res.json(response);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
