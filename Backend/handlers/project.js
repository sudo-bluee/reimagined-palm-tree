const Portfolio = require('../models/Portfolio');

function findAllProjects( req, res, next )
{
    return Portfolio.findPortfolioProjects()
        .then(result => {
            return res.json(result);
        })
            .catch(err => next(err));
}

module.exports = findAllProjects;