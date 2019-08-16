//require('dotenv').config();
const {config,uploader} = require('cloudinary');


const cloudinaryConfig =  (req,res,next) => {

	config({ 
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.CLOUD_APIKEY,
        api_secret: process.env.CLOUD_APISECRET 
    });

	next();
}

module.exports = {
	cloudinaryConfig,
	uploader
}