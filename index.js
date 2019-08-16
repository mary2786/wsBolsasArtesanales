//require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const {cloudinaryConfig} =  require('./utils/cloudinaryConfig');

const {multerUpload} = require('./middlewares/multerUpload');
const PORT = process.env.PORT;

const cors = require('cors')
const app = express();
app.use('*',cloudinaryConfig);
app.use(cors())

mongoose.connect(process.env.MONGOURL, {useNewUrlParser: true}, (err) => {
    if(!err){
        console.log('Mongo conectado correctamente');
    }
});


const {createDesign, createSize, createBag, getAllBags, getAllColors, getAllPrices, createColor, createPrices, getAllSizes } = require('./controllers/bag');
const {createUser, login}= require('./controllers/user');
const {addPhoto} = require('./controllers/multimedia');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.post('/Design', createDesign);
app.post('/Size', createSize);
app.post('/Bag', createBag);
app.post('/Color', createColor);
app.post('/Price', createPrices);
app.post('/User', createUser);
app.get('/Bags',getAllBags);
app.get('/Colors',getAllColors);
app.get('/Prices',getAllPrices);
app.get('/Sizes',getAllSizes);
app.post('/Login', login);
app.post('/Upload',multerUpload,addPhoto);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
})