const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Atlas Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://your-username:your-password@cluster0.mongodb.net/iot-monitoring?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('MongoDB connection error:', err));

// Device Schema
const deviceSchema = new mongoose.Schema({
  deviceId: { type: String, required: true },
  temperature: { type: Number, required: true },
  humidity: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now }
});

const Device = mongoose.model('Device', deviceSchema);

// Function to generate random data
function generateRandomData() {
  const devices = ['DEV001', 'DEV002', 'DEV003'];
  const deviceId = devices[Math.floor(Math.random() * devices.length)];
  
  // Generate temperature between 20 and 30 with 1 decimal place
  const temperature = Math.round((Math.random() * 10 + 20) * 10) / 10;
  
  // Generate humidity between 40 and 80 with 1 decimal place
  const humidity = Math.round((Math.random() * 40 + 40) * 10) / 10;

  return {
    deviceId,
    temperature,
    humidity,
    timestamp: new Date()
  };
}

// Routes
app.get('/api/data/latest', async (req, res) => {
  try {
    const latestData = await Device.find()
      .sort({ timestamp: -1 })
      .limit(10);
    res.json(latestData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/api/data', async (req, res) => {
  try {
    const { deviceId, temperature, humidity } = req.body;
    const newData = new Device({
      deviceId,
      temperature,
      humidity
    });
    const savedData = await newData.save();
    res.status(201).json(savedData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// New endpoint to generate and save random data
app.post('/api/data/generate', async (req, res) => {
  try {
    const newData = new Device(generateRandomData());
    const savedData = await newData.save();
    res.status(201).json(savedData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 