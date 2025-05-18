const mongoose = require('mongoose');
require('dotenv').config();

// MongoDB Atlas Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://your-username:your-password@cluster0.mongodb.net/iot-monitoring?retryWrites=true&w=majority';

// Device Schema
const deviceSchema = new mongoose.Schema({
  deviceId: { type: String, required: true },
  temperature: { type: Number, required: true },
  humidity: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now }
});

const Device = mongoose.model('Device', deviceSchema);

// Sample data
const sampleData = [
  {
    deviceId: 'DEV001',
    temperature: 25.5,
    humidity: 60.0,
    timestamp: new Date(Date.now() - 1000 * 60 * 5) // 5 minutes ago
  },
  {
    deviceId: 'DEV001',
    temperature: 26.0,
    humidity: 58.0,
    timestamp: new Date(Date.now() - 1000 * 60 * 4) // 4 minutes ago
  },
  {
    deviceId: 'DEV001',
    temperature: 25.8,
    humidity: 59.0,
    timestamp: new Date(Date.now() - 1000 * 60 * 3) // 3 minutes ago
  },
  {
    deviceId: 'DEV002',
    temperature: 24.5,
    humidity: 65.0,
    timestamp: new Date(Date.now() - 1000 * 60 * 2) // 2 minutes ago
  },
  {
    deviceId: 'DEV002',
    temperature: 24.8,
    humidity: 64.0,
    timestamp: new Date(Date.now() - 1000 * 60 * 1) // 1 minute ago
  }
];

// Function to seed data
async function seedData() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB Atlas');

    // Clear existing data
    await Device.deleteMany({});
    console.log('Cleared existing data');

    // Insert sample data
    await Device.insertMany(sampleData);
    console.log('Sample data inserted successfully');

    // Disconnect from MongoDB
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB Atlas');
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
}

// Run the seed function
seedData(); 