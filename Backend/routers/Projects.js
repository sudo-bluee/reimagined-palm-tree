const { findAllProjects, findProjectById } = require('../handlers/project');
const express = require('express');

const router = express.Router();

router
    .get('/', findAllProjects)
    .get('/:id', findProjectById);

module.exports = router;