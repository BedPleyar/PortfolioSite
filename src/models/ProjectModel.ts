import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please enter a title for the project"]
        },

        description: {
            type: String,
            required: [true, "Please enter a description for the project"]
        },

        date: {
            type: Date,
            required: true,
            default: new Date()
        },

        keywords: {
            type: Array<String>,
            required: true,
            default: []
        },

        image: {
            type: String,
            required: false
        }

    },

    {
        timestamps: true
    }

    
)

const Project = mongoose.model('Project', projectSchema)

module.exports = (Project) 
