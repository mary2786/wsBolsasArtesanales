const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Design = new Schema({
    code: String,
	name: String,
    description: String,
    price: String,
    numColors: Number,
    image: {
        type: String,
        default: ''
    }
});

const design = mongoose.model('Designs', Design);

module.exports = { design };