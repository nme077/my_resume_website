const mongoose = require('mongoose');

const educationSchema = {
    image: String,
    degree: String,
    field: String,
    misc: String
};

module.exports = mongoose.model('Education', educationSchema);