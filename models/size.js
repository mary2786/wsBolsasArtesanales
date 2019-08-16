const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Size = new Schema({
	name: String,
    description: String,
    percentage: Number
});

const size = mongoose.model('Sizes', Size);

module.exports = { size };
