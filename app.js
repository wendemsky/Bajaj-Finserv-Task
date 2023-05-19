const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Route: /bfhl | Method: POST
app.post('/bfhl', (req, res) => {
    // Get the request data from the request body
    const { data } = req.body;
  
    // Extract necessary fields from the request
    const full_name = 'john_doe';
    const dob = '17091999';
    const email = 'john@xyz.com';
    const roll_number = 'ABCD123';
  
    // Filter numbers and alphabets from the data array
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
  
    // Generate the user ID using the provided fields
    const user_id = `${full_name}_${dob}`;
  
    // Create the response object
    const response = {
      is_success: true,
      user_id,
      email,
      roll_number,
      numbers,
      alphabets
    };
  
    // Return the response as JSON
    res.json(response);
  });
  

// Route: /bfhl | Method: GET
app.get('/bfhl', (req, res) => {
    // Create the response object
    const response = {
        operation_code: 1
    };

    // Return the response as JSON
    res.json(response);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
