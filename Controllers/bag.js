const { design } = require('../models/design');
const { size } = require('../models/size'); 
const { bag } = require('../models/bag'); 
const { price } = require('../models/price'); 
const { color } = require('../models/color'); 

exports.createColor = (req, res) => {
    let params = req.body;

    if(params.name){

        let newColor = color({
            name: params.name,
            codeHtml: params.codeHtml
        });

        newColor.save((err, result)=> {
            if (err) {
                res.status(500).json({message: 'Ocurrió un error', err});
            } 
            
            if(result){
                res.status(201).json({status:'OK', data: result});
            }else{
                res.status(400).json({message: 'No se creó el registro'});
            }
        });                        
    }else{
        res.status(400).json({message: 'No se recibieron los parámetros requeridos'});
    }
};

exports.createPrices = (req, res) => {
    let params = req.body;

    if(params.description){

        let newPrice = price({
            description: params.description
        });

        newPrice.save((err, result)=> {
            if (err) {
                res.status(500).json({message: 'Ocurrió un error', err});
            } 
            
            if(result){
                res.status(201).json({status:'OK', data: result});
            }else{
                res.status(400).json({message: 'No se creó el registro'});
            }
        });                        
    }else{
        res.status(400).json({message: 'No se recibieron los parámetros requeridos'});
    }
};


exports.createDesign = (req, res) => {
    let params = req.body;

    if(params.name && params.description && params.price && params.numColors){

        let newDesign = design({
            name: params.name,
            description: params.description,
            price: params.price,
            numColors: params.numColors,
        });

        newDesign.save((err, result)=> {
            if (err) {
                res.status(500).json({message: 'Ocurrió un error', err});
            } 
            
            if(result){
                res.status(201).json({status:'OK', data: result});
            }else{
                res.status(400).json({message: 'No se creó el registro'});
            }
        });                        
    }else{
        res.status(400).json({message: 'No se recibieron los parámetros requeridos'});
    }
};

exports.createSize = (req, res) => {
    let params = req.body;

    if(params.name && params.description && params.percentage){

        let newSize = size({
            name: params.name,
            description: params.description,
            percentage: params.percentage
        });

        newSize.save((err, result)=> {
            if (err) {
                res.status(500).json({message: 'Ocurrió un error', err});
            } 
            
            if(result){
                res.status(201).json({status:'OK', data: result});
            }else{
                res.status(400).json({message: 'No se creó el registro'});
            }
        });                        
    }else{
        res.status(400).json({message: 'No se recibieron los parámetros requeridos'});
    }
};


exports.createBag = (req, res) => {
    let params = req.body;

    if(params.code && params.name && params.size && params.price && params.stock && params.color){

        let newBag = bag({
            code: params.code,
            name: params.name,
            description: params.description,
            size: params.size,
            price: params.price,
            stock: params.stock,
            color: params.color,
            status: params.status,
            label: params.label,
            rangoPrice:params.rangoPrice,
            cantidad: params.cantidad,
            image: params.image
        });

        newBag.save((err, result)=> {
            if (err) {
                res.status(500).json({message: 'Ocurrió un error', err});
            } 
            
            if(result){
                res.status(201).json({status:'OK', data: result});
            }else{
                res.status(400).json({message: 'No se creó el registro'});
            }
        });                        
    }else{
        res.status(400).json({message: 'No se recibieron los parámetros requeridos'});
    }
};


exports.getAllBags = async(req, res) => {
    const bags = await bag.find();
    res.status(201).json(bags);
};

exports.getAllColors = async(req, res) => {
    const colors = await color.find();
    res.status(201).json(colors);
};

exports.getAllDesigns = async(req, res) => {
    const designs = await design.find();
    res.status(201).json({designs:designs});
};

exports.getAllSizes = async(req, res) => {
    const sizes = await size.find();
    res.status(201).json(sizes);
};

exports.getAllPrices = async(req, res) => {
    const prices = await price.find();
    res.status(201).json(prices);
};