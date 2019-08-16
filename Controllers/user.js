const bcrypt = require('bcrypt');
const saltRounds = 10;
const { user } = require('../models/user');

exports.login = (req, res)=>{
    let params = req.body;

    console.log(params);

    if(params.email && params.password){
        user.findOne({ email: params.email}, (err, response)=> { 
            if(err){
                res.status(500).json({message:'Ocurrió un error'});
            }else if(response !== null){
                bcrypt.compare(params.password, response.password, function(err, resp) {
                    if(err){
                        res.status(500).json({message:'Ocurrió un error', err});
                    }

                    if(resp){
                        response.password = ':(';
                        res.status(201).json({status:'OK', data: response});
                    }else{
                        res.status(400).json({message: 'Usuario y/o contraseña incorrectos'});
                    }
                });
            }else{
                res.status(200).json({message: `El correo ${params.email} no existe`});
            }
        });
    }else{
        res.status(400).json({message: 'No se recibieron los parámetros requeridos'});
    }
};

exports.createUser = (req, res) => {
    let params = req.body;

    if(params.name && params.email && params.password){

        user.findOne({ email: params.email}, (err, response)=> {
            if(err){
                res.status(500).json({message:'Ocurrió un error'});
            }else if(response !== null){
                res.status(200).json({message: `El correo ${params.email} ya existe`});
            }else{

                bcrypt.genSalt(saltRounds, function(err, salt) {
                    bcrypt.hash(params.password, salt, function(err, hash) {
                        let newUser = user({
                            name: params.name,
                            email: params.email,
                            password: hash
                        });

                        newUser.save((err, result)=> {
                            if (err) {
                                res.status(500).json({message: 'Ocurrió un error', err});
                            } 
                            
                            if(result){
                                newUser.password = ':(';
                                res.status(201).json({status:'OK', message:'Se creó correctamente el usuario', data: result});
                            }else{
                                res.status(400).json({message: 'No se creó el registro'});
                            }
                        });                        
                    });
                });
            }
        });
    }else{
        res.status(400).json({message: 'No se recibieron los parámetros requeridos'});
    }
};