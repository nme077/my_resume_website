const mongoose = require('mongoose');

const qualificationSchema = {
    title: String,
    points: [
        {
            point: String
        }
    ]
};

module.exports = mongoose.model('Qualification', qualificationSchema);