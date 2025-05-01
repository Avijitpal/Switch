const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb+srv://avijit:Avijitpal%401@database.dlwecr7.mongodb.net/?retryWrites=true&w=majority&appName=Database', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Define Mongoose Schema
const formDataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  age: Number,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

// Create Mongoose Model
const FormData = mongoose.model('FormData', formDataSchema);

// Route to serve the form
app.get('/', (req, res) => {
  res.render('form');
});

// Route to handle form submission
app.post('/submit_data', async (req, res) => {
  try {
    const { name, email, age, message } = req.body;

    const newData = new FormData({ name, email, age, message });
    await newData.save();

    res.send('Data submitted successfully to MongoDB!');
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).send('Error saving data to the database.');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});