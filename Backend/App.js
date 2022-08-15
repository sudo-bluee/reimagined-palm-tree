// Usings
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
// Imports
const { ProjectsRouter } = require('./routers');
const { ErrorsMiddleware } = require('./middlewares');
// Destructuring Imports
const { notFoundMiddleware, methodNotFoundMiddleware, errorsMiddleware } = ErrorsMiddleware;
// TODO : Use environement variables
// Connect to mongodb
mongoose.connect('mongodb://localhost/palm')
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
app.use(morgan("tiny"));

// Use routers
// TODO : Move Endpoint route path to Router instead.
app.use('/api/projects', ProjectsRouter);

// Error middlewares
app.get('*', notFoundMiddleware);
app.use('*', methodNotFoundMiddleware);
app.use(errorsMiddleware);

// Start listening
app.listen(5000, () => {
    console.log("Server listening to port 5000 ....");
})