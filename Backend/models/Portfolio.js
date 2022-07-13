const mongoose = require('mongoose');
const Stack = require('../helpers/StackHelper');

const { Schema } = mongoose;

let portfolioSchema = Schema({
    name: String,
    shortDesc: { type: String, maxLength : 50 },
    longDesc: String,
    stack : [{ type : Number, enum : Stack }]
});

module.exports = mongoose.model('Project', portfolioSchema);