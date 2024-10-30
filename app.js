const express = require("express");
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');
const validateComicBook = require('./middleware/validation');
const comicRoutes = require('./routes/comicRoutes');

const app = express();
require("dotenv").config(); 

connectDB();

// Middleware
app.use(express.json());
app.use(validateComicBook);
// Define routes
app.use('/comics', comicRoutes); // Mount comicRoutes here to handle all comic routes

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>{ 
    console.log(`Server Started at port ${PORT}`);
});
