const {uploader} = require('../utils/cloudinaryConfig');
const {dataUri} =  require('../middlewares/multerUpload')
/*const addPhoto = async(root, args)=>{

    if(args.photo){
        const { createReadStream } = await args.photo;
        const stream = createReadStream();
        const photo = await storage({stream});

        await User.findByIdAndUpdate(args.id, {$set:{image:photo.url}})

        return photo.url;
    }
}*/


exports.addPhoto = async(req, res) => {
    let param = req.file;

    if(param){

        const file =  dataUri(req).content;
		const result =  await uploader.upload(file).catch( err => res.status(400).json(err))
		const message = {"message":"Image uploaded successfully","url":result.url}
		res.status(200).json(message)

        //await User.findByIdAndUpdate(args.id, {$set:{image:photo.url}})                
    }else{
        res.status(400).json({message: 'No se recibieron los parámetros requeridos'});
    }
};
