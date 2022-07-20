const mongoose = require('mongoose');
const Stack = require('../helpers/StackHelper');

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
        try {
            return await this.find();
        }
        catch (error)
        {
            Promise.reject(error);
        }
    },

    async findProjectById(_id)
    {
        return await this.findOne({ _id })
            .exec()
            .catch(e => Promise.reject(e));
    }
}



module.exports = mongoose.model('Project', portfolioSchema);