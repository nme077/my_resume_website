const mongoose = require('mongoose');

const skillSchema = {
    title: String,
    skills: [
        {
            skill: String
        }
    ]
};

module.exports = mongoose.model('Skill', skillSchema);