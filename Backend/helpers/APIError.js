
class APIError extends Error{
    constructor( status = 500, title = "Error", message = "An Unknown error occured" )
    {
        super(message);
        this.message = message;
        this.status = status;
        this.title = title;
    }

    toJson()
    {
        const { message, status, title } = this;
        return {
            error: {
                status, message, title
            }
        }
    }
}

module.exports = APIError;