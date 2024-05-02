const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Middleware to handle form submissions
app.post('/submit', (req, res) => {
    const formData = req.body;
    // Here you can add your validation logic
    // For example, checking if all required fields are present, validating email format, etc.
    
    // Assuming the form submission is successful, you can send a response
    res.json({ message: 'Registration successful', username: formData.username });
});

// Serve the React app
app.use(express.static('client/build'));

// Define a GET request handler
app.get('/getRequest', (req, res) => {
    res.send("Hello, this is a successful GET request");
});

// Define a POST request handler
app.post('/postRequest', (req, res) => {
    // This function handles POST requests made to '/postRequest'
    // You can access the request body using req.body if you're expecting JSON data
    // Here you can add your logic to handle the POST request and send an appropriate response
    
    // For example, you can access data from the request body
    const requestData = req.body;

    // Then you can perform any necessary operations based on the received data

    // Finally, send a response back to the client
    res.send("Hello, this is a successful POST request");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
