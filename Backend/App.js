// Usings
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');

// Imports
const { projectsRouter } = require('./routers');
const { errorsMiddlewares } = require('./middlewares');

// Destructuring Imports
const { notFoundMiddleware, methodNotFoundMiddleware, errorsMiddleware } = errorsMiddlewares;

// Initialize Environement configurations
dotenv.config();
console.log('Environement', process.env.NODE_ENV);

// Connect to mongodb
// TODO: Move connection string to dotenv
mongoose.connect('mongodb://127.0.0.1:27017/palm')
    .then(() => {
        console.log("Connected to database.");
    })
    .catch(err => console.error(err));

const app = express();

// Add services
app.use(bodyParser.json());
app.use(cors({
    origin: "http://localhost:5001"
}));
app.use(morgan("dev"));

// Use routers
// TODO : Move Endpoint route path to Router instead.
app.use('/api/projects', projectsRouter);

// Error middlewares
app.get('*', notFoundMiddleware);
app.use('*', methodNotFoundMiddleware);
app.use(errorsMiddleware);

// Start listening
app.listen(process.env.PORT, () => {
    console.log(`Server listening to port ${process.env.PORT} ...`);
})
