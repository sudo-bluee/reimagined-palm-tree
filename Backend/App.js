// Usings
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const ProjectsRouter = require('./routers/Projects');
const { NotFoundMiddleware, ErrorsMiddleware, MethodNotFoundMiddleware } = require('./middlewares/ErrorMiddleware');
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
app.use('/projects', ProjectsRouter);

// Error middlewares
app.get('*', NotFoundMiddleware);
app.use('*', MethodNotFoundMiddleware);
app.use(ErrorsMiddleware);

// Start listening
app.listen(5000, () => {
    console.log("Server listening to port 5000 ....");
})