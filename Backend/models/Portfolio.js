const mongoose = require('mongoose');
const Stack = require('../helpers/StackHelper');
const APIError = require("../helpers/APIError");
const { processDBError } = require('../helpers/ProcessDBError');

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
        catch (err) {
            return Promise.reject(processDBError(err));
        }
    },

    async findPortfolioProjects()
    {
        try {
            const projects = await this.find();

            return projects;
        }
        catch (err)
        {
            return processDBError(err);
        }
    },

    async findProjectById(_id)
    {
        try {

            if (!mongoose.Types.ObjectId.isValid(_id))
            {
                throw new APIError(400, "Bad requset", "Project Id is not valid.");
            }

            const user = await this.findById(_id);
            
            if (!user)
            {
                throw new APIError("404", "Not Found", "Project not found");
            }
            return user.toObject();
        }
        catch (err)
        {
            return Promise.reject(processDBError(err));
        }
    },
}



module.exports = mongoose.model('Project', portfolioSchema);