const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Stack = require('./helpers/StackHelper');
const Portfolio = require('./models/Portfolio');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/palm');


app.post('/', async (req, res, next) => {
    const project = new Portfolio(req.body.data);
    const saved = await project.save();
    return res.json(saved);
});


app.listen(5000, () => {
    console.log("Server listening to port 5000 ....");
})