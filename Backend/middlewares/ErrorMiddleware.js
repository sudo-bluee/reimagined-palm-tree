const APIError = require("../helpers/APIError");

function NotFoundMiddleware(req, res, next)
{
    const error = new APIError(404, "Not Found", "Data requested not found.");
    return next(error); 
}

function ErrorsMiddleware(err, req, res, next)
{
    if (!(err instanceof APIError))
    {
        err = new APIError(500, "Internal server error", err.message );
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

function MethodNotFoundMiddleware(req, res, next)
{
    const error = new APIError(405, "Method Not Allowed", "Method used is not allowed.");
    return next(error); 
}

module.exports = {
    NotFoundMiddleware,
    MethodNotFoundMiddleware,
    ErrorsMiddleware
}