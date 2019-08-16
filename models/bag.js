const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Bag = new Schema({
	name: String,
	code: String,
    description: String,
    label: String,
    size: String,
    price: String,
    stock: Number,
    color: String,
    status: Number,
    rangoPrice: String,
    cantidad: String,
    image: {
        type: String,
        default: ''
    }
});

const bag = mongoose.model('Bags', Bag);

module.exports = { bag };