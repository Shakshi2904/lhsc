// Import the express module
const express = require('express');
const bodyParser = require('body-parser');

// Initialize an Express app
const app = express();

// Use body-parser to handle JSON requests
app.use(bodyParser.json());

// Example route to handle adding events
app.post('/add-event', (req, res) => {
  const userEmail = req.body.userEmail;
  const event = req.body.event;

  if (userEmail === 'shakshimittal0183@gmail.com') {
    // Proceed with adding the event to the calendar
    res.status(200).json({ message: 'Event added successfully' });
  } else {
    res.status(403).json({ message: 'You are not authorized to add events' });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
