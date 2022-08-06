const express = require('express');
const { findAllProjects, findProjectById } = require('../handlers/project');

const router = express.Router();

router.get('/', findAllProjects)
    .get('/:id', findProjectById);

module.exports = router;