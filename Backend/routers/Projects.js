const express = require('express');
const projectsHandler = require('../handlers/project');

const router = express.Router();

router.get('/', projectsHandler);

module.exports = router;