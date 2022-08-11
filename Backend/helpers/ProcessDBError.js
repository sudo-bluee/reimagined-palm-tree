const APIError = require("./APIError");


function processDBError(error)
{
    var err = error; 
    if (!(err instanceof APIError))
    {
        err = new APIError(500, err.title || "Internal server error", err.message);
    }
    return err;
}

module.exports = {
    processDBError
}