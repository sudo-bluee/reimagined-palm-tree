const APIError = require("../helpers/APIError");

function notFoundMiddleware(req, res, next)
{
    const error = new APIError(404, "Not Found", "Data requested not found.");
    return next(error); 
}

function errorsMiddleware(err, req, res, next)
{
    if (!(err instanceof APIError))
    {
        err = new APIError(500, err.type, err.message );
    }
    const { status, message, title } = err;

    return res.status(status).json({
        error: {
            title,
            status,
            message
        }
    })
}

function methodNotFoundMiddleware(req, res, next)
{
    const error = new APIError(405, "Method Not Allowed", "Method used is not allowed.");
    return next(error); 
}

module.exports = {
    notFoundMiddleware,
    methodNotFoundMiddleware,
    errorsMiddleware
}