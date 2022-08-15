// Usings
const express = require('express');

// Imports
const { ProjectsHandler } = require('../handlers');

// Imports Destructing
const { findAllProjects, findProjectById } = ProjectsHandler;


const router = express.Router();

router
    .get('/', findAllProjects)
    .get('/:id', findProjectById);

module.exports = router;