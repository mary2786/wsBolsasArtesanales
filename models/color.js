const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Color = new Schema({	
    name: String,
    codeHtml: String
});

const color = mongoose.model('Colors', Color);

module.exports = { color };