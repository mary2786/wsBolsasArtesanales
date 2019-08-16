const {uploader} = require('../utils/cloudinaryConfig');
const {dataUri} =  require('../middlewares/multerUpload')

exports.addPhoto = async(req, res) => {
    let param = req.file;

    if(param){

        const file =  dataUri(req).content;
		const result =  await uploader.upload(file).catch( err => res.status(400).json(err))
		const message = {"message":"Image uploaded successfully","url":result.url}
		res.status(200).json(message)
             
    }else{
        res.status(400).json({message: 'No se recibieron los parámetros requeridos'});
    }
};
