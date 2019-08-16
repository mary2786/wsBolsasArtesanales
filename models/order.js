const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Bag = new Schema({
	userId: String,
	bagId: String,
    dateOrder: String,
    size: String,
    price: String,
    stock: Number,
    color: String,
    status: Number,
    image: {
        type: String,
        default: ''
    }
});

const bag = mongoose.model('Bags', Bag);

module.exports = { bag };