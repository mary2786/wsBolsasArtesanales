const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Price = new Schema({
    description: String
});

const price = mongoose.model('price', Price);

module.exports = { price };