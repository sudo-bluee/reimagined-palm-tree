// Usings
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ProjectsRouter = require('./routers/Projects');
const { NotFoundMiddleware, ErrorsMiddleware, MethodNotFoundMiddleware } = require('./middlewares/ErrorMiddleware');
// Connect to mongodb
mongoose.connect('mongodb://localhost/palm');

const app = express();

// Add services
app.use(bodyParser.json());

// Use routers
app.use('/projects', ProjectsRouter);
// Todo : Move error handlers in seperate file.
app.get('*', NotFoundMiddleware);
app.use('*', MethodNotFoundMiddleware);
app.use(ErrorsMiddleware);

// Start listening
app.listen(5000, () => {
    console.log("Server listening to port 5000 ....");
})