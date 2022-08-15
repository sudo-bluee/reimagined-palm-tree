// Usings
const express = require('express');

// Imports
const { projectsHandler } = require('../handlers');

// Imports Destructing
const { findAllProjects, findProjectById } = projectsHandler;


const router = express.Router();

router
    .get('/', findAllProjects)
    .get('/:id', findProjectById);

module.exports = router;