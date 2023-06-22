const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Establish MySQL database connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your-username',
  password: 'your-password',
  database: 'your-database'
});

connection.connect(error => {
  if (error) {
    console.error('Error connecting to database:', error);
    return;
  }
  console.log('Connected to the database!');
});

// Serve static files
app.use(express.static('public'));

// Define route to play sound
app.get('/play-sound', (req, res) => {
  // Execute your database query here
  const query = 'SELECT sound_url FROM sounds WHERE id = 1'; // Adjust the query based on your database structure
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error executing database query:', error);
      res.status(500).send('Error executing database query');
      return;
    }
    
    if (results.length === 0) {
      console.log('No sound found!');
      res.status(404).send('No sound found');
      return;
    }

    const soundUrl = results[0].sound_url;
    // Emit the sound using a suitable audio library or HTML5 Audio API here
    // Example: Play the sound using the HTML5 Audio API
    res.sendStatus(200);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
