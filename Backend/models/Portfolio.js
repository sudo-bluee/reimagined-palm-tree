const mongoose = require('mongoose');
const Stack = require('../helpers/StackHelper');
const APIError = require("../helpers/APIError");

const { Schema } = mongoose;

let portfolioSchema = Schema({
    name: String,
    shortDesc: { type: String, maxLength : 50 },
    longDesc: String,
    stack : [{ type : Number, enum : Stack }]
});

portfolioSchema.statics = {

    async addPortfolioProject( project )
    {
        try {
            
            const savedProject = await project.save();
            return savedProject.toObject();
        }
        catch (error) {
            return Promise.reject(error);
        }
    },

    async findPortfolioProjects()
    {
        return this.find()
            .exec()
            .then(result => {
                return result;
            })
            .catch(err => {
                return Promise.reject(new APIError(500, "Internal Server Error", `Failed to execute query : ${err.message}`));
            });
    },

    async findProjectById(_id)
    {
        try {
            
            const user = await this.findById( _id );
            if (!user)
            {
                throw new APIError("404", "Not Found", "Project not found");
            }
            return user.toObject();
        }
        catch (err)
        {
            return Promise.reject(new APIError("500", "Internal server error", "Query is retarded"));
        }
    },
}



module.exports = mongoose.model('Project', portfolioSchema);