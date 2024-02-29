const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const connectDb = require('./config/db');


const app = express();

// Connect to Database
connectDb();

const port = process.env.PORT || 3020;

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// CORS
const cors = require('cors');
app.use(cors({
  origin: process.env.REACT_APP_API_URL || 'http://127.0.0.1:5173'
}));

// Test route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Employee and Department Routes
app.use('/api/employees', require('./routes/employeeRoutes'));
app.use('/api/departments', require('./routes/departmentRoutes'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
