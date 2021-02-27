const mongoose = require('mongoose');

const jobSchema = {
    image: String,
    title: String,
    company: String,
    location: String,
    duration: String,
    description: String
};

module.exports = mongoose.model('Job', jobSchema);